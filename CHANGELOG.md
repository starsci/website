## 0.9.1 (2025-03-16)

### Fix

- PST not showing

## 0.9.0 (2025-03-16)

### Feat

- add masthead

### Fix

- add citizen's charter to header links

## 0.8.0 (2025-03-16)

### Feat

- add portraits in organizational chart
- update layout to conform to DICT Unified Website Content Policy
- add tabs to about page
- add tabs component

## 0.7.1 (2024-12-26)

### Feat

- add sitemap

## 0.7.0 (2024-12-26)

### Feat

- add image to OpenGraph metadata

### Refactor

- environmentalize hero background image
- generateMetadata function

## 0.6.1 (2024-12-26)

### Fix

- site_name should be siteName in openGraph
- og:url for Pararayos and The Satellite

## 0.6.0 (2024-12-25)

### Feat

- add Read More button in front page announcement
- create slug pages for Pararayos and The Satellite
- add aside in announcements

### Fix

- increase margin of thumbnail in content
- news card scrollbar
- announcement aside spacing
- add opengraph to announcement

### Refactor

- componentize aside and content
- move slug param to page
- remove services page

## 0.5.0 (2024-12-25)

### Feat

- set announcement metadata

## 0.4.0 (2024-12-25)

### Feat

- add front page announcement
- allow selection of front page announcement
- **WIP**: separate announcements from campus news
- separate links in footer into categories

### Fix

- remove "ang" from Pararayos
- remove club links temporarily
- remove services from links temporarily
- collapse NewsCard when not in full size
- surround useSearchParams in Suspense
- fix payload.find type params
- PayloadCMS breaking change
- increase contrast between hero image and text
- increase nav collapse breakpoint to md
- move header links around
- rename Ang Pararayos to Pararayos
- footer contact icons sizes
- fix spelling of import

### Refactor

- add font subset
- remove Explore Services button from call to action
- use PT Sans as font
- replace FontAwesome icons with Lucide

## 0.3.0 (2024-10-30)

### Feat

- use react-query instead of swr in use-query
- add QueryClientProvider to layout
- remove swr
- add announcement cards
- **card**: add CardImage component
- allow setting of clubs per page
- dynamically add page numbers
- hide next and prev when no more pages
- add pagination based on query params
- add pagination component
- add new colors to brand color scheme

### Fix

- use useActionState instead of useFormState
- move collection slug to options
- round CardImage corners
- add limit to query params in pagination
- make prev and next go to proper pages
- move pagination control to bottom
- make ClubsGrid the same height per row
- remove .ts file extension from imports
- add null check for user and cast to Club
- force not-null on environment variables
- allow admins to modify their information
- set same club ID as requirement for creation
- change header links

### Refactor

- rename component file names to PascalCase
- **Announcement**: move data null check to beginning
- update useQuery function to accept options object
- move QueryClientProvider to its own component
- remove unnecessary imports
- move pagination into its own component
- add null check for data
- use semantic tags
- place static image IDs into env
- refactor header component

## 0.2.0 (2024-10-30)

### Feat

- use react-query instead of swr in use-query
- add QueryClientProvider to layout
- remove swr
- add announcement cards
- **card**: add CardImage component
- allow setting of clubs per page
- dynamically add page numbers
- hide next and prev when no more pages
- add pagination based on query params
- add pagination component

### Fix

- use useActionState instead of useFormState
- move collection slug to options
- round CardImage corners
- add limit to query params in pagination
- make prev and next go to proper pages
- move pagination control to bottom
- make ClubsGrid the same height per row
- remove .ts file extension from imports
- add null check for user and cast to Club
- force not-null on environment variables
- allow admins to modify their information
- set same club ID as requirement for creation

### Refactor

- **Announcement**: move data null check to beginning
- update useQuery function to accept options object
- move QueryClientProvider to its own component
- remove unnecessary imports
- move pagination into its own component
- add null check for data
- use semantic tags
