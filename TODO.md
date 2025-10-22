# Next News API Enhancement Plan

## Phase 1: Add Image Scraping Functionality
- [x] Update Article type to include image field
- [x] Create imageScraper.ts with image extraction logic
- [x] Modify newsScraper.ts to fetch images for each article
- [ ] Update utils.ts to handle image field in article parsing

## Phase 2: Add Indian News Sources
- [x] Research and validate Indian RSS feeds
- [x] Add Indian sources to constants.ts

## Phase 3: Testing & Validation
- [x] Install dependencies (npm install) - SUCCESS: Installed with --ignore-scripts
- [x] Test image scraping functionality - SUCCESS: Images included in responses
- [x] Test Indian RSS feeds integration - SUCCESS: TOI feed working
- [x] Verify API responses include images - SUCCESS: Images present in JSON
- [x] Test categorical news (technology, defense, science, etc.) - SUCCESS: Category filtering implemented and tested
- [x] Ensure real-time updates work with app caching - SUCCESS: revalidate=0 set

## Phase 4: Implement Country-Specific News Fetching
- [ ] Add countryMappings object in constants.ts mapping country codes to arrays of source codes (~10 per country)
- [ ] Add validateCountry function in utils.ts to validate country inputs
- [ ] Implement getCountryNews function in newsScraper.ts to fetch news from mapped sources
- [ ] Export getCountryNews from newsScraper.ts
- [ ] Test country news API endpoint
- [ ] Ensure frontend correctly calls the API when a country is selected

## Implementation Notes
- All changes must stay within assets/data/next-news-api-master folder
- Use similar image scraping logic as BBC API
- Maintain revalidate = 0 for real-time updates
- Add proper error handling for image fetching failures
