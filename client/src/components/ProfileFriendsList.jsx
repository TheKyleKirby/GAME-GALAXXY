import React from 'react'
// import { useQuery } from '@apollo/client'
// import { GET_USER_FRIENDS } from '../utils/queries'
// import AuthService from '../utils/auth'

const ProfileFriendsList = ({friends}) => {
	if (!friends || friends.length === 0) {
		return (
			<div className='bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite'>
				<h3 className='text--xl font-semibold mb-2 text-lightLavender-light'>Friends List</h3>
				<p>No friends yet..</p>
			</div>
		);
	}

	// todo function to find users by id's and map thru to make user cards or list names as links?/we could also just save usernames to an array.

// Get the logged-in user's ID from the decoded token
	// const userId = AuthService.getProfile()?.id;

// using the logged in user's id to fetch data from users data to find it's array of friends
	// const { data } = useQuery(GET_USER_FRIENDS, {
	// 	variables: { userId },
	// });

	// const friends = data?.user?.friends || [];

	return (
		<div className="bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite">
			<h3 className="text-xl font-semibold mb-2 text-lightLavender-light">Friends List</h3>
					<ul>
					{friends.map(friend => (
							<li key={friend.id}>
								{/* <img src={friend.avatarUrl} alt={friend.name} /> */}
								<p>{friend.name}</p>
							</li>
						))}
					</ul>
				</div>
	);
}

export default ProfileFriendsList

