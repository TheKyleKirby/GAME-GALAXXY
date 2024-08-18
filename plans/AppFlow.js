// !WHEN I LOAD THE GVM3 GVLVXXY SITE
// !THEN I AM PRESENTED WITH A MENU, SEARCHBAR, LOGIN/SIGNUP, HERO, TRENDING TUTORIALS, ABOUT THE STAFF
	//* HomePage Components:
		// // Navbar
		// // Menu
			// // SearchBar
			// // Links for Sign up, Login, Logout, Dashboard, Create New Tutorial, Trending Tutorials, About Us
		// // Logo?
		// // Login modal/Signup modal
		// // Hero
		// // Trending section
		//// search results page, or populate home page?
		// // Tutorial cards
		// // Game cards
		// // User cards

		// // About us section
		//// Footer

	

// !WHEN I VIEW THE HERO
// !THEN I CAN SEE A PICTURE, A BLURB AND SMALLER BLURB, AND CALL TO ACTION
	// *Style:
		// // Find/create picture
		// // Come up with quip to grab attention
		// // Come up with smaller BLURB that explains what we are
		// // Create button to sign up or start searching?


// !WHEN I CLICK THE MENU
// !THEN I AM PRESENTED WITH LINKS FOR SIGNUP/LOGIN/LOGOUT, SEARCHBAR, DASHBOARD(IF LOGGED IN), CREATE NEW TUTORIAL
	//* Functions:
		// * Signup/login:
			// // Open modal
			// // Display Login or signup depending on state of button in modal
			// // Submit & save user
			// // Auth with jwt
			// // Login user
			// // Auth with jwt
			// // Redirect to dashboard after logged in
		//* Searchbar:
			// // Submit values to query 
			// todo Query for tags
			// // Organize to render by type-users, games, tutorials
			// todo Filter options
		//* Dashboard:
			// // Direct to page
			// // Query for user
			// // Profile info
			// // Render to appropriate areas
			// // Edit profile submit form
			// // Mutation to update user
			// todo Options to remove game
		//* New tutorial:
			// // Direct to page
			// todo Query games for drop down select input field
			// // Handle submit form
			// // Save to database
			// // Redirect to dashboard


// !WHEN I CLICK SIGNUP/LOGIN
// !THEN I AM PRESENTED WITH A MODAL FOR THE OPTION TO LOGIN/SIGNUP
	// // Create
	// // Style
	// // Functions to operate modal
	// // Functions to take in values
	// // Mutations to database


// !WHEN I LOGIN/SIGNUP 
// !THEN MY INFO IS SAVED, AND I RECEIVE AN AUTH TOKEN, THEN I AM TAKEN TO MY DASHBOARD
	// // jwt functions and implementation on server
	

// !WHEN I SUBMIT A SEARCH INTO THE MAIN SEARCHBAR
// !THEN I AM PRESENTED WITH RESULTS TO VIEW, AND CLICK ON. MUST BE LOGGED IN TO RATE, COMMENT, SAVE ETC
	//* Functions:
		// // mutation for updating saved items on user
		// todo mutation for updating rating on tutorial
		// todo mutation for comments on tutorial(logged in user id added to comment)
	

// !WHEN I AM PRESENTED WITH THE RESULTS
// !THEN I WILL SEE RESULTS FOR CREATORS, USERS, GAMES/TUTORIALS
		// USERS-
		// GAMES-
		// TUTORIALS-
	// // Style
	// // Create
	// // Queries
	// todo filter options
	// // Render info



// !WHEN I CLICK ON A TUTORIAL/TUTORIAL
// !THEN I AM PRESENTED WITH A PAGE THAT DISPLAYS
	// //AUTHOR
	// //GAME
	// //CONSOLE
	// //TITLE/CHAPTER/LEVEL
	// //CONTENT
	// //YOUTUBE EMBED LINK(optional)
	// //TAGS
	// todo RATING
	// todo COMMENTS
	// todo OTHER RELATED TITLES/CHAPTERS/LEVELS LINKS
	// //SAVE BUTTON
	// todo RATE OPTION
	// // COMMENT OPTION



// !WHEN I CLICK CREATE NEW TUTORIAL(WHILE LOGGED IN)
// !THEN I AM PRESENTED WITH A PAGE WITH A FORM
	// *Create New Tutorial Page Components:
	// *INPUTS:
		// *GAME
		// *CONSOLE(create console options for dropdown)
		// *TITLE/CHAPTER/LEVEL
			// ? group with other levels/chapters -to be able to find links for other chapters easier.
		// //CONTENT
		// //YOUTUBE EMBED LINK(optional)
		// //TAGS
		// ? images?
	// // Create
	// // Style
	// ? query for "tutorial groups" from user for select dropdown
	// todo query for games for select dropdown
	// // Functions to retrieve input values
	// // Mutation to add to database
	// todo figure out how to keep content input formatted as user created
	// todo put auth on



// !WHEN I CLICK THE DASHBOARD LINK(OR WHEN I AM REDIRECTED AFTER SIGNUP)
// !THEN I AM PRESENTED WITH MY DASHBOARD THAT DISPLAYS:
	// *Dashboard Page Components:
		// // Profile Details:
			// //pic
			// //bio
			// *top games
		// // Friends List
		// // Saved Games
		// todo Creators Following List
		// // Tutorials Saved List
		// // Created Tutorials List
		// // Edit Profile Form(when button/link clicked)'
	// // find the best way to upload photos:
		// //https://www.apollographql.com/docs/react/data/file-uploads/
		// //https://github.com/jaydenseric/apollo-upload-client





		// ****UPDATE PLANS TO INCLUDE****
		// // Remove, unfollow, or delete options.(Delete Mutation needed to meet project Criteria)
			// //need to add to profile page
		// // create an error/404 page

		// //  do we want to use an API to retrieve game data instead of leaving it up to the user? then no redundancies will happen, and we won't have to store it on our database
		// // are we creating an array of trending tutorials, or do we want to make a query for top rated tutorials?
		// todo what do we want to filter tutorials by? (console, rating, author....)
			// *console, rating, author, game
// *IDEAS/QUESTIONS



// *ICEBOX*

	// *icebox-youtube API when no results show, maybe have a way to find a tutorial else where?
	// *blog/ forums
	// *live chat
	// *Sell digital assets
	// *sell collectibles