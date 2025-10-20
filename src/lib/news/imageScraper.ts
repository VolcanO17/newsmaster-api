import { load } from "cheerio";

// Simple in-memory cache for image URLs to avoid repeated scraping
const imageCache: { [key: string]: string } = {};

export const getArticleImage = async (url: string): Promise<string> => {
  if (url in imageCache) {
    return imageCache[url];
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
    });

    if (response.status !== 200) {
      imageCache[url] = "";
      return "";
    }

    const html = await response.text();
    const $ = load(html);

    // Try Open Graph image first (most reliable)
    const ogImage = $('meta[property="og:image"]').attr('content');
    if (ogImage && ogImage.startsWith('http')) {
      imageCache[url] = ogImage;
      return ogImage;
    }

    // Try Twitter image as fallback
    const twitterImage = $('meta[name="twitter:image"]').attr('content');
    if (twitterImage && twitterImage.startsWith('http')) {
      imageCache[url] = twitterImage;
      return twitterImage;
    }

    // Try first img tag with reasonable size as last resort
    const imgTags = $('img');
    for (let i = 0; i < imgTags.length; i++) {
      const img = imgTags.eq(i);
      const imgSrc = img.attr('src');

      if (imgSrc) {
        let fullUrl = imgSrc;
        if (imgSrc.startsWith('//')) {
          fullUrl = 'https:' + imgSrc;
        } else if (!imgSrc.startsWith('http')) {
          fullUrl = new URL(imgSrc, url).href;
        }

        // Check if image is reasonably sized (not icons)
        const width = img.attr('width');
        const height = img.attr('height');

        if (width && height) {
          const w = parseInt(width);
          const h = parseInt(height);
          if (w >= 200 && h >= 150) {
            imageCache[url] = fullUrl;
            return fullUrl;
          }
        } else {
          // If no dimensions, check if it looks like a content image
          const srcLower = imgSrc.toLowerCase();
          if (srcLower.includes('article') || srcLower.includes('content') || srcLower.includes('photo')) {
            imageCache[url] = fullUrl;
            return fullUrl;
          }
        }
      }
    }

    // No image found
    imageCache[url] = "";
    return "";

  } catch (error) {
    console.log(`Error getting image from ${url}:`, error);
    imageCache[url] = "";
    return "";
  }
};
