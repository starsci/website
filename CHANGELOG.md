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
