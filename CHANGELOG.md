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
