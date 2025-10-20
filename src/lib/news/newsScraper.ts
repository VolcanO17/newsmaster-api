import { load } from "cheerio";
import { newsSources } from "./constants";
import { findElement } from "@/lib/utils/cheerio";
import { articleFromItem } from "@/lib/news/utils";
import { getArticleImage } from "@/lib/news/imageScraper";
import { BadRequest, TimeoutException } from "@/exceptions/server";

export const fetchNewsFromRSS = async (source: Source): Promise<Article[]> => {
  let response;
  try {
    response = await fetch(source.url, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
      },
    });
  } catch (error: any) {
    console.log(`Failed to fetch RSS feed ${source.name}, ${error.message}`);
    return [];
  }

  if (response.status !== 200) {
    console.log(`Bad response from RSS feed ${source.url}`);
    return [];
  }

  const responseText = await response.text();
  const $ = load(responseText, { xmlMode: true });

  const items = findElement($, "item");

  if (!items) {
    console.log(`No items found in ${source.url}`);
    return [];
  }

  const articles: Article[] = [];

  for (let i = 0; i < items.length; i++) {
    const element = items.eq(i);
    const itemElement = $(element);

    const baseArticle = articleFromItem(itemElement);
    if (!baseArticle) continue;

    // Get image for the article
    const imageUrl = await getArticleImage(baseArticle.link);

    const article: Article = {
      source: source.name,
      ...baseArticle,
      image: imageUrl || undefined
    };

    articles.push(article);
    if (articles.length >= 20) break;
  }

  if (articles.length === 0) {
    console.log(`No valid articles found from ${source.url}`);
  }

  return articles;
};

export const getSourceNews = async (sourceName: string): Promise<Article[]> => {
  const source = newsSources.find(
    (src) => src.code === sourceName.toUpperCase()
  );

  if (!source) {
    console.log(`${sourceName} source doesn't exist`);
    throw new BadRequest(`Invalid source name`);
  }

  try {
    const articles = await fetchNewsFromRSS(source);
    return articles;
  } catch (error: any) {
    console.log(
      `getNewsSource failed: for ${source.name}, reason: ${error.message}`
    );
    return [];
  }
};

export const getRandomNews = async (): Promise<Article[]> => {
  const sourceIndex = Math.floor(Math.random() * newsSources.length);
  const source = newsSources[sourceIndex];

  try {
    const articles = await fetchNewsFromRSS(source);
    return articles;
  } catch (error: any) {
    console.log(
      `getRandomNews failed: for ${source.name}, reason: ${error.message}`
    );
    return [];
  }
};

