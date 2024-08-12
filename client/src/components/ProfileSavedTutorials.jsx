import { useQuery } from "@apollo/client"
import { TUTORIALS_BY_ID } from "../utils/queries"

const ProfileSavedTutorials = ({ tutorialIds }) => {

console.log(tutorialIds)

	const { data, loading, error } = useQuery(TUTORIALS_BY_ID, {
		variables: {
			id: tutorialIds
		},
		skip: !tutorialIds || tutorialIds.length === 0
	})

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	console.log(JSON.stringify(data))
	
	const tutorials = data ? data.tutorial : []


	return (
		<div className="bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite">
			<h3 className="text-xl font-semibold mb-2 text-lightLavender-light">Saved Tutorials</h3>
			<p className="text-notWhite">List of saved tutorials...</p>
			<ul>
				{tutorials.length > 0 ? (
					tutorials.map((tutorial) => (
						<li key={tutorial.id}>
							<a href={`/tutorial/${tutorial.id}`}>{tutorial.name}</a>
						</li>
					))
				) :
					(<li> No game favorites yet </li>)
				}
				<li>

				</li>
			</ul>
		</div>
	)
}

export default ProfileSavedTutorials