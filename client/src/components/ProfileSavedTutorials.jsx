import { useMutation } from '@apollo/client'
import { REMOVE_SAVED_TUTORIAL } from '../utils/mutations'
import { FaDumpsterFire } from 'react-icons/fa'
import { QUERY_ME } from '../utils/queries'

const ProfileSavedTutorials = ({ tutorials }) => {

	console.log(tutorials)

	const [removeTutorial] = useMutation(REMOVE_SAVED_TUTORIAL, {
		refetchQueries: [{ query: QUERY_ME}]
	})

	const handleRemove = (id) =>{

		console.log(id)
		removeTutorial({
			variables: {
				savedTutorials: id
			}
		})
	}




	if (!tutorials || tutorials.length === 0) {
		return (
			<div className="bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite">

				<h3 className="text-3xl tracking-wide font-semibold mb-5 text-lightLavender-light">Saved Tutorials</h3>

				<p>No  Saved tutorials yet..</p>
			</div>
		);
	}




	return (
		<div className="bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite">

			<h3 className="text-3xl tracking-wide font-semibold mb-5 text-lightLavender-light">Saved Tutorials</h3>

			<ul>
				{tutorials.map((tutorial) => (
					<li
						className='text-lg font-semibold text-goldenOrange my-3 flex items-center justify-between'
						key={tutorial._id}>
						<a href={`/tutorial/${tutorial._id}`}>{tutorial.title}</a>
						<button onClick={() => handleRemove(tutorial._id)} >
							<FaDumpsterFire className='text-sm text-notWhite' />
						</button>
					</li>
				))
				}
				<li>

				</li>
			</ul>
		</div>
	)
}

export default ProfileSavedTutorials