
## COMPONENTS
### HomePage Components:
- [ ] Navbar
- [ ] Menu
  - [ ] SearchBar
  - [ ] Links for Sign up, Login, Logout, Dashboard, Create New Guide, Trending Guides, About Us
- [ ] Logo
- [ ] Login modal/Signup modal
- [ ] Hero
- [ ] Trending section
- [ ] Guide cards
- [ ] Game cards
- [ ] User cards
- [ ] About us section
- [ ] Footer

### ResultsPage(or section) Components:
- [ ] Search results container
- [ ] Filter options
- [ ] Guide result cards
- [ ] Game result cards
- [ ] User result cards

### GuidePage Components:
- [ ] Guide Content (title, author, content, etc)
- [ ] Comments display
- [ ] Comment form
- [ ] Related chapters/levels area

### Create Guide Page Components:
- [ ] Form
  - [ ] Game input
  - [ ] Console input
  - [ ] Title/Chapter/Level input
  - [ ] Content input
  - [ ] YouTube embed link input (optional)
  - [ ] Tags input
  - [ ] Images input (optional)

### Dashboard Page Components:
- [ ] Profile Details
  - [ ] Picture
  - [ ] Bio
  - [ ] Top games
  - [ ] Date joined?
- [ ] Friends List
- [ ] Saved Games
- [ ] Creators Following List
- [ ] Guides Saved List
- [ ] Created Guides List
- [ ] Edit Profile Form (when button/link clicked)



## QUERIES
### HomePage Queries:
- [ ] Query for trending guides
- [ ] Query for about us information(really, just go over a json file with our info for each card/thing)

### ResultsPage Queries:
- [ ] Query for search results
  - [ ] Query for users
  - [ ] Query for games
  - [ ] Query for guides
- [ ] Query for filter options

### GuidePage Queries:
- [ ] Query for single guide
- [ ] Query for related titles/chapters/levels
- [ ] Query for comments
- [ ] Query for tags
- [ ] Query for rating of guide
- [ ] Query for game info(title, rating, etc)

### Create Guide Page Queries:
- [ ] Query for games (for dropdown select input field)
- [ ] Query for guide groups from user (for select dropdown)

### Dashboard Page Queries:
- [ ] Query for profile details
- [ ] Query for friends list
- [ ] Query for saved games
- [ ] Query for creators following list
- [ ] Query for guides saved list
- [ ] Query for created guides list


## MUTATIONS
### HomePage Mutations:
- [ ] Mutation to addUser
- [ ] Mutation to login

### ResultsPage Mutations:
- [ ] Mutation to update saved items(friend, guide, creator) on user

### GuidePage Mutations:
- [ ] Mutation to update rating on guide
- [ ] Mutation to add comments on guide/user

### Create Guide Page Mutations:
- [ ] Mutation to add new guide to database

### Dashboard Page Mutations:
- [ ] Mutation to update user profile
- [ ] Mutation to remove guide
- [ ] Mutation to update guide
- [ ] Mutation to remove friend
- [ ] Mutation to unfollow creator


## Functions
### HomePage Functions:
- [ ] Open login/signup modal
- [ ] Submit login/signup form
- [ ] Authenticate user with JWT
- [ ] Redirect to dashboard after login/signup
- [ ] Handle search bar submission
- [ ] Display search results
- [ ] Filter search results

### ResultsPage Functions:
- [ ] Display search results
- [ ] Filter search results
- [ ] Expand user card on click
- [ ] Display guides on game click
- [ ] Redirect to guide page on click

### GuidePage Functions:
- [ ] Display guide content
- [ ] Display comments
- [ ] Submit new comment
- [ ] Update guide rating
- [ ] Save guide
- [ ] Display related titles/chapters/levels

### Create Guide Page Functions:
- [ ] Handle form submission
- [ ] Retrieve input values
- [ ] Save new guide to database
- [ ] Redirect to dashboard after guide creation
- [ ] Fill out dropdown options for game selection
- [ ] Fill out dropdown options with user's guide groups

### Dashboard Page Functions:
- [ ] Display profile details
- [ ] Display friends list
- [ ] Display saved games
- [ ] Display creators following list
- [ ] Display guides saved list
- [ ] Display created guides list
- [ ] Open edit profile form
- [ ] Submit updated profile details
- [ ] Remove guide
- [ ] Remove game
- [ ] Remove user
- [ ] Handle photo upload
