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
    'geopolitics': ['GEO-FP', 'GEO-CFR', 'GEO-BROOKINGS', 'GEO-CARNEGIE', 'GEO-ATLANTIC', 'GEO-RAND', 'GEO-CHATHAM', 'GEO-IISS', 'GEO-CSIS', 'GEO-FA', 'GEO-DIPLOMAT', 'GEO-EURASIA', 'GEO-STRATFOR', 'GEO-GPF', 'GEO-WPR', 'GEO-RCW', 'GEO-AJ', 'GEO-BBCWORLD', 'GEO-DW', 'GEO-FRANCE24', 'GEO-RT', 'GEO-CGTN', 'GEO-PRESSTV', 'GEO-TASS', 'GEO-XINHUA', 'GEO-ANADOLU', 'GEO-MEE', 'GEO-SCMP', 'GEO-NIKKEI', 'GEO-HTINT', 'GEO-HINDUINT', 'GEO-IEINT', 'GEO-ORF', 'GEO-IDSA', 'GEO-CPR', 'GEO-BROOKINGSINDIA', 'GEO-CARNEGIEINDIA', 'GEO-GATEWAY', 'GEO-VIF', 'GEO-ICWA'],
    'defense': ['DEF-JDN', 'DEF-DN', 'DEF-AF', 'DEF-ARMY', 'DEF-NAVY', 'DEF-MARINE', 'DEF-AIRFORCE', 'DEF-BREAKING', 'DEF-NATIONAL', 'DEF-MILITARY', 'DEF-STRATFOR', 'DEF-JANES', 'DEF-GLOBAL', 'DEF-ASPI', 'DEF-RUSI', 'DEF-IISS', 'DEF-CSIS', 'DEF-RAND', 'DEF-BROOKINGS', 'DEF-CFR', 'DEF-HERITAGE', 'DEF-CATO', 'DEF-AEI', 'DEF-IDSA', 'DEF-ORF', 'DEF-CIP', 'DEF-SIPRI', 'DEF-ACADEMY', 'DEF-NAVAL', 'DEF-AIR', 'DEF-COAST', 'DEF-SPACE', 'DEF-CYBER', 'DEF-DOD', 'DEF-PENTAGON', 'DEF-OSD', 'DEF-JOINT', 'DEF-ARMYHQ', 'DEF-NAVYHQ', 'DEF-AFHQ', 'DEF-MARINEHQ', 'DEF-COASTHQ', 'DEF-SPACEHQ', 'DEF-NATO', 'DEF-EU', 'DEF-UN', 'DEF-OSCE', 'DEF-ARAB', 'DEF-ASEAN', 'DEF-SAARC', 'DEF-BRICS', 'DEF-SCO', 'DEF-QUAD', 'DEF-AUKUS', 'DEF-FIVE', 'DEF-G7', 'DEF-G20', 'DEF-INDIA', 'DEF-INDIANARMY', 'DEF-INDIANNAVY', 'DEF-INDIANAF', 'DEF-DRDO', 'DEF-BDL', 'DEF-BEL', 'DEF-HAL', 'DEF-MAZAGON', 'DEF-GSL', 'DEF-LT', 'DEF-TATA', 'DEF-REL', 'DEF-MAHINDRA', 'DEF-ASH', 'DEF-BEML', 'DEF-OF', 'DEF-PAKISTAN', 'DEF-PAKARMY', 'DEF-PAKNAVY', 'DEF-PAKAF', 'DEF-CHINA', 'DEF-CHINAARMY', 'DEF-RUSSIA', 'DEF-RUSSIANARMY', 'DEF-UKMOD', 'DEF-UKARMY', 'DEF-UKROYALNAVY', 'DEF-UKRAF', 'DEF-FRANCE', 'DEF-GERMANY', 'DEF-JAPAN', 'DEF-SOUTHKOREA', 'DEF-ISRAEL', 'DEF-ISRAELIDF', 'DEF-SAUDI', 'DEF-UAE', 'DEF-TURKEY', 'DEF-IRAN', 'DEF-NORTHKOREA', 'DEF-BRAZIL', 'DEF-MEXICO', 'DEF-AUSTRALIA', 'DEF-CANADA', 'DEF-SOUTHKOREAARMY', 'DEF-JAPANGSDF', 'DEF-JAPANMSDF', 'DEF-JAPANASDF', 'DEF-TURKEYARMY', 'DEF-IRANARMY', 'DEF-BRAZILARMY', 'DEF-MEXICOARMY', 'DEF-AUSTRALIAARMY', 'DEF-CANADAARMY', 'DEF-INDONESIA', 'DEF-THAILAND', 'DEF-SINGAPORE', 'DEF-PHILIPPINES', 'DEF-VIETNAM', 'DEF-MALAYSIA', 'DEF-NEWZEALAND', 'DEF-SOUTHKOREAARMYHQ', 'DEF-JAPANGSDFHQ', 'DEF-JAPANMSDFHQ', 'DEF-JAPANASDFHQ', 'DEF-TURKEYARMYHQ', 'DEF-IRANARMYHQ', 'DEF-BRAZILARMYHQ', 'DEF-MEXICOARMYHQ', 'DEF-AUSTRALIAARMYHQ', 'DEF-CANADAARMYHQ', 'DEF-INDONESIAHQ', 'DEF-THAILANDHQ', 'DEF-SINGAPOREHQ', 'DEF-PHILIPPINESHQ', 'DEF-VIETNAMHQ', 'DEF-MALAYSIAHQ', 'DEF-NEWZEALANDHQ', 'DEF-BULGARIA', 'DEF-CROATIA', 'DEF-CZECH', 'DEF-ESTONIA', 'DEF-FINLAND', 'DEF-GREECE', 'DEF-HUNGARY', 'DEF-ICELAND', 'DEF-LATVIA', 'DEF-LITHUANIA', 'DEF-LUXEMBOURG', 'DEF-NETHERLANDS', 'DEF-NORWAY', 'DEF-POLAND', 'DEF-PORTUGAL', 'DEF-ROMANIA', 'DEF-SLOVAKIA', 'DEF-SLOVENIA', 'DEF-SPAIN', 'DEF-SWEDEN', 'DEF-SWITZERLAND', 'DEF-UKRAINE', 'DEF-ALBANIA', 'DEF-ARMENIA', 'DEF-AZERBAIJAN', 'DEF-BELARUS', 'DEF-BOSNIA', 'DEF-GEORGIA', 'DEF-KAZAKHSTAN', 'DEF-KYRGYZSTAN', 'DEF-MOLDOVA', 'DEF-MONTENEGRO', 'DEF-NORTHMACEDONIA', 'DEF-SERBIA', 'DEF-TAJIKISTAN', 'DEF-TURKMENISTAN', 'DEF-UZBEKISTAN', 'DEF-EGYPT', 'DEF-ALGERIA', 'DEF-MOROCCO', 'DEF-TUNISIA', 'DEF-LIBYA', 'DEF-NIGERIA', 'DEF-SOUTHKOREA', 'DEF-ETHIOPIA', 'DEF-KENYA', 'DEF-UGANDA', 'DEF-TANZANIA', 'DEF-GHANA', 'DEF-SENEGAL', 'DEF-COTEIVOIRE', 'DEF-NAMIBIA', 'DEF-BOTSWANA', 'DEF-ZAMBIA', 'DEF-ZIMBABWE', 'DEF-MOZAMBIQUE', 'DEF-ANGOLA', 'DEF-MALAWI', 'DEF-MADAGASCAR', 'DEF-MAURITIUS', 'DEF-SEYCHELLES', 'DEF-COMOROS', 'DEF-DJIBOUTI', 'DEF-SOMALIA', 'DEF-SUDAN', 'DEF-CHAD', 'DEF-NIGER', 'DEF-MALI', 'DEF-BURKINA', 'DEF-GUINEA', 'DEF-SIERRA', 'DEF-LIBERIA', 'DEF-GAMBIA', 'DEF-GUINEABISSAU', 'DEF-CABOVERDE', 'DEF-SAHARA', 'DEF-MONGOLIA', 'DEF-NEPAL', 'DEF-BHUTAN', 'DEF-BANGLADESH', 'DEF-SRILANKA', 'DEF-MYANMAR', 'DEF-CAMBODIA', 'DEF-LAOS', 'DEF-TIMOR', 'DEF-PAPUA'],
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
      positive: ['military', 'army', 'navy', 'air force', 'missile', 'weapon', 'defence', 'defense', 'armed forces', 'BrahMos', 'Astra', 'DRDO', 'IAF', 'Indian Army', 'Pakistan Army', 'China military', 'US Army', 'NATO', 'terrorism', 'militant', 'border conflict', 'war', 'peacekeeping', 'soldier', 'troops', 'brigade', 'regiment', 'cadet', 'military training', 'military exercise', 'maneuver', 'intelligence', 'spy', 'surveillance', 'threat', 'cyber security', 'national security', 'border security', 'fighter jet', 'submarine', 'tank', 'artillery', 'nuclear', 'ballistic missile', 'cruise missile', 'radar', 'satellite', 'drones', 'UAV', 'helicopter', 'commando', 'special forces', 'marines', 'coast guard', 'air defense', 'anti-missile', 'patriot', 's-400', 'Rafale', 'Tejas', 'Su-30', 'MiG', 'Apache', 'Chinook', 'Akash', 'Prithvi', 'Shaurya', 'Agni', 'K missile', 'Pinaka', 'Smerch', 'GRAD', 'Bofors', 'howitzer', 'gunship', 'destroyer', 'frigate', 'corvette', 'carrier', 'battleship', 'patrol boat', 'minesweeper', 'amphibious', 'landing craft', 'nuclear submarine', 'torpedo', 'anti-submarine', 'sonar', 'electronic warfare', 'cyber warfare', 'information warfare', 'psychological warfare', 'guerrilla', 'insurgency', 'counter-terrorism', 'counter-insurgency', 'UN peacekeeping', 'ceasefire', 'truce', 'armistice', 'defense deal', 'arms trade', 'defense export', 'defense import', 'defense sanctions', 'embargo', 'blockade', 'deterrence', 'mutually assured destruction', 'first strike', 'second strike', 'retaliation', 'escalation', 'de-escalation', 'crisis management', 'contingency planning', 'emergency response', 'civil defense', 'home guard', 'reservist', 'conscription', 'draft', 'mobilization', 'demobilization', 'standby', 'alert', 'red alert', 'defcon', 'force protection', 'base security', 'perimeter defense', 'checkpoint', 'patrol', 'reconnaissance', 'intelligence gathering', 'signals intelligence', 'human intelligence', 'open source intelligence', 'technical intelligence', 'counterintelligence', 'deception', 'camouflage', 'concealment', 'stealth', 'invisibility', 'cloaking', 'jamming', 'electronic countermeasures', 'cyber defense', 'network security', 'encryption', 'decryption', 'hacking', 'cyber attack', 'ransomware', 'malware', 'phishing', 'social engineering', 'insider threat', 'sabotage', 'espionage', 'treason', 'defection', 'desertion', 'AWOL', 'fragging', 'mutiny', 'coup', 'revolution', 'insurrection', 'rebellion', 'separatism', 'terrorism', 'extremism', 'radicalization', 'recruitment', 'indoctrination', 'propaganda', 'disinformation', 'fake news', 'psychological operations', 'psyops', 'influence operations', 'hybrid warfare', 'asymmetric warfare', 'conventional warfare', 'unconventional warfare', 'irregular warfare', 'guerrilla warfare', 'urban warfare', 'jungle warfare', 'desert warfare', 'mountain warfare', 'arctic warfare', 'naval warfare', 'air warfare', 'space warfare', 'economic warfare', 'trade war', 'proxy war', 'civil war', 'regional conflict', 'international crisis', 'world war', 'cold war', 'hot war', 'limited war', 'total war', 'nuclear war', 'chemical warfare', 'biological warfare', 'radiological warfare', 'electromagnetic warfare', 'directed energy', 'laser weapons', 'railguns', 'particle beams', 'plasma weapons', 'hypersonic', 'supersonic', 'subsonic', 'stealth technology', 'unmanned systems', 'autonomous weapons', 'lethal autonomous weapons', 'robot soldiers', 'exoskeletons', 'power armor', 'body armor', 'helmets', 'night vision', 'thermal imaging', 'infrared', 'ultraviolet', 'quantum sensors', 'AI warfare', 'machine learning', 'big data', 'predictive analytics', 'decision support', 'command and control', 'C4ISR', 'battle management', 'situational awareness', 'common operational picture', 'blue force tracking', 'red force tracking', 'threat assessment', 'risk analysis', 'vulnerability assessment', 'capability assessment', 'force structure', 'organizational design', 'military doctrine', 'tactics', 'techniques', 'procedures', 'standard operating procedures', 'rules of engagement', 'law of armed conflict', 'Geneva conventions', 'human rights', 'war crimes', 'atrocities', 'genocide', 'ethnic cleansing', 'crimes against humanity', 'humanitarian intervention', 'responsibility to protect', 'peacebuilding', 'reconstruction', 'stabilization', 'nation building', 'development assistance', 'foreign aid', 'military assistance', 'training missions', 'advisory missions', 'peacekeeping operations', 'stabilization operations', 'counterinsurgency operations', 'humanitarian operations', 'disaster response', 'search and rescue', 'medical evacuation', 'MEDEVAC', 'CASEVAC', 'humanitarian corridor', 'safe zone', 'no-fly zone', 'weapons embargo', 'arms control', 'disarmament', 'non-proliferation', 'nuclear non-proliferation', 'chemical weapons convention', 'biological weapons convention', 'cluster munitions', 'landmines', 'anti-personnel mines', 'explosive remnants of war', 'unexploded ordnance', 'mine clearance', 'demining', 'humanitarian demining', 'conventional arms trade', 'small arms', 'light weapons', 'man-portable air defense', 'surface-to-air missile', 'anti-tank missile', 'rocket propelled grenade', 'mortar', 'grenade', 'landmine', 'improvised explosive device', 'IED', 'vehicle-borne IED', 'suicide bomber', 'car bomb', 'truck bomb', 'dirty bomb', 'radiological dispersal device', 'chemical weapon', 'biological weapon', 'toxin', 'pathogen', 'virus', 'bacteria', 'anthrax', 'plague', 'smallpox', 'ebola', 'sarin', 'VX', 'mustard gas', 'chlorine', 'phosgene', 'lewisite', 'tabun', 'soman', 'cyclosarin', 'novichok', 'ricin', 'botulinum', 'tetanus', 'brucellosis', 'tularemia', 'Q fever', 'glanders', 'melioidosis', 'psittacosis', 'orf', 'Venezuelan equine encephalitis', 'Eastern equine encephalitis', 'Western equine encephalitis', 'Japanese encephalitis', 'West Nile virus', 'yellow fever', 'dengue', 'chikungunya', 'zika', 'malaria', 'leishmaniasis', 'trypanosomiasis', 'schistosomiasis', 'filariasis', 'onchocerciasis', 'dracunculiasis', 'taeniasis', 'cysticercosis', 'echinococcosis', 'fascioliasis', 'opisthorchiasis', 'clonorchiasis', 'paragonimiasis', 'angiostrongyliasis', 'gnathostomiasis', 'sparganosis', 'diphyllobothriasis', 'hymenolepiasis', 'taenia solium', 'taenia saginata', 'echinococcus granulosus', 'echinococcus multilocularis', 'fasciola hepatica', 'fasciola gigantica', 'opisthorchis viverrini', 'opisthorchis felineus', 'clonorchis sinensis', 'paragonimus westermani', 'angiostrongylus cantonensis', 'gnathostoma spinigerum', 'sparganum', 'diphyllobothrium latum', 'hymenolepis nana', 'hymenolepis diminuta'],
      negative: ['polls', 'election', 'BJP', 'Congress', 'government', 'minister', 'parliament', 'policy', 'diplomat', 'president', 'prime minister', 'rally', 'candidate', 'vote', 'assembly', 'MLA', 'MP', 'bihar', 'politics', 'political', 'movie', 'film', 'actor', 'actress', 'celebrity', 'Bollywood', 'Hollywood', 'music', 'song', 'album', 'concert', 'award', 'cricket', 'football', 'IPL', 'Olympics', 'championship', 'tournament', 'player', 'coach', 'match', 'game', 'company', 'corporate', 'market', 'stock', 'investment', 'economy', 'finance', 'trade', 'industry', 'startup', 'CEO', 'profit', 'revenue', 'medical', 'hospital', 'doctor', 'disease', 'vaccine', 'pandemic', 'healthcare', 'medicine', 'treatment', 'COVID', 'virus', 'research', 'study', 'scientist', 'discovery', 'experiment', 'laboratory', 'physics', 'chemistry', 'biology', 'astronomy', 'space', 'NASA', 'ISRO', 'temple', 'gold', 'silver', 'ivory', 'valuables', 'missing', 'audit', 'verification', 'recordkeeping', 'misuse', 'misappropriation', 'accountability', 'vulnerable', 'Pragya Thakur', 'punish', 'daughters', 'non-Hindus', 'break legs', 'obedience', 'Punjab DGP', 'suspicious death', 'video', 'probe', 'Delhi air pollution', 'AQI', 'toxic', 'firecrackers', 'Muhurat trading', 'Nifty', 'Sensex', 'stock market', 'AWS outage', 'McDonald', 'Microsoft', 'Apple Music', 'Alexa', 'disruption', 'DynamoDB', 'cloud infrastructure', 'fragility', 'Rishabh Pant', 'cricket captain', 'India A', 'South Africa A', 'toe injury', 'IMD', 'heavy rain', 'thunderstorms', 'flood risk', 'monsoon', 'flash flood', 'Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'caution', 'purification', 'namaz', 'Shaniwarwada', 'ASI officer', 'plaint', 'BJP MP', 'Medha Kulkarni', 'NCP', 'Shiv Sena', 'communal harmony', 'Google Cloud', 'Karthik Narain', 'Accenture CTO', 'enterprise technology', 'innovation', 'AI-driven', 'cloud customers', 'growth', 'Samvat 2082', 'Motilal Oswal', 'Nifty earnings', 'stock picks', 'SBI', 'M&M', 'BEL', 'gains', 'Pappu Yadav', 'Nitish Kumar', 'Bihar CM', 'NDA', 'Bihar elections', 'PM Modi', 'Diwali', 'Deepavali', 'national progress', 'Lord Ram', 'justice', 'Naxalism', 'GST Savings Festival', 'global influence', 'self-reliance', 'unity', 'MacKenzie Scott', 'Amazon stake', 'philanthropic', 'diversity', 'equity', 'inclusion', 'low-income students', 'Historically Black Colleges', 'Universities', 'Mohammed Rizwan', 'Pakistan captain', 'Shaheen Shah Afridi', 'betting companies', 'Rashid Latif', 'PCB', 'ideological bias', 'Faisalabad', 'Bengaluru techie', 'suicide scandal', 'Ola Electric CEO', 'abetment to suicide', 'workplace humiliation', 'salary denial', 'Bhavish Aggarwal', 'FIR', 'Asrani', 'funeral', 'Sholay star', 'private', 'Diwali greeting', 'Hindi cinema', 'Hardik Pandya', 'Mahieka Sharma', 'relationship', 'coordinated red outfits', 'beach birthday', 'airport sightings', 'romance', 'Japan PM', 'Sanae Takaichi', 'first female', 'parliamentary vote', 'coalition agreement', 'political deadlock', 'stability', 'Shinzo Abe', 'Orionid meteor shower', 'US', 'shooting stars', 'Halley Comet']
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
