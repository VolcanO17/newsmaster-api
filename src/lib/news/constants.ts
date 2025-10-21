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
    url: "http://rss.cnn.com/rss/cnn_latest.rss",
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
    code: "US-WP",
    name: "Washington Post",
    url: "https://feeds.washingtonpost.com/rss/world",
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
  // -------- Science & Research Feeds --------
  {
    code: "SCI-NASA",
    name: "NASA News",
    url: "https://www.nasa.gov/rss/dyn/breaking_news.rss",
  },
  {
    code: "SCI-SCIENCEDAILY",
    name: "Science Daily",
    url: "https://www.sciencedaily.com/rss/all.xml",
  },
  {
    code: "SCI-NATURE",
    name: "Nature News",
    url: "https://www.nature.com/nature.rss",
  },
  {
    code: "SCI-SCIENCENEWS",
    name: "Science News",
    url: "https://www.sciencenews.org/feed",
  },
  {
    code: "SCI-SCIENCEMAG",
    name: "Science Magazine",
    url: "https://www.sciencemag.org/rss/news_current.xml",
  },
  {
    code: "SCI-NEWSCIENTIST",
    name: "New Scientist",
    url: "https://www.newscientist.com/feed/home/",
  },
  {
    code: "SCI-PHYSORG",
    name: "Phys.org",
    url: "https://phys.org/rss-feed/",
  },
  {
    code: "SCI-LIVESCIENCE",
    name: "Live Science",
    url: "https://www.livescience.com/feeds/all",
  },
  {
    code: "SCI-SPACE",
    name: "Space.com",
    url: "https://www.space.com/feeds/all",
  },
  {
    code: "SCI-ISRO",
    name: "ISRO News",
    url: "https://www.isro.gov.in/rss",
  },
  // -------- Sports Feeds --------
  {
    code: "SPORT-ESPN",
    name: "ESPN",
    url: "https://www.espn.com/espn/rss/news",
  },
  {
    code: "SPORT-BBCSPORT",
    name: "BBC Sport",
    url: "http://feeds.bbci.co.uk/sport/rss.xml",
  },
  {
    code: "SPORT-THEATHLETIC",
    name: "The Athletic",
    url: "https://theathletic.com/feed/",
  },
  {
    code: "SPORT-SKYSPORTS",
    name: "Sky Sports",
    url: "https://www.skysports.com/rss/12040",
  },
  {
    code: "SPORT-FOXSPORTS",
    name: "Fox Sports",
    url: "https://api.foxsports.com/v1/rss",
  },
  {
    code: "SPORT-CRICBUZZ",
    name: "Cricbuzz",
    url: "https://www.cricbuzz.com/rss",
  },
  {
    code: "SPORT-ESPNCRIC",
    name: "ESPN Cricket",
    url: "https://www.espn.com/espn/rss/news",
  },
  {
    code: "SPORT-INDIANEXPRESSSPORTS",
    name: "Indian Express Sports",
    url: "https://indianexpress.com/section/sports/feed/",
  },
  // -------- Technology Feeds --------
  {
    code: "TECH-TECHCRUNCH",
    name: "TechCrunch",
    url: "https://techcrunch.com/feed/",
  },
  {
    code: "TECH-ARSTECHNICA",
    name: "Ars Technica",
    url: "https://feeds.arstechnica.com/arstechnica/index",
  },
  {
    code: "TECH-THENEXTWEB",
    name: "The Next Web",
    url: "https://thenextweb.com/feed/",
  },
  {
    code: "TECH-ENGADGET",
    name: "Engadget",
    url: "https://www.engadget.com/rss.xml",
  },
  {
    code: "TECH-GIZMODO",
    name: "Gizmodo",
    url: "https://gizmodo.com/rss",
  },
  {
    code: "TECH-TECHREPUBLIC",
    name: "TechRepublic",
    url: "https://www.techrepublic.com/rssfeeds/articles/",
  },
  {
    code: "TECH-ZDNET",
    name: "ZDNet",
    url: "https://www.zdnet.com/news/rss.xml",
  },
  {
    code: "TECH-CNET",
    name: "CNET",
    url: "https://www.cnet.com/rss/news/",
  },
  {
    code: "TECH-INDIANEXPRESS TECH",
    name: "Indian Express Technology",
    url: "https://indianexpress.com/section/technology/feed/",
  },
  // -------- Stock Market & Finance Feeds --------
  {
    code: "STOCK-BLOOMBERG",
    name: "Bloomberg Markets",
    url: "https://feeds.bloomberg.com/markets/news.rss",
  },
  {
    code: "STOCK-REUTERSFINANCE",
    name: "Reuters Finance",
    url: "https://feeds.reuters.com/reuters/businessNews",
  },
  {
    code: "STOCK-CNBC",
    name: "CNBC",
    url: "https://www.cnbc.com/id/100003114/device/rss/rss.html",
  },
  {
    code: "STOCK-FORBES",
    name: "Forbes Finance",
    url: "https://www.forbes.com/money/feed/",
  },
  {
    code: "STOCK-WSJ",
    name: "Wall Street Journal Markets",
    url: "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
  },
  {
    code: "STOCK-FT",
    name: "Financial Times",
    url: "https://www.ft.com/rss/home/uk",
  },
  {
    code: "STOCK-BUSINESSSTANDARD",
    name: "Business Standard Markets",
    url: "https://www.business-standard.com/rss/markets-106.rss",
  },
  {
    code: "STOCK-MONEYCONTROL",
    name: "Moneycontrol",
    url: "https://www.moneycontrol.com/rss/latestnews.xml",
  },
  {
    code: "STOCK-ECONOMICTIMES",
    name: "Economic Times Markets",
    url: "https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms",
  },
  // -------- Defense & Military Feeds --------
  // -------- Indian Defense Sources (Priority) --------
  {
    code: "DEF-INDIA",
    name: "Indian Ministry of Defence",
    url: "https://www.mod.gov.in/rss",
  },
  {
    code: "DEF-INDIANARMY",
    name: "Indian Army",
    url: "https://indianarmy.nic.in/rss",
  },
  {
    code: "DEF-INDIANNAVY",
    name: "Indian Navy",
    url: "https://indiannavy.nic.in/rss",
  },
  {
    code: "DEF-INDIANAF",
    name: "Indian Air Force",
    url: "https://indianairforce.nic.in/rss",
  },
  {
    code: "DEF-DRDO",
    name: "Defence Research and Development Organisation",
    url: "https://www.drdo.gov.in/rss",
  },
  {
    code: "DEF-BDL",
    name: "Bharat Dynamics Limited",
    url: "https://bdl-india.in/rss",
  },
  {
    code: "DEF-BEL",
    name: "Bharat Electronics Limited",
    url: "https://www.bel-india.in/rss",
  },
  {
    code: "DEF-HAL",
    name: "Hindustan Aeronautics Limited",
    url: "https://www.hal-india.co.in/rss",
  },
  {
    code: "DEF-MAZAGON",
    name: "Mazagon Dock Shipbuilders",
    url: "https://www.mazagondock.in/rss",
  },
  {
    code: "DEF-GSL",
    name: "Garden Reach Shipbuilders & Engineers",
    url: "https://www.grse.in/rss",
  },
  {
    code: "DEF-LT",
    name: "Larsen & Toubro Defence",
    url: "https://www.larsentoubro.com/rss/defence",
  },
  {
    code: "DEF-TATA",
    name: "Tata Advanced Systems",
    url: "https://www.tataadvancedsystems.com/rss",
  },
  {
    code: "DEF-REL",
    name: "Reliance Defence",
    url: "https://www.reliancedefence.com/rss",
  },
  {
    code: "DEF-MAHINDRA",
    name: "Mahindra Defence",
    url: "https://www.mahindradefence.com/rss",
  },
  {
    code: "DEF-ASH",
    name: "Ashok Leyland Defence",
    url: "https://www.ashokleyland.com/rss/defence",
  },
  {
    code: "DEF-BEML",
    name: "BEML Defence",
    url: "https://www.bemlindia.in/rss/defence",
  },
  {
    code: "DEF-OF",
    name: "Ordnance Factory Board",
    url: "https://ofb.gov.in/rss",
  },
  // -------- Other Defense Sources --------
  {
    code: "DEF-JDN",
    name: "Jane's Defence News",
    url: "https://www.janes.com/feeds/rss",
  },
  {
    code: "DEF-DN",
    name: "Defense News",
    url: "https://www.defensenews.com/rss/",
  },
  {
    code: "DEF-AF",
    name: "Air Force Magazine",
    url: "https://www.airforcemag.com/rss/",
  },
  {
    code: "DEF-ARMY",
    name: "Army Times",
    url: "https://www.armytimes.com/rss/",
  },
  {
    code: "DEF-NAVY",
    name: "Navy Times",
    url: "https://www.navytimes.com/rss/",
  },
  {
    code: "DEF-MARINE",
    name: "Marine Corps Times",
    url: "https://www.marinecorpstimes.com/rss/",
  },
  {
    code: "DEF-AIRFORCE",
    name: "Air Force Times",
    url: "https://www.airforcetimes.com/rss/",
  },
  {
    code: "DEF-BREAKING",
    name: "Breaking Defense",
    url: "https://breakingdefense.com/feed/",
  },
  {
    code: "DEF-NATIONAL",
    name: "National Defense Magazine",
    url: "https://www.nationaldefensemagazine.org/rss/",
  },
  {
    code: "DEF-MILITARY",
    name: "Military.com",
    url: "https://www.military.com/rss/",
  },
  {
    code: "DEF-STRATFOR",
    name: "Stratfor",
    url: "https://worldview.stratfor.com/feed",
  },
  {
    code: "DEF-JANES",
    name: "Jane's Intelligence Review",
    url: "https://www.janes.com/feeds/rss/intelligence",
  },
  {
    code: "DEF-GLOBAL",
    name: "Global Security",
    url: "https://www.globalsecurity.org/rss/",
  },
  {
    code: "DEF-ASPI",
    name: "Australian Strategic Policy Institute",
    url: "https://www.aspi.org.au/rss",
  },
  {
    code: "DEF-RUSI",
    name: "Royal United Services Institute",
    url: "https://rusi.org/rss",
  },
  {
    code: "DEF-IISS",
    name: "International Institute for Strategic Studies",
    url: "https://www.iiss.org/rss",
  },
  {
    code: "DEF-CSIS",
    name: "Center for Strategic and International Studies",
    url: "https://www.csis.org/rss",
  },
  {
    code: "DEF-RAND",
    name: "RAND Corporation",
    url: "https://www.rand.org/rss/",
  },
  {
    code: "DEF-BROOKINGS",
    name: "Brookings Institution Defense",
    url: "https://www.brookings.edu/feed/?topic=defense",
  },
  {
    code: "DEF-CFR",
    name: "Council on Foreign Relations Defense",
    url: "https://www.cfr.org/rss/defense",
  },
  {
    code: "DEF-HERITAGE",
    name: "Heritage Foundation Defense",
    url: "https://www.heritage.org/rss/defense",
  },
  {
    code: "DEF-CATO",
    name: "Cato Institute Defense",
    url: "https://www.cato.org/rss/defense",
  },
  {
    code: "DEF-AEI",
    name: "American Enterprise Institute Defense",
    url: "https://www.aei.org/rss/defense",
  },
  {
    code: "DEF-IDSA",
    name: "Institute for Defence Studies and Analyses",
    url: "https://www.idsa.in/rss",
  },
  {
    code: "DEF-ORF",
    name: "Observer Research Foundation",
    url: "https://www.orfonline.org/rss",
  },
  {
    code: "DEF-CIP",
    name: "Centre for International Policy Studies",
    url: "https://www.cips-cepi.ca/rss",
  },
  {
    code: "DEF-SIPRI",
    name: "Stockholm International Peace Research Institute",
    url: "https://www.sipri.org/rss",
  },
  {
    code: "DEF-ACADEMY",
    name: "US Army War College",
    url: "https://warroom.armywarcollege.edu/rss/",
  },
  {
    code: "DEF-NAVAL",
    name: "US Naval Institute",
    url: "https://www.usni.org/rss",
  },
  {
    code: "DEF-AIR",
    name: "Air University",
    url: "https://www.airuniversity.af.edu/rss/",
  },
  {
    code: "DEF-COAST",
    name: "US Coast Guard",
    url: "https://www.dco.uscg.mil/rss/",
  },
  {
    code: "DEF-SPACE",
    name: "Space Force",
    url: "https://www.spaceforce.mil/rss/",
  },
  {
    code: "DEF-CYBER",
    name: "Cybersecurity and Infrastructure Security Agency",
    url: "https://www.cisa.gov/rss",
  },
  {
    code: "DEF-DOD",
    name: "US Department of Defense",
    url: "https://www.defense.gov/rss/",
  },
  {
    code: "DEF-PENTAGON",
    name: "Pentagon Press",
    url: "https://www.defense.gov/rss/pentagon-press.xml",
  },
  {
    code: "DEF-OSD",
    name: "Office of the Secretary of Defense",
    url: "https://www.defense.gov/rss/osd.xml",
  },
  {
    code: "DEF-JOINT",
    name: "Joint Chiefs of Staff",
    url: "https://www.jcs.mil/rss/",
  },
  {
    code: "DEF-ARMYHQ",
    name: "US Army Headquarters",
    url: "https://www.army.mil/rss/",
  },
  {
    code: "DEF-NAVYHQ",
    name: "US Navy Headquarters",
    url: "https://www.navy.mil/rss/",
  },
  {
    code: "DEF-AFHQ",
    name: "US Air Force Headquarters",
    url: "https://www.af.mil/rss/",
  },
  {
    code: "DEF-MARINEHQ",
    name: "US Marine Corps Headquarters",
    url: "https://www.marines.mil/rss/",
  },
  {
    code: "DEF-COASTHQ",
    name: "US Coast Guard Headquarters",
    url: "https://www.uscg.mil/rss/",
  },
  {
    code: "DEF-SPACEHQ",
    name: "US Space Force Headquarters",
    url: "https://www.spaceforce.mil/rss/",
  },
  {
    code: "DEF-NATO",
    name: "NATO",
    url: "https://www.nato.int/rss",
  },
  {
    code: "DEF-EU",
    name: "European Defence Agency",
    url: "https://www.eda.europa.eu/rss",
  },
  {
    code: "DEF-UN",
    name: "United Nations Peacekeeping",
    url: "https://peacekeeping.un.org/rss",
  },
  {
    code: "DEF-OSCE",
    name: "Organization for Security and Co-operation in Europe",
    url: "https://www.osce.org/rss",
  },
  {
    code: "DEF-ARAB",
    name: "Arab League Defense",
    url: "https://www.lasportal.org/rss/defense",
  },
  {
    code: "DEF-ASEAN",
    name: "ASEAN Defense",
    url: "https://asean.org/rss/defense",
  },
  {
    code: "DEF-SAARC",
    name: "SAARC Defense",
    url: "https://saarc-sec.org/rss/defense",
  },
  {
    code: "DEF-BRICS",
    name: "BRICS Defense",
    url: "https://infobrics.org/rss/defense",
  },
  {
    code: "DEF-SCO",
    name: "Shanghai Cooperation Organization",
    url: "https://eng.sectsco.org/rss",
  },
  {
    code: "DEF-QUAD",
    name: "Quad Security Dialogue",
    url: "https://www.state.gov/rss/quad",
  },
  {
    code: "DEF-AUKUS",
    name: "AUKUS",
    url: "https://www.dfat.gov.au/rss/aukus",
  },
  {
    code: "DEF-FIVE",
    name: "Five Eyes Intelligence Alliance",
    url: "https://www.fiveeyesalliance.org/rss",
  },
  {
    code: "DEF-G7",
    name: "G7 Defense",
    url: "https://www.g7.org/rss/defense",
  },
  {
    code: "DEF-G20",
    name: "G20 Defense",
    url: "https://www.g20.org/rss/defense",
  },
  {
    code: "DEF-INDIA",
    name: "Indian Ministry of Defence",
    url: "https://www.mod.gov.in/rss",
  },
  {
    code: "DEF-INDIANARMY",
    name: "Indian Army",
    url: "https://indianarmy.nic.in/rss",
  },
  {
    code: "DEF-INDIANNAVY",
    name: "Indian Navy",
    url: "https://indiannavy.nic.in/rss",
  },
  {
    code: "DEF-INDIANAF",
    name: "Indian Air Force",
    url: "https://indianairforce.nic.in/rss",
  },
  {
    code: "DEF-DRDO",
    name: "Defence Research and Development Organisation",
    url: "https://www.drdo.gov.in/rss",
  },
  {
    code: "DEF-BDL",
    name: "Bharat Dynamics Limited",
    url: "https://bdl-india.in/rss",
  },
  {
    code: "DEF-BEL",
    name: "Bharat Electronics Limited",
    url: "https://www.bel-india.in/rss",
  },
  {
    code: "DEF-HAL",
    name: "Hindustan Aeronautics Limited",
    url: "https://www.hal-india.co.in/rss",
  },
  {
    code: "DEF-MAZAGON",
    name: "Mazagon Dock Shipbuilders",
    url: "https://www.mazagondock.in/rss",
  },
  {
    code: "DEF-GSL",
    name: "Garden Reach Shipbuilders & Engineers",
    url: "https://www.grse.in/rss",
  },
  {
    code: "DEF-LT",
    name: "Larsen & Toubro Defence",
    url: "https://www.larsentoubro.com/rss/defence",
  },
  {
    code: "DEF-TATA",
    name: "Tata Advanced Systems",
    url: "https://www.tataadvancedsystems.com/rss",
  },
  {
    code: "DEF-REL",
    name: "Reliance Defence",
    url: "https://www.reliancedefence.com/rss",
  },
  {
    code: "DEF-MAHINDRA",
    name: "Mahindra Defence",
    url: "https://www.mahindradefence.com/rss",
  },
  {
    code: "DEF-ASH",
    name: "Ashok Leyland Defence",
    url: "https://www.ashokleyland.com/rss/defence",
  },
  {
    code: "DEF-BEML",
    name: "BEML Defence",
    url: "https://www.bemlindia.in/rss/defence",
  },
  {
    code: "DEF-OF",
    name: "Ordnance Factory Board",
    url: "https://ofb.gov.in/rss",
  },
  {
    code: "DEF-PAKISTAN",
    name: "Pakistan Ministry of Defence",
    url: "https://www.mod.gov.pk/rss",
  },
  {
    code: "DEF-PAKARMY",
    name: "Pakistan Army",
    url: "https://www.pakistanarmy.gov.pk/rss",
  },
  {
    code: "DEF-PAKNAVY",
    name: "Pakistan Navy",
    url: "https://www.paknavy.gov.pk/rss",
  },
  {
    code: "DEF-PAKAF",
    name: "Pakistan Air Force",
    url: "https://www.paf.gov.pk/rss",
  },
  {
    code: "DEF-CHINA",
    name: "China Ministry of National Defense",
    url: "https://eng.mod.gov.cn/rss",
  },
  {
    code: "DEF-CHINAARMY",
    name: "People's Liberation Army",
    url: "https://eng.chinamil.com.cn/rss",
  },
  {
    code: "DEF-RUSSIA",
    name: "Russia Ministry of Defence",
    url: "https://eng.mil.ru/rss",
  },
  {
    code: "DEF-RUSSIANARMY",
    name: "Russian Armed Forces",
    url: "https://eng.mil.ru/rss/army",
  },
  {
    code: "DEF-UKMOD",
    name: "UK Ministry of Defence",
    url: "https://www.gov.uk/rss/mod",
  },
  {
    code: "DEF-UKARMY",
    name: "British Army",
    url: "https://www.army.mod.uk/rss",
  },
  {
    code: "DEF-UKROYALNAVY",
    name: "Royal Navy",
    url: "https://www.royalnavy.mod.uk/rss",
  },
  {
    code: "DEF-UKRAF",
    name: "Royal Air Force",
    url: "https://www.raf.mod.uk/rss",
  },
  {
    code: "DEF-FRANCE",
    name: "France Ministry of Armed Forces",
    url: "https://www.defense.gouv.fr/rss",
  },
  {
    code: "DEF-GERMANY",
    name: "Germany Ministry of Defence",
    url: "https://www.bmvg.de/rss",
  },
  {
    code: "DEF-JAPAN",
    name: "Japan Ministry of Defence",
    url: "https://www.mod.go.jp/rss",
  },
  {
    code: "DEF-SOUTHKOREA",
    name: "South Korea Ministry of National Defense",
    url: "https://www.mnd.go.kr/rss",
  },
  {
    code: "DEF-ISRAEL",
    name: "Israel Ministry of Defence",
    url: "https://www.mod.gov.il/rss",
  },
  {
    code: "DEF-ISRAELIDF",
    name: "Israel Defense Forces",
    url: "https://www.idf.il/rss",
  },
  {
    code: "DEF-SAUDI",
    name: "Saudi Arabia Ministry of Defence",
    url: "https://www.mod.gov.sa/rss",
  },
  {
    code: "DEF-UAE",
    name: "UAE Ministry of Defence",
    url: "https://www.mod.gov.ae/rss",
  },
  {
    code: "DEF-TURKEY",
    name: "Turkey Ministry of National Defence",
    url: "https://www.msb.gov.tr/rss",
  },
  {
    code: "DEF-IRAN",
    name: "Iran Ministry of Defence",
    url: "https://www.mod.ir/rss",
  },
  {
    code: "DEF-NORTHKOREA",
    name: "North Korea Ministry of Defence",
    url: "https://www.mod.gov.kp/rss",
  },
  {
    code: "DEF-BRAZIL",
    name: "Brazil Ministry of Defence",
    url: "https://www.defesa.gov.br/rss",
  },
  {
    code: "DEF-MEXICO",
    name: "Mexico Secretariat of National Defense",
    url: "https://www.gob.mx/rss/sedena",
  },
  {
    code: "DEF-AUSTRALIA",
    name: "Australia Department of Defence",
    url: "https://www.defence.gov.au/rss",
  },
  {
    code: "DEF-CANADA",
    name: "Canada Department of National Defence",
    url: "https://www.canada.ca/rss/defence",
  },
  {
    code: "DEF-SOUTHKOREAARMY",
    name: "Republic of Korea Army",
    url: "https://www.army.mil.kr/rss",
  },
  {
    code: "DEF-JAPANGSDF",
    name: "Japan Ground Self-Defense Force",
    url: "https://www.mod.go.jp/gsdf/rss",
  },
  {
    code: "DEF-JAPANMSDF",
    name: "Japan Maritime Self-Defense Force",
    url: "https://www.mod.go.jp/msdf/rss",
  },
  {
    code: "DEF-JAPANASDF",
    name: "Japan Air Self-Defense Force",
    url: "https://www.mod.go.jp/asdf/rss",
  },
  {
    code: "DEF-TURKEYARMY",
    name: "Turkish Armed Forces",
    url: "https://www.tsk.tr/rss",
  },
  {
    code: "DEF-IRANARMY",
    name: "Islamic Republic of Iran Army",
    url: "https://www.army.ir/rss",
  },
  {
    code: "DEF-BRAZILARMY",
    name: "Brazilian Army",
    url: "https://www.eb.mil.br/rss",
  },
  {
    code: "DEF-MEXICOARMY",
    name: "Mexican Army",
    url: "https://www.gob.mx/rss/ejercito",
  },
  {
    code: "DEF-AUSTRALIAARMY",
    name: "Australian Army",
    url: "https://www.army.gov.au/rss",
  },
  {
    code: "DEF-CANADAARMY",
    name: "Canadian Army",
    url: "https://www.army-armee.forces.gc.ca/rss",
  },
  {
    code: "DEF-INDONESIA",
    name: "Indonesia Ministry of Defence",
    url: "https://www.kemhan.go.id/rss",
  },
  {
    code: "DEF-THAILAND",
    name: "Thailand Ministry of Defence",
    url: "https://www.mod.go.th/rss",
  },
  {
    code: "DEF-SINGAPORE",
    name: "Singapore Ministry of Defence",
    url: "https://www.mindef.gov.sg/rss",
  },
  {
    code: "DEF-PHILIPPINES",
    name: "Philippines Department of National Defense",
    url: "https://www.dnd.gov.ph/rss",
  },
  {
    code: "DEF-VIETNAM",
    name: "Vietnam Ministry of National Defence",
    url: "https://www.mod.gov.vn/rss",
  },
  {
    code: "DEF-MALAYSIA",
    name: "Malaysia Ministry of Defence",
    url: "https://www.mod.gov.my/rss",
  },
  {
    code: "DEF-NEWZEALAND",
    name: "New Zealand Ministry of Defence",
    url: "https://www.defence.govt.nz/rss",
  },
  {
    code: "DEF-SOUTHKOREAARMYHQ",
    name: "ROK Army Headquarters",
    url: "https://www.army.mil.kr/rss/hq",
  },
  {
    code: "DEF-JAPANGSDFHQ",
    name: "JGSDF Headquarters",
    url: "https://www.mod.go.jp/gsdf/rss/hq",
  },
  {
    code: "DEF-JAPANMSDFHQ",
    name: "JMSDF Headquarters",
    url: "https://www.mod.go.jp/msdf/rss/hq",
  },
  {
    code: "DEF-JAPANASDFHQ",
    name: "JASDF Headquarters",
    url: "https://www.mod.go.jp/asdf/rss/hq",
  },
  {
    code: "DEF-TURKEYARMYHQ",
    name: "Turkish General Staff",
    url: "https://www.tsk.tr/rss/hq",
  },
  {
    code: "DEF-IRANARMYHQ",
    name: "Iran Army Headquarters",
    url: "https://www.army.ir/rss/hq",
  },
  {
    code: "DEF-BRAZILARMYHQ",
    name: "Brazil Army Headquarters",
    url: "https://www.eb.mil.br/rss/hq",
  },
  {
    code: "DEF-MEXICOARMYHQ",
    name: "Mexican Army Headquarters",
    url: "https://www.gob.mx/rss/ejercito/hq",
  },
  {
    code: "DEF-AUSTRALIAARMYHQ",
    name: "Australian Army Headquarters",
    url: "https://www.army.gov.au/rss/hq",
  },
  {
    code: "DEF-CANADAARMYHQ",
    name: "Canadian Army Headquarters",
    url: "https://www.army-armee.forces.gc.ca/rss/hq",
  },
  {
    code: "DEF-INDONESIAHQ",
    name: "Indonesian Armed Forces HQ",
    url: "https://www.tni.mil.id/rss",
  },
  {
    code: "DEF-THAILANDHQ",
    name: "Royal Thai Armed Forces HQ",
    url: "https://www.rtaf.mi.th/rss",
  },
  {
    code: "DEF-SINGAPOREHQ",
    name: "Singapore Armed Forces HQ",
    url: "https://www.mindef.gov.sg/rss/saf",
  },
  {
    code: "DEF-PHILIPPINESHQ",
    name: "Armed Forces of the Philippines HQ",
    url: "https://www.afp.mil.ph/rss",
  },
  {
    code: "DEF-VIETNAMHQ",
    name: "Vietnam People's Army HQ",
    url: "https://www.qdnd.vn/rss",
  },
  {
    code: "DEF-MALAYSIAHQ",
    name: "Malaysian Armed Forces HQ",
    url: "https://www.mindef.gov.my/rss/atf",
  },
  {
    code: "DEF-NEWZEALANDHQ",
    name: "New Zealand Defence Force HQ",
    url: "https://www.nzdf.mil.nz/rss",
  },
  {
    code: "DEF-BULGARIA",
    name: "Bulgaria Ministry of Defence",
    url: "https://www.mod.bg/rss",
  },
  {
    code: "DEF-CROATIA",
    name: "Croatia Ministry of Defence",
    url: "https://www.morh.hr/rss",
  },
  {
    code: "DEF-CZECH",
    name: "Czech Republic Ministry of Defence",
    url: "https://www.army.cz/rss",
  },
  {
    code: "DEF-ESTONIA",
    name: "Estonia Ministry of Defence",
    url: "https://www.kmin.ee/rss",
  },
  {
    code: "DEF-FINLAND",
    name: "Finland Ministry of Defence",
    url: "https://www.defmin.fi/rss",
  },
  {
    code: "DEF-GREECE",
    name: "Greece Ministry of National Defence",
    url: "https://www.mod.mil.gr/rss",
  },
  {
    code: "DEF-HUNGARY",
    name: "Hungary Ministry of Defence",
    url: "https://www.honvedelem.hu/rss",
  },
  {
    code: "DEF-ICELAND",
    name: "Iceland Ministry of Foreign Affairs Defense",
    url: "https://www.government.is/rss/defense",
  },
  {
    code: "DEF-LATVIA",
    name: "Latvia Ministry of Defence",
    url: "https://www.mod.gov.lv/rss",
  },
  {
    code: "DEF-LITHUANIA",
    name: "Lithuania Ministry of National Defence",
    url: "https://www.kam.lt/rss",
  },
  {
    code: "DEF-LUXEMBOURG",
    name: "Luxembourg Ministry of Defence",
    url: "https://defense.public.lu/rss",
  },
  {
    code: "DEF-NETHERLANDS",
    name: "Netherlands Ministry of Defence",
    url: "https://www.defensie.nl/rss",
  },
  {
    code: "DEF-NORWAY",
    name: "Norway Ministry of Defence",
    url: "https://www.regjeringen.no/rss/defense",
  },
  {
    code: "DEF-POLAND",
    name: "Poland Ministry of National Defence",
    url: "https://www.mon.gov.pl/rss",
  },
  {
    code: "DEF-PORTUGAL",
    name: "Portugal Ministry of National Defence",
    url: "https://www.mdn.pt/rss",
  },
  {
    code: "DEF-ROMANIA",
    name: "Romania Ministry of National Defence",
    url: "https://www.mapn.ro/rss",
  },
  {
    code: "DEF-SLOVAKIA",
    name: "Slovakia Ministry of Defence",
    url: "https://www.mod.gov.sk/rss",
  },
  {
    code: "DEF-SLOVENIA",
    name: "Slovenia Ministry of Defence",
    url: "https://www.mors.si/rss",
  },
  {
    code: "DEF-SPAIN",
    name: "Spain Ministry of Defence",
    url: "https://www.defensa.gob.es/rss",
  },
  {
    code: "DEF-SWEDEN",
    name: "Sweden Ministry of Defence",
    url: "https://www.forsvarsmakten.se/rss",
  },
  {
    code: "DEF-SWITZERLAND",
    name: "Switzerland Federal Department of Defence",
    url: "https://www.vbs.admin.ch/rss",
  },
  {
    code: "DEF-UKRAINE",
    name: "Ukraine Ministry of Defence",
    url: "https://www.mil.gov.ua/rss",
  },
  {
    code: "DEF-ALBANIA",
    name: "Albania Ministry of Defence",
    url: "https://www.mod.gov.al/rss",
  },
  {
    code: "DEF-ARMENIA",
    name: "Armenia Ministry of Defence",
    url: "https://www.mil.am/rss",
  },
  {
    code: "DEF-AZERBAIJAN",
    name: "Azerbaijan Ministry of Defence",
    url: "https://www.mod.gov.az/rss",
  },
  {
    code: "DEF-BELARUS",
    name: "Belarus Ministry of Defence",
    url: "https://www.mil.by/rss",
  },
  {
    code: "DEF-BOSNIA",
    name: "Bosnia and Herzegovina Ministry of Defence",
    url: "https://www.mod.gov.ba/rss",
  },
  {
    code: "DEF-GEORGIA",
    name: "Georgia Ministry of Defence",
    url: "https://www.mod.gov.ge/rss",
  },
  {
    code: "DEF-KAZAKHSTAN",
    name: "Kazakhstan Ministry of Defence",
    url: "https://www.mod.gov.kz/rss",
  },
  {
    code: "DEF-KYRGYZSTAN",
    name: "Kyrgyzstan Ministry of Defence",
    url: "https://www.mod.gov.kg/rss",
  },
  {
    code: "DEF-MOLDOVA",
    name: "Moldova Ministry of Defence",
    url: "https://www.army.md/rss",
  },
  {
    code: "DEF-MONTENEGRO",
    name: "Montenegro Ministry of Defence",
    url: "https://www.mod.gov.me/rss",
  },
  {
    code: "DEF-NORTHMACEDONIA",
    name: "North Macedonia Ministry of Defence",
    url: "https://www.morm.gov.mk/rss",
  },
  {
    code: "DEF-SERBIA",
    name: "Serbia Ministry of Defence",
    url: "https://www.mod.gov.rs/rss",
  },
  {
    code: "DEF-TAJIKISTAN",
    name: "Tajikistan Ministry of Defence",
    url: "https://www.mod.tj/rss",
  },
  {
    code: "DEF-TURKMENISTAN",
    name: "Turkmenistan Ministry of Defence",
    url: "https://www.mod.gov.tm/rss",
  },
  {
    code: "DEF-UZBEKISTAN",
    name: "Uzbekistan Ministry of Defence",
    url: "https://www.mod.uz/rss",
  },
  {
    code: "DEF-EGYPT",
    name: "Egypt Ministry of Defence",
    url: "https://www.mod.gov.eg/rss",
  },
  {
    code: "DEF-ALGERIA",
    name: "Algeria Ministry of National Defence",
    url: "https://www.mdn.dz/rss",
  },
  {
    code: "DEF-MOROCCO",
    name: "Morocco Ministry of Defence",
    url: "https://www.defense.gov.ma/rss",
  },
  {
    code: "DEF-TUNISIA",
    name: "Tunisia Ministry of Defence",
    url: "https://www.defense.tn/rss",
  },
  {
    code: "DEF-LIBYA",
    name: "Libya Ministry of Defence",
    url: "https://www.mod.gov.ly/rss",
  },
  {
    code: "DEF-NIGERIA",
    name: "Nigeria Ministry of Defence",
    url: "https://www.defence.gov.ng/rss",
  },
  {
    code: "DEF-SOUTHKOREA",
    name: "South Africa Department of Defence",
    url: "https://www.dod.mil.za/rss",
  },
  {
    code: "DEF-ETHIOPIA",
    name: "Ethiopia Ministry of Defence",
    url: "https://www.mod.gov.et/rss",
  },
  {
    code: "DEF-KENYA",
    name: "Kenya Ministry of Defence",
    url: "https://www.mod.go.ke/rss",
  },
  {
    code: "DEF-UGANDA",
    name: "Uganda Ministry of Defence",
    url: "https://www.defence.go.ug/rss",
  },
  {
    code: "DEF-TANZANIA",
    name: "Tanzania Ministry of Defence",
    url: "https://www.mod.go.tz/rss",
  },
  {
    code: "DEF-GHANA",
    name: "Ghana Ministry of Defence",
    url: "https://www.mod.gov.gh/rss",
  },
  {
    code: "DEF-SENEGAL",
    name: "Senegal Ministry of Defence",
    url: "https://www.defense.gouv.sn/rss",
  },
  {
    code: "DEF-COTEIVOIRE",
    name: "Cote d'Ivoire Ministry of Defence",
    url: "https://www.defense.gouv.ci/rss",
  },
  {
    code: "DEF-NAMIBIA",
    name: "Namibia Ministry of Defence",
    url: "https://www.mod.gov.na/rss",
  },
  {
    code: "DEF-BOTSWANA",
    name: "Botswana Ministry of Defence",
    url: "https://www.gov.bw/rss/defence",
  },
  {
    code: "DEF-ZAMBIA",
    name: "Zambia Ministry of Defence",
    url: "https://www.mod.gov.zm/rss",
  },
  {
    code: "DEF-ZIMBABWE",
    name: "Zimbabwe Ministry of Defence",
    url: "https://www.mod.gov.zw/rss",
  },
  {
    code: "DEF-MOZAMBIQUE",
    name: "Mozambique Ministry of Defence",
    url: "https://www.defesa.gov.mz/rss",
  },
  {
    code: "DEF-ANGOLA",
    name: "Angola Ministry of Defence",
    url: "https://www.defesa.angola.gov.ao/rss",
  },
  {
    code: "DEF-MALAWI",
    name: "Malawi Ministry of Defence",
    url: "https://www.malawidefenceforce.mil.mw/rss",
  },
  {
    code: "DEF-MADAGASCAR",
    name: "Madagascar Ministry of Defence",
    url: "https://www.defense.gov.mg/rss",
  },
  {
    code: "DEF-MAURITIUS",
    name: "Mauritius Ministry of Defence",
    url: "https://www.gov.mu/rss/defence",
  },
  {
    code: "DEF-SEYCHELLES",
    name: "Seychelles Ministry of Defence",
    url: "https://www.defence.gov.sc/rss",
  },
  {
    code: "DEF-COMOROS",
    name: "Comoros Ministry of Defence",
    url: "https://www.defense.gov.km/rss",
  },
  {
    code: "DEF-DJIBOUTI",
    name: "Djibouti Ministry of Defence",
    url: "https://www.defense.gov.dj/rss",
  },
  {
    code: "DEF-SOMALIA",
    name: "Somalia Ministry of Defence",
    url: "https://www.mod.gov.so/rss",
  },
  {
    code: "DEF-SUDAN",
    name: "Sudan Ministry of Defence",
    url: "https://www.mod.gov.sd/rss",
  },
  {
    code: "DEF-CHAD",
    name: "Chad Ministry of Defence",
    url: "https://www.defense.td/rss",
  },
  {
    code: "DEF-NIGER",
    name: "Niger Ministry of Defence",
    url: "https://www.defense.gouv.ne/rss",
  },
  {
    code: "DEF-MALI",
    name: "Mali Ministry of Defence",
    url: "https://www.defense.gov.ml/rss",
  },
  {
    code: "DEF-BURKINA",
    name: "Burkina Faso Ministry of Defence",
    url: "https://www.defense.gov.bf/rss",
  },
  {
    code: "DEF-GUINEA",
    name: "Guinea Ministry of Defence",
    url: "https://www.defense.gov.gn/rss",
  },
  {
    code: "DEF-SIERRA",
    name: "Sierra Leone Ministry of Defence",
    url: "https://www.mod.gov.sl/rss",
  },
  {
    code: "DEF-LIBERIA",
    name: "Liberia Ministry of Defence",
    url: "https://www.mod.gov.lr/rss",
  },
  {
    code: "DEF-GAMBIA",
    name: "Gambia Ministry of Defence",
    url: "https://www.defence.gm/rss",
  },
  {
    code: "DEF-GUINEABISSAU",
    name: "Guinea-Bissau Ministry of Defence",
    url: "https://www.defesa.gov.gw/rss",
  },
  {
    code: "DEF-CABOVERDE",
    name: "Cape Verde Ministry of Defence",
    url: "https://www.defesa.gov.cv/rss",
  },
  {
    code: "DEF-SAHARA",
    name: "Sahrawi Arab Democratic Republic Ministry of Defence",
    url: "https://www.rasd.defense/rss",
  },
  {
    code: "DEF-MONGOLIA",
    name: "Mongolia Ministry of Defence",
    url: "https://www.mod.gov.mn/rss",
  },
  {
    code: "DEF-NEPAL",
    name: "Nepal Ministry of Defence",
    url: "https://www.mod.gov.np/rss",
  },
  {
    code: "DEF-BHUTAN",
    name: "Bhutan Ministry of Defence",
    url: "https://www.mod.gov.bt/rss",
  },
  {
    code: "DEF-BANGLADESH",
    name: "Bangladesh Ministry of Defence",
    url: "https://www.mod.gov.bd/rss",
  },
  {
    code: "DEF-SRILANKA",
    name: "Sri Lanka Ministry of Defence",
    url: "https://www.defence.lk/rss",
  },
  {
    code: "DEF-MYANMAR",
    name: "Myanmar Ministry of Defence",
    url: "https://www.mod.gov.mm/rss",
  },
  {
    code: "DEF-CAMBODIA",
    name: "Cambodia Ministry of Defence",
    url: "https://www.mod.gov.kh/rss",
  },
  {
    code: "DEF-LAOS",
    name: "Laos Ministry of Defence",
    url: "https://www.mod.gov.la/rss",
  },
  {
    code: "DEF-TIMOR",
    name: "East Timor Ministry of Defence",
    url: "https://www.defesa.tl/rss",
  },
  {
    code: "DEF-PAPUA",
    name: "Papua New Guinea Defence Force",
    url: "https://www.pngdf.gov.pg/rss",
  },
  // -------- Geopolitics Feeds --------
  {
    code: "GEO-FP",
    name: "Foreign Policy",
    url: "https://foreignpolicy.com/feed/",
  },
  {
    code: "GEO-CFR",
    name: "Council on Foreign Relations",
    url: "https://www.cfr.org/rss",
  },
  {
    code: "GEO-BROOKINGS",
    name: "Brookings Institution Foreign Policy",
    url: "https://www.brookings.edu/feed/?topic=foreign-policy",
  },
  {
    code: "GEO-CARNEGIE",
    name: "Carnegie Endowment for International Peace",
    url: "https://carnegieendowment.org/rss",
  },
  {
    code: "GEO-ATLANTIC",
    name: "Atlantic Council",
    url: "https://www.atlanticcouncil.org/rss",
  },
  {
    code: "GEO-RAND",
    name: "RAND Corporation Foreign Policy",
    url: "https://www.rand.org/rss/foreign-policy",
  },
  {
    code: "GEO-CHATHAM",
    name: "Chatham House",
    url: "https://www.chathamhouse.org/rss",
  },
  {
    code: "GEO-IISS",
    name: "International Institute for Strategic Studies",
    url: "https://www.iiss.org/rss",
  },
  {
    code: "GEO-CSIS",
    name: "Center for Strategic and International Studies",
    url: "https://www.csis.org/rss",
  },
  {
    code: "GEO-FA",
    name: "Foreign Affairs",
    url: "https://www.foreignaffairs.com/rss",
  },
  {
    code: "GEO-DIPLOMAT",
    name: "The Diplomat",
    url: "https://thediplomat.com/feed/",
  },
  {
    code: "GEO-EURASIA",
    name: "Eurasia Group",
    url: "https://www.eurasiagroup.net/rss",
  },
  {
    code: "GEO-STRATFOR",
    name: "Stratfor",
    url: "https://worldview.stratfor.com/feed",
  },
  {
    code: "GEO-GPF",
    name: "Global Policy Forum",
    url: "https://www.globalpolicy.org/rss",
  },
  {
    code: "GEO-WPR",
    name: "World Politics Review",
    url: "https://www.worldpoliticsreview.com/feed/",
  },
  {
    code: "GEO-RCW",
    name: "RealClearWorld",
    url: "https://www.realclearworld.com/rss.xml",
  },
  {
    code: "GEO-AJ",
    name: "Al Jazeera International",
    url: "https://www.aljazeera.com/xml/rss/all.xml",
  },
  {
    code: "GEO-BBCWORLD",
    name: "BBC World Service",
    url: "https://feeds.bbci.co.uk/news/world/rss.xml",
  },
  {
    code: "GEO-DW",
    name: "Deutsche Welle International",
    url: "https://rss.dw.com/rdf/rss-en-all",
  },
  {
    code: "GEO-FRANCE24",
    name: "France 24",
    url: "https://www.france24.com/en/rss",
  },
  {
    code: "GEO-RT",
    name: "RT News",
    url: "https://www.rt.com/rss/",
  },
  {
    code: "GEO-CGTN",
    name: "CGTN",
    url: "https://news.cgtn.com/rss/",
  },
  {
    code: "GEO-PRESSTV",
    name: "Press TV",
    url: "https://www.presstv.ir/rss",
  },
  {
    code: "GEO-TASS",
    name: "TASS",
    url: "https://tass.com/rss",
  },
  {
    code: "GEO-XINHUA",
    name: "Xinhua News Agency",
    url: "https://www.xinhuanet.com/english/rss/worldrss.xml",
  },
  {
    code: "GEO-ANADOLU",
    name: "Anadolu Agency",
    url: "https://www.aa.com.tr/en/rss/default?cat=world",
  },
  {
    code: "GEO-MEE",
    name: "Middle East Eye",
    url: "https://www.middleeasteye.net/rss",
  },
  {
    code: "GEO-SCMP",
    name: "South China Morning Post",
    url: "https://www.scmp.com/rss/91/feed",
  },
  {
    code: "GEO-NIKKEI",
    name: "Nikkei Asia",
    url: "https://asia.nikkei.com/rss",
  },
  {
    code: "GEO-HTINT",
    name: "Hindustan Times International",
    url: "https://www.hindustantimes.com/feeds/rss/world-news/rssfeed.xml",
  },
  {
    code: "GEO-HINDUINT",
    name: "The Hindu International",
    url: "https://www.thehindu.com/news/international/feeder/default.rss",
  },
  {
    code: "GEO-IEINT",
    name: "Indian Express International",
    url: "https://indianexpress.com/section/world/feed/",
  },
  {
    code: "GEO-ORF",
    name: "Observer Research Foundation",
    url: "https://www.orfonline.org/rss",
  },
  {
    code: "GEO-IDSA",
    name: "Institute for Defence Studies and Analyses",
    url: "https://www.idsa.in/rss",
  },
  {
    code: "GEO-CPR",
    name: "Centre for Policy Research",
    url: "https://www.cprindia.org/rss",
  },
  {
    code: "GEO-BROOKINGSINDIA",
    name: "Brookings India",
    url: "https://www.brookings.edu/research/india/rss",
  },
  {
    code: "GEO-CARNEGIEINDIA",
    name: "Carnegie India",
    url: "https://carnegieindia.org/rss",
  },
  {
    code: "GEO-GATEWAY",
    name: "Gateway House",
    url: "https://www.gatewayhouse.in/rss",
  },
  {
    code: "GEO-VIF",
    name: "Vivekananda International Foundation",
    url: "https://www.vifindia.org/rss",
  },
  {
    code: "GEO-ICWA",
    name: "Indian Council of World Affairs",
    url: "https://www.icwa.in/rss",
  },
];
