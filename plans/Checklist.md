
## COMPONENTS
### HomePage Components:
<!-- [BT] wireFrame -->
<!-- - [KK] Navbar -->
<!-- - [KK] Menu -->
  <!-- - [KK] SearchBar -->
  <!-- - [KK] Links for Sign up, Login, Logout, Dashboard, Create New Tutorial, Trending Tutorials, About Us -->
<!-- - [BT] Logo -->
<!-- - [KK] Login modal/Signup modal -->
<!-- - [BT - BM ] Hero -->
<!-- - [BM ] Trending section (carousel still needs some tweaking, but is implemented) -->
<!-- - [BM ] Tutorial cards -->
<!-- - [ ] Game cards -->
<!-- - [ ] User cards -->
<!-- - [BT ] About us section -->
<!-- - [KK] Footer -->
  - [ ] User Profile(not logged in user)

### ResultsPage(or section) Components:
<!-- [BT] wireFrame -->
<!-- - [ ] Search results container -->
- [ ] Filter options
<!-- - [ ] Tutorial result cards -->
<!-- - [ ] Game result cards -->
<!-- - [ ] User result cards -->

### TutorialPage Components:
<!-- [BT] wireFrame -->
<!-- - [ ] Tutorial Content (title, author, content, etc) -->
- [ ] Comments display
<!-- - [ ] Comment form -->
- [ ] Related chapters/levels area

### Create Tutorial Page Components:
<!-- [BT] wireFrame -->
- [ ] Form
  - [ ] Game input(link w/ game through IGDB?)
  - [ ] Console input (link with enums)
  - [ ] Title/Chapter/Level input (make grouping available)
  - [ ] Content input (format as put in-paragraphs, list items, etc)
  <!-- - [ ] YouTube embed link input (optional) -->
  <!-- - [ ] Tags input -->
  - [ ] Images input (optional)-cloudinary?

### Profile Page Components:
<!-- [BT] wireFrame -->
<!-- - [ ] Profile Details -->
  <!-- - [ ] Picture -->
  <!-- - [ ] Bio -->
  - [ ] Top games
  <!-- - [ ] Date joined? -->
<!-- - [ ] Friends List -->
- [ ] Saved Games
- [ ] Creators Following List
<!-- - [ ] Tutorials Saved List -->
<!-- - [ ] Created Tutorials List -->
<!-- - [ ] Edit Profile Form (when button/link clicked) -->

### Not Found Page
<!-- - [ ] Not found page -->

## QUERIES(typeDefs)
### HomePage Queries:
<!-- - [X] Query for trending tutorials -->


### ResultsPage Queries:
<!-- - [X] Query for search results -->
  <!-- - [X] Query for users -->
  <!-- - [TBS] Query for games -->
  <!-- - [X] Query for tutorials -->
<!-- - [G] Query for filter options -->

### TutorialPage Queries:
<!-- - [X] Query for single tutorial -->
<!-- - [G] Query for related titles/chapters/levels -->
<!-- - [X] Query for tags -->

### Create Tutorial Page Queries:
<!-- - [X] Query for games (for dropdown select input field) -->
<!-- - [X] Query for tutorial groups from user (for select dropdown) -->

### Dashboard Page Queries:
<!-- - [X] Query for profile details(should show saved Games, FriendsList, CreatorsFollowing, SavedTutorials, and Created Tutorials) -->
<!-- - [X] Query for friends list -->


## MUTATIONS(typeDefs)
### HomePage Mutations:
<!-- - [X] Mutation to addUser -->
<!-- - [X] Mutation to login -->

### ResultsPage Mutations:
<!-- - [X] Mutation to update saved items(friend, tutorial, creator) on user -->

### Create Tutorial Page Mutations:
<!-- - [X] Mutation to add new tutorial to database -->

### Dashboard Page Mutations:
<!-- - [X] Mutation to update user profile -->
<!-- - [x] Mutation to remove tutorial -->
<!-- - [x] Mutation to update tutorial(including rating and comments) -->
<!-- - [x] Mutation to remove friend -->
<!-- - [x] Mutation to unfollow creator -->



## QUERIES(resolvers)
### HomePage Queries:
- [ ] Query for trending tutorials
<!-- - [ ] Query for about us information(really, just go over a json file with our info for each card/thing) -->

### ResultsPage Queries:
<!-- - [ ] Query for search results(one query using searchInput) -->
  <!-- - [ ]  users -->
  - [ ]  games(age_rating needs to be fetched)
  <!-- - [ ]  tutorials -->
  - [ ]  tags
- [ ] Query for filter options(one query using filterInput)

### TutorialPage Queries:
<!-- - [ ] Query for single tutorial -->
- [ ] Query for related titles/chapters/levels
<!-- - [ ] Query for game info(title, rating, etc) -->

### Create Tutorial Page Queries:
- [ ] Query for games (for dropdown select input field)
- [ ] Query for tutorial groups from user (for select dropdown)

### Dashboard Page Queries:
<!-- - [ ] Query for profile details -->



## MUTATIONS(resolvers)
### HomePage Mutations:
<!-- - [X] Mutation to addUser(need JWT auth) -->
<!-- - [K] Mutation to login -->

### ResultsPage Mutations:
<!-- - [ ] Mutation to update saved items(friend, tutorial, creator) on user -->

### TutorialPage Mutations:
- [ ] Mutation to update rating on tutorial
<!-- - [ ] Mutation to add comments on tutorial/user -->

### Create Tutorial Page Mutations:
<!-- - [ ] Mutation to add new tutorial to database -->

### Dashboard Page Mutations:
<!-- - [ ] Mutation to update user profile -->
<!-- - [ ] Mutation to remove tutorial -->
- [ ] Mutation to update tutorial
<!-- - [ ] Mutation to remove friend -->
- [ ] Mutation to unfollow creator
- [ ] Mutation to remove saved game



## Functions
### HomePage Functions:
<!-- - [KK] Open login/signup modal -->
<!-- - [KG] Submit login/signup form -->
<!-- - [KG] Authenticate user with JWT -->
<!-- - [KG] Redirect to dashboard after login/signup -->
<!-- - [ ] Handle search bar submission -->
<!-- - [ ] Display search results -->
- [ ] Filter search results
<!-- - [BT] About us json file & mapping to show on cards on homepage -->

### ResultsPage Functions:
<!-- - [ ] Display search results -->
- [ ] Filter search results
<!-- - [ ] Redirect to tutorial page on click -->

### TutorialPage Functions:
<!-- - [ ] Display tutorial content -->
- [ ] Display comments
- [ ] Submit new comment
- [ ] Update tutorial rating
<!-- - [ ] Save tutorial -->
- [ ] Display related titles/chapters/levels

### Create Tutorial Page Functions:
<!-- - [ ] Handle form submission -->
<!-- - [ ] Retrieve input values -->
<!-- - [ ] Save new tutorial to database -->
<!-- - [ ] Redirect to dashboard after tutorial creation -->
- [ ] Fill out dropdown options for game selection
- [ ] Fill out dropdown options with user's tutorial groups

### Dashboard Page Functions:
<!-- - [ ] Display profile details -->
<!-- - [ ] Submit updated profile details -->
<!-- - [ ] Remove tutorial -->
- [ ] Remove game
<!-- - [ ] Remove user -->
<!-- - [ ] Handle photo upload -->
