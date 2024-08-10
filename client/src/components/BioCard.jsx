// import { useMutation } from "@apollo/client";
import { useState } from "react";

const BioCard = ({bio}) => {

	const [bioStatus, setBioStatus] = useState("paragraph")

	const [bioText, setBioText] = useState( {bio} || '' )

// on click of edit button
	const handleEditOpen = (event) => {
		event.preventDefault()
		setBioStatus('inputArea')
	}

	const handleChange = (event) => {
		const { name, value } = event.target

		setBioText({
			...bioText,
			[name]: value 
		})
	}

// save changes and close the edit
	const handleSaveUpdates = () => {

	// useMutation to update user with updated bio bioText
	// set bio status back to paragraph

	}

	return (
		<>
			<div className="bg-darkPurple-dark p-6 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3">

					<h2 className="text-2xl font-bold mb-2 text-brightPeach-light">Bio</h2>

			{ bioStatus === 'paragraph' ? (

				<div>
					<p className="text-white">{ bio }</p>

					<div className="">
					<button className="bg-[#814C75] hover:bg-tealBlue text-white font-bold py-2 px-rounded"onClick={handleEditOpen}> EDIT BIO</button>
					</div>
				</div>

			):(

			<div>
              <textarea className="w-full p-2 mt-2 text-black" value={bioText.bio} onChange={handleChange}/>
              <button className="bg-tealBlue hover:bg-darkPurple-dark text-white font-bold py-2 px-4 rounded mt-2" onClick={handleSaveUpdates}> Save </button>
			</div>
			)
			}

			</div>

		</>
	);
}


export default BioCard