export const newsSources: Source[] = [
  // -------- International Feeds --------
  {
    code: "INTER-YN",
    name: "Yahoo News",
    url: "https://www.yahoo.com/news/rss",
  },
  {
    code: "INTER-LH",
    name: "Life Hacker",
    url: "https://lifehacker.com/rss",
  },
  {
    code: "INTER-TC",
    name: "TechCrunch",
    url: "https://techcrunch.com/feed/",
  },
  {
    code: "INTER-WIRED",
    name: "Wired",
    url: "https://www.wired.com/feed/rss",
  },
  {
    code: "INTER-THEVERGE",
    name: "The Verge",
    url: "https://www.theverge.com/rss/index.xml",
  },
  {
    code: "INTER-ARST",
    name: "Ars Technica",
    url: "https://feeds.arstechnica.com/arstechnica/index",
  },
  {
    code: "INTER-IETECH",
    name: "Indian Express Technology",
    url: "https://indianexpress.com/section/technology/feed/",
  },
  {
    code: "INTER-NDTVS",
    name: "NDTV Sports",
    url: "https://feeds.feedburner.com/ndtvnews-sports",
  },
  {
    code: "INTER-ESPNIN",
    name: "ESPN India",
    url: "https://www.espn.in/rss/news",
  },
  {
    code: "INTER-ESPN",
    name: "ESPN",
    url: "https://www.espn.com/espn/rss/news",
  },
  {
    code: "INTER-ESPNCRIC",
    name: "ESPN Cricket",
    url: "https://www.espn.com/espn/rss/news",
  },
  {
    code: "INTER-SKYSPORTS",
    name: "Sky Sports",
    url: "https://www.skysports.com/rss/12040",
  },
  {
    code: "INTER-BBCSPORTS",
    name: "BBC Sport",
    url: "http://feeds.bbci.co.uk/sport/rss.xml",
  },
  // -------- United States Feeds --------
  {
    code: "US-NYT",
    name: "New York Times",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
  },
  {
    code: "US-CNN",
    name: "CNN News",
    url: "http://rss.cnn.com/rss/cnn_topstories.rss",
  },
  {
    code: "US-HP",
    name: "Huffington Post",
    url: "https://www.huffpost.com/section/front-page/feed",
  },
  {
    code: "US-FN",
    name: "Fox News",
    url: "https://moxie.foxnews.com/google-publisher/latest.xml",
  },
  {
    code: "US-R",
    name: "Reuters",
    url: "https://cdn.feedcontrol.net/8/1114-wioSIX3uu8MEj.xml",
  },
  {
    code: "US-P",
    name: "Politico",
    url: "http://www.politico.com/rss/politicopicks.xml",
  },
  {
    code: "US-LAT",
    name: "Los Angeles Times",
    url: "https://www.latimes.com/local/rss2.0.xml",
  },
  // -------- Australia Feeds --------
  {
    code: "AU-SMH",
    name: "Sydney Morning Herald - Latest News",
    url: "https://www.smh.com.au/rss/feed.xml",
  },
  {
    code: "AU-ABC",
    name: "ABC News",
    url: "https://www.abc.net.au/news/feed/1948/rss.xml",
  },
  {
    code: "AU-TA",
    name: "The Age - Latest News",
    url: "https://www.theage.com.au/rss/feed.xml",
  },
  {
    code: "AU-PN",
    name: "PerthNow",
    url: "https://www.perthnow.com.au/news/feed",
  },
  {
    code: "AU-CT",
    name: "The Canberra Times - Local News",
    url: "https://www.canberratimes.com.au/rss.xml",
  },
  {
    code: "AU-BT",
    name: "Brisbane Times - Latest News",
    url: "https://www.brisbanetimes.com.au/rss/feed.xml",
  },
  {
    code: "AU-IA",
    name: "Independent Australia",
    url: "http://feeds.feedburner.com/IndependentAustralia",
  },
  {
    code: "AU-BN",
    name: "Business News - Latest Headlines",
    url: "https://www.businessnews.com.au/rssfeed/latest.rss",
  },
  {
    code: "AU-ID",
    name: "InDaily",
    url: "https://indaily.com.au/feed/",
  },
  {
    code: "AU-C",
    name: "Crikey",
    url: "https://feeds.feedburner.com/com/rCTl",
  },
  {
    code: "AU-MW",
    name: "Michael West",
    url: "https://www.michaelwest.com.au/feed/",
  },
  // -------- Canada Feeds --------
  {
    code: "CA-CBCN",
    name: "CBC News",
    url: "https://www.cbc.ca/cmlink/rss-topstories",
  },
  {
    code: "CA-CTVN",
    name: "CTV News",
    url: "https://www.ctvnews.ca/rss/ctvnews-ca-top-stories-public-rss-1.822009",
  },
  {
    code: "CA-FP",
    name: "Financial Post",
    url: "https://business.financialpost.com/feed/",
  },
  {
    code: "CA-NP",
    name: "National Post",
    url: "https://nationalpost.com/feed/",
  },
  {
    code: "CA-OC",
    name: "Ottawa Citizen",
    url: "https://ottawacitizen.com/feed/",
  },
  {
    code: "CA-TP",
    name: "The Province",
    url: "https://theprovince.com/feed/",
  },
  {
    code: "CA-TST",
    name: "Toronto Star",
    url: "https://www.thestar.com/content/thestar/feed.RSSManagerServlet.articles.topstories.rss",
  },
  {
    code: "CA-TSU",
    name: "Toronto Sun",
    url: "https://torontosun.com/category/news/feed",
  },
  // -------- Germany Feeds --------
  {
    code: "DE-ZO",
    name: "ZEIT ONLINE",
    url: "https://www.zeit.de/gsitemaps/index.rss",
  },
  {
    code: "DE-FO",
    name: "FOCUS Online",
    url: "https://rss.focus.de/fol/XML/rss_folnews.xml",
  },
  {
    code: "DE-DW",
    name: "Deutsche Welle",
    url: "https://rss.dw.com/rdf/rss-en-all",
  },
  // -------- India Feeds --------
  {
    code: "IN-TH",
    name: "The Hindu",
    url: "https://www.thehindu.com/news/national/feeder/default.rss",
  },
  {
    code: "IN-TOI",
    name: "Times of India",
    url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
  },
  {
    code: "IN-HT",
    name: "Hindustan Times",
    url: "https://www.hindustantimes.com/rss/topnews/rssfeed.xml",
  },
  {
    code: "IN-IE",
    name: "Indian Express",
    url: "https://indianexpress.com/feed/",
  },
  {
    code: "IN-NDTV",
    name: "NDTV",
    url: "https://feeds.feedburner.com/ndtvnews-latest",
  },
  {
    code: "IN-BS",
    name: "Business Standard",
    url: "https://www.business-standard.com/rss/latest.rss",
  },
  // -------- Middle East Feeds --------
  {
    code: "ME-AJ",
    name: "Al Jazeera",
    url: "https://www.aljazeera.com/xml/rss/all.xml",
  },
  // -------- UK Feeds --------
  {
    code: "UK-BBC",
    name: "BBC News",
    url: "http://feeds.bbci.co.uk/news/rss.xml",
  },
  {
    code: "UK-GU",
    name: "The Guardian",
    url: "https://www.theguardian.com/world/rss",
  },
];
