// !WHEN I LOAD THE GVM3 GVLVXXY SITE
// !THEN I AM PRESENTED WITH A MENU, SEARCHBAR, LOGIN/SIGNUP, HERO, TRENDING GUIDES, ABOUT THE STAFF
	//* HomePage Components:
		// todo Navbar
		// todo Menu
			// todo SearchBar
			// todo Links for Sign up, Login, Logout, Dashboard, Create New Guide, Trending Guides, About Us
		// todo Logo?
		// todo Login modal/Signup modal
		// todo Hero
		// todo Trending section
		// ? search results page, or populate home page?
		// todo Guide cards
		// todo Game cards
		// todo User cards

		// todo About us section
		// todo Footer

	

// !WHEN I VIEW THE HERO
// !THEN I CAN SEE A PICTURE, A BLURB AND SMALLER BLURB, AND CALL TO ACTION
	// *Style:
		// todo Find/create picture
		// todo Come up with quip to grab attention
		// todo Come up with smaller BLURB that explains what we are
		// todo Create button to sign up or start searching?


// !WHEN I CLICK THE MENU
// !THEN I AM PRESENTED WITH LINKS FOR SIGNUP/LOGIN/LOGOUT, SEARCHBAR, DASHBOARD(IF LOGGED IN), CREATE NEW GUIDE
	//* Functions:
		// * Signup/login:
			// todo Open modal
			// todo Display Login or signup depending on state of button in modal
			// todo Submit & save user
			// todo Auth with jwt
			// todo Login user
			// todo Auth with jwt
			// todo Redirect to dashboard after logged in
		//* Searchbar:
			// todo Submit values to query 
			// todo Query for user, game, guide, tags
			// todo Organize to render by type-users, games, guides
			// todo Filter options
		//* Dashboard:
			// todo Direct to page
			// todo Query for
			// todo Profile info
			// todo Guides created
			// todo Friends
			// todo Games saved
			// todo Guides saved
			// todo Render to appropriate areas
			// todo Edit profile submit form
			// todo Mutation to update user
			// todo Options to remove guide, game,or user
			// todo Mutation to remove appropriate subject
		//* New guide:
			// todo Direct to page
			// todo Query games for drop down select input field
			// todo Handle submit form
			// todo Save to database
			// todo Redirect to dashboard


// !WHEN I CLICK SIGNUP/LOGIN
// !THEN I AM PRESENTED WITH A MODAL FOR THE OPTION TO LOGIN/SIGNUP
	// todo Create
	// todo Style
	// todo Functions to operate modal
	// todo Functions to take in values
	// todo Mutations to database


// !WHEN I LOGIN/SIGNUP 
// !THEN MY INFO IS SAVED, AND I RECEIVE AN AUTH TOKEN, THEN I AM TAKEN TO MY DASHBOARD
	// todo jwt functions and implementation on server
	

// !WHEN I SUBMIT A SEARCH INTO THE MAIN SEARCHBAR
// !THEN I AM PRESENTED WITH RESULTS TO VIEW, AND CLICK ON. MUST BE LOGGED IN TO RATE, COMMENT, SAVE ETC
	//* Functions:
		// todo mutation for updating saved items on user
		// todo mutation for updating rating on guide
		// todo mutation for comments on guide and user
	

// !WHEN I AM PRESENTED WITH THE RESULTS
// !THEN I WILL SEE RESULTS FOR CREATORS, USERS, GAMES/GUIDES
	// ? what do we want on each results card?
		// USERS-
		// GAMES-
		// GUIDES-
	// todo Style
	// todo Create
	// todo Queries
	// todo filter options
	// todo Render info


// !WHEN I CLICK ON USER
// !THEN CARD EXPANDS TO INCLUDE A PIC, BIO, BUTTON TO ADD/FOLLOW, TOP 3 GAMES, GUIDES CREATED
	// todo function to expand

// !WHEN I CLICK ON A GUIDE/TUTORIAL
// !THEN I AM PRESENTED WITH A PAGE THAT DISPLAYS
	// *AUTHOR
	// *GAME
	// *CONSOLE
	// *TITLE/CHAPTER/LEVEL
	// *CONTENT
	// *YOUTUBE EMBED LINK(optional)
	// *TAGS
	// *RATING
	// *COMMENTS
	// *OTHER RELATED TITLES/CHAPTERS/LEVELS LINKS
	// *SAVE BUTTON
	// *RATE OPTION
	// *COMMENT OPTION

	// *Single Guide Page Components:
		// todo Guide Content(title, author, content, etc)
		// todo Comments display
		// todo Comment form
		// todo chapters/levels area
	// todo Style
	// todo Create
	// todo Query for single guide


// !WHEN I CLICK CREATE NEW GUIDE(WHILE LOGGED IN)
// !THEN I AM PRESENTED WITH A PAGE WITH A FORM
	// *Create New Guide Page Components:
		// todo Form(might break down more for function purposes)

	// *INPUTS:
		// *GAME
		// *CONSOLE(create console options for dropdown)
		// *TITLE/CHAPTER/LEVEL
			// ? group with other levels/chapters -to be able to find links for other chapters easier.
		// *CONTENT
		// *YOUTUBE EMBED LINK(optional)
		// *TAGS
		// ? images?
	// todo Create
	// todo Style
	// ? query for "guide groups" from user for select dropdown
	// todo query for games for select dropdown
	// todo Functions to retrieve input values
	// todo Mutation to add to database
	// todo figure out how to keep content input formatted as user created



// !WHEN I CLICK THE DASHBOARD LINK(OR WHEN I AM REDIRECTED AFTER SIGNUP)
// !THEN I AM PRESENTED WITH MY DASHBOARD THAT DISPLAYS:
	// *Dashboard Page Components:
		// todo Profile Details:
			// *pic
			// *bio
			// *top games
			// ?date joined?
		// todo Friends List
		// todo Saved Games
		// todo Creators Following List
		// todo Guides Saved List
		// todo Created Guides List
		// todo Edit Profile Form(when button/link clicked)
	// todo find the best way to upload photos





// *IDEAS/QUESTIONS

// ? Remove, unfollow, or delete options.(Delete Mutation needed to meet project Criteria)

// ? when no results show, maybe have a way to find a guide else where?
// Can't find it here? 
// Add your own. Or search from other databases.

// ? avatars/pics
// How to upload images
// Or random shape/color/image package
// Or have some random avatars to chose from in the database?

// *ICEBOX
// *blog/ forums
// *live chat
// *Sell digital assets
// *sell collectibles