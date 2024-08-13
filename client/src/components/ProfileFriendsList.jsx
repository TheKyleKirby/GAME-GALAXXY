import { FaTrashAlt } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { REMOVE_FRIEND } from '../utils/mutations'
import { QueryInfo } from '@apollo/client/core/QueryInfo'
import { QUERY_ME } from '../utils/queries'

const ProfileFriendsList = ({friends}) => {

	console.log(JSON.stringify(friends))

	const [removeFriend ] = useMutation(REMOVE_FRIEND, {
		refetchQueries: [{ query: QUERY_ME}]
	})

	const handleRemove = (id) =>{

		console.log(id)
		removeFriend({
			variables: {
				friends: id
			}
		})
	}

	if (!friends || friends.length === 0) {
		return (
			<div className='bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite'>
				<h3 className='text--xl font-semibold mb-2 text-lightLavender-light'>Friends List</h3>
				<p>No friends yet..</p>
			</div>
		);
	}


	return (
		<div className="bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite">
			<h3 className="text-3xl tracking-wide font-semibold mb-5 text-lightLavender-light">Friends List</h3>
					<ul >
					{friends.map(friend => (
							<li 
							className='text-xl font-semibold text-goldenOrange my-3 flex items-center justify-between w-1/2'
							key={friend._id}>
								{/* <img src={friend.profilePicture} alt={friend.username} /> */}
								<p>{friend.username}</p>
								<button onClick={() => handleRemove(friend._id)}>
								<FaTrashAlt className='text-sm text-notWhite'/>
								</button>
							</li>
						))}
					</ul>
				</div>
	);
}

export default ProfileFriendsList