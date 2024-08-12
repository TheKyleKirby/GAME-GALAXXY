import React from 'react'

const ProfileFriendsList = ({friends}) => {

	// todo function to find users by id's and map thru to make user cards or list names as links?/we could also just save usernames to an array.

	return (
		<div className="bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite">
			<h3 className="text-xl font-semibold mb-2 text-lightLavender-light">Friends List</h3>
			<p className="text-notWhite">List of friends...</p>
		</div>
	)
}

export default ProfileFriendsList