export const getCategorizedNews = async (category: string): Promise<Article[]> => {
  // Map category to relevant sources - focused on key categories with fresh feeds
  const categoryMapping: { [key: string]: string[] } = {
    'general': ['IN-TOI', 'IN-HT', 'IN-IE', 'IN-NDTV', 'US-CNN', 'US-NYT', 'US-R', 'AU-ABC', 'CA-CBCN'],
    'technology': ['INTER-TC', 'INTER-WIRED', 'INTER-THEVERGE', 'INTER-ARST', 'INTER-IETECH'],
    'science': [ 'US-NYT', 'IN-TOI', 'US-R', 'AU-ABC', 'DE-DW'],
    'business': ['IN-BS', 'US-CNN', 'US-NYT', 'CA-FP', 'US-R', 'AU-BN', 'CA-NP'],
    'sports': ['INTER-ESPN', 'INTER-ESPNCRIC', 'INTER-SKYSPORTS', 'INTER-BBCSPORTS', 'INTER-NDTVS', 'INTER-ESPNIN'],
    'geopolitics': [ 'US-NYT', 'IN-TOI', 'IN-HT', 'US-R', 'DE-DW', 'US-P', 'AU-ABC', 'ME-AJ', 'UK-BBC', 'UK-GU'],
    'defense': ['IN-TOI', 'IN-HT', 'IN-IE', 'US-CNN', 'US-NYT', 'US-R', 'DE-DW', 'AU-ABC'],
    // Other categories kept for completeness but not prioritized
    'politics': ['IN-TOI', 'IN-HT', 'IN-IE', 'US-CNN', 'US-NYT', 'CA-CBCN', 'US-P', 'AU-ABC'],
    'world': [ 'US-NYT', 'IN-TOI', 'IN-HT', 'US-R', 'DE-DW', 'AU-ABC', 'ME-AJ', 'UK-BBC', 'UK-GU'],
    'health': ['US-CNN', 'US-NYT', 'IN-TOI', 'US-R', 'AU-ABC'],
    'entertainment': ['IN-TOI', 'US-CNN', 'US-HP', 'AU-ABC'],
    'military': ['IN-TOI', 'IN-HT', 'US-CNN', 'US-R', 'DE-DW'],
    'security': ['IN-TOI', 'IN-HT', 'US-CNN', 'US-NYT', 'US-R'],
    'economy': ['IN-BS', 'US-CNN', 'US-NYT', 'CA-FP', 'US-R', 'AU-BN'],
    'finance': ['IN-BS', 'US-CNN', 'CA-FP', 'US-R', 'AU-BN', 'CA-NP'],
    'education': ['IN-TOI', 'US-CNN', 'AU-ABC', 'US-R'],
    'environment': ['US-CNN', 'US-NYT', 'IN-TOI', 'AU-ABC', 'DE-DW'],
    'climate': ['US-CNN', 'US-NYT', 'IN-TOI', 'AU-ABC', 'DE-DW'],
    'travel': ['IN-TOI', 'US-CNN', 'AU-ABC', 'US-HP'],
    'culture': ['IN-TOI', 'US-CNN', 'AU-ABC', 'DE-DW'],
    'arts': ['IN-TOI', 'US-CNN', 'AU-ABC', 'US-HP'],
    'music': ['IN-TOI', 'US-CNN', 'US-HP', 'AU-ABC'],
    'film': ['IN-TOI', 'US-CNN', 'US-HP', 'AU-ABC'],
    'books': ['IN-TOI', 'US-CNN', 'US-HP', 'AU-ABC'],
    'food': ['IN-TOI', 'US-CNN', 'AU-ABC', 'US-HP'],
    'lifestyle': ['IN-TOI', 'US-CNN', 'US-HP', 'AU-ABC'],
    'fashion': ['IN-TOI', 'US-CNN', 'US-HP', 'AU-ABC'],
    'gaming': ['US-CNN', 'IN-TOI', 'INTER-YN', 'AU-ABC'],
    'video games': ['US-CNN', 'IN-TOI', 'INTER-YN', 'AU-ABC']
  };

  const relevantSources = categoryMapping[category] || ['IN-TOI', 'IN-HT', 'US-CNN'];
  const allArticles: Article[] = [];

  // Fetch from multiple relevant sources
  for (const sourceCode of relevantSources) {
    const source = newsSources.find(src => src.code === sourceCode);
    if (source) {
      try {
        const articles = await fetchNewsFromRSS(source);
        allArticles.push(...articles);
        if (allArticles.length >= 30) break; // Limit total articles
      } catch (error: any) {
        console.log(`Failed to fetch from ${source.name}: ${error.message}`);
      }
    }
  }

  // Filter articles by category keywords in title/description
  const categoryKeywords: { [key: string]: { positive: string[], negative: string[] } } = {
    'technology': {
      positive: ['AI', 'artificial intelligence', 'software', 'app', 'digital', 'cyber', 'internet', 'smartphone', 'computer', 'data', 'cloud', 'blockchain', 'crypto', 'technology', 'tech', 'innovation', 'startup', 'gadget', 'device', 'mobile', 'web', 'programming', 'code', 'algorithm', 'machine learning', 'deep learning', 'neural network', 'robotics', 'automation', 'IoT', '5G', 'quantum', 'VR', 'AR', 'metaverse', 'NFT', 'cryptocurrency', 'bitcoin', 'ethereum', 'web3', 'developer', 'coding', 'hack', 'cybersecurity', 'data science', 'analytics', 'platform', 'framework', 'API', 'database', 'server', 'network', 'chip', 'processor', 'semiconductor'],
      negative: ['polls', 'election', 'BJP', 'Congress', 'government', 'minister', 'parliament', 'policy', 'diplomat', 'president', 'prime minister', 'rally', 'candidate', 'vote', 'assembly', 'MLA', 'MP', 'bihar', 'politics', 'political']
    },

    'science': {
      positive: ['research', 'study', 'scientist', 'discovery', 'experiment', 'laboratory', 'physics', 'chemistry', 'biology', 'astronomy', 'space', 'NASA', 'ISRO'],
      negative: []
    },
    'business': {
      positive: ['company', 'corporate', 'market', 'stock', 'investment', 'economy', 'finance', 'trade', 'industry', 'startup', 'CEO', 'profit', 'revenue'],
      negative: []
    },
    'politics': {
      positive: ['government', 'minister', 'election', 'party', 'parliament', 'policy', 'diplomat', 'ambassador', 'president', 'prime minister', 'BJP', 'Congress'],
      negative: []
    },
    'world': {
      positive: ['international', 'global', 'foreign', 'diplomatic', 'treaty', 'summit', 'UN', 'NATO', 'alliance', 'conflict', 'war', 'peace'],
      negative: []
    },
    'health': {
      positive: ['medical', 'hospital', 'doctor', 'disease', 'vaccine', 'pandemic', 'healthcare', 'medicine', 'treatment', 'COVID', 'virus'],
      negative: []
    },
    'entertainment': {
      positive: ['movie', 'film', 'actor', 'actress', 'celebrity', 'Bollywood', 'Hollywood', 'music', 'song', 'album', 'concert', 'award'],
      negative: []
    },
    'sports': {
      positive: ['cricket', 'football', 'tennis', 'IPL', 'Olympics', 'championship', 'tournament', 'player', 'coach', 'match', 'game'],
      negative: []
    },
    'geopolitics': {
      positive: ['border', 'territory', 'sovereignty', 'diplomacy', 'international relations', 'foreign policy', 'alliance', 'treaty'],
      negative: []
    },
    'defense': {
      positive: ['military', 'army', 'navy', 'air force', 'missile', 'weapon', 'security', 'defence', 'armed forces', 'BrahMos', 'Astra', 'DRDO', 'IAF', 'Indian Army'],
      negative: []
    },
    'military': {
      positive: ['troops', 'soldier', 'commander', 'brigade', 'division', 'regiment', 'cadet', 'training', 'exercise', 'maneuver'],
      negative: []
    },
    'security': {
      positive: ['intelligence', 'spy', 'surveillance', 'threat', 'terrorism', 'cyber security', 'national security', 'border security'],
      negative: []
    },
    'economy': {
      positive: ['GDP', 'growth', 'inflation', 'unemployment', 'budget', 'tax', 'reform', 'economic policy', 'development'],
      negative: []
    },
    'finance': {
      positive: ['bank', 'RBI', 'monetary policy', 'interest rate', 'loan', 'credit', 'investment', 'portfolio', 'mutual fund'],
      negative: []
    },
    'education': {
      positive: ['school', 'college', 'university', 'student', 'teacher', 'curriculum', 'exam', 'admission', 'scholarship'],
      negative: []
    },
    'environment': {
      positive: ['climate', 'pollution', 'ecology', 'conservation', 'wildlife', 'forest', 'green', 'sustainable', 'carbon'],
      negative: []
    },
    'climate': {
      positive: ['global warming', 'temperature', 'emission', 'COP', 'renewable', 'solar', 'wind', 'fossil fuel', 'greenhouse'],
      negative: []
    },
    'travel': {
      positive: ['tourism', 'vacation', 'holiday', 'destination', 'flight', 'hotel', 'resort', 'beach', 'mountain'],
      negative: []
    },
    'culture': {
      positive: ['tradition', 'heritage', 'festival', 'art', 'craft', 'dance', 'music', 'literature', 'history'],
      negative: []
    },
    'arts': {
      positive: ['painting', 'sculpture', 'exhibition', 'gallery', 'artist', 'museum', 'cultural', 'creative'],
      negative: []
    },
    'music': {
      positive: ['singer', 'band', 'album', 'song', 'concert', 'melody', 'instrument', 'composer'],
      negative: []
    },
    'film': {
      positive: ['cinema', 'director', 'producer', 'script', 'screenplay', 'box office', 'award', 'festival'],
      negative: []
    },
    'books': {
      positive: ['author', 'novel', 'literature', 'publication', 'bestseller', 'poetry', 'writer'],
      negative: []
    },
    'food': {
      positive: ['recipe', 'cuisine', 'restaurant', 'chef', 'cooking', 'ingredient', 'delicious', 'taste'],
      negative: []
    },
    'lifestyle': {
      positive: ['fashion', 'beauty', 'wellness', 'fitness', 'luxury', 'trend', 'style', 'home'],
      negative: []
    },
    'fashion': {
      positive: ['designer', 'couture', 'runway', 'model', 'brand', 'collection', 'outfit', 'accessory'],
      negative: []
    },
    'gaming': {
      positive: ['game', 'player', 'console', 'mobile game', 'e-sports', 'tournament', 'gamer'],
      negative: []
    },
    'video games': {
      positive: ['gaming', 'console', 'PC', 'mobile', 'RPG', 'shooter', 'strategy', 'multiplayer'],
      negative: []
    }
  };
   
  const keywords = categoryKeywords[category];
  if (!keywords) {
    return allArticles.slice(0, 20);
  }

  let filteredArticles: Article[];

  // For technology and sports, since we're using dedicated feeds, skip keyword filtering
  if (category === 'technology' || category === 'sports') {
    filteredArticles = allArticles;
  } else {
    filteredArticles = allArticles.filter(article => {
      const text = (article.title + ' ' + (article.description || '')).toLowerCase();

      // Check if article contains positive keywords (require at least 2 matches for better accuracy)
      const positiveMatches = keywords.positive.filter(keyword =>
        text.includes(keyword.toLowerCase())
      );

      // Check if article contains negative keywords (exclude if found)
      const hasNegative = keywords.negative.some(keyword => text.includes(keyword.toLowerCase()));

      return positiveMatches.length >= 2 && !hasNegative;
    });
  }

  // Filter for fresh articles (last 1 hour for very current news)
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - 1 * 60 * 60 * 1000);

  const freshArticles = filteredArticles.filter(article => {
    const pubDate = new Date(article.pubDate);
    return pubDate >= oneHourAgo;
  });

  // Sort by publication date (newest first)
  const sortedArticles = freshArticles.sort((a, b) =>
    new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  // Return filtered articles or fallback to general articles if none match
  return sortedArticles.length > 0 ? sortedArticles.slice(0, 20) : allArticles.slice(0, 20);
};
