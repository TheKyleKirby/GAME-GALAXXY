import React from 'react'

const ProfileSavedTutorials = ({tutorials}) => {
	return (
		// todo list saved titles of tutorials as links, or minicards?
		<div className="bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite">
			<h3 className="text-xl font-semibold mb-2 text-lightLavender-light">Saved Tutorials</h3>
			<p className="text-notWhite">List of saved tutorials...</p>
			<ul>
				{/* tutorials.map((tutorial) =>( show tutorials... )) */}
				<li>

				</li>
			</ul>
		</div>
	)
}

export default ProfileSavedTutorials