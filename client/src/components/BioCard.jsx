// import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useMutation } from '@apollo/client'
import { UPDATE_BIO } from '../utils/mutations'

const BioCard = ({bio}) => {

	const [bioStatus, setBioStatus] = useState("paragraph")
	const [bioText, setBioText] = useState( bio || '' )
	const [ updateBio ] = useMutation(UPDATE_BIO)

// on click of edit button
	const handleEditOpen = (event) => {
		event.preventDefault()
		setBioStatus('inputArea')
	}

// handle change in input area
	const handleChange = async (event) => {
		setBioText(event.target.value);
	}
	
	const handleSaveUpdates = async (event) => {
		event.preventDefault();
console.log('Saving bio text:', bioText);
		try {
			const { data } = await updateBio({variables: {bioText: bioText }})
console.log('Updated bio:', data.updateBio);
			setBioStatus('paragraph');
		} catch (e) {
			console.log('Error updating bio', e.graphQLErrors || e.networkError || e.message);
		}		  
	}

	return (
		<>
			<div className="bg-darkPurple-dark p-6 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3">

					<h2 className="text-2xl font-bold mb-2 text-brightPeach-light">Bio</h2>

			{ bioStatus === 'paragraph' ? (

				<div>
					<p className="text-white">{ bio }</p>

					<div>
					<button 
					className="bg-[#814C75] hover:bg-tealBlue text-white font-bold py-2 px-rounded"
					onClick={handleEditOpen}
					> EDIT BIO</button>
					</div>

				</div>

			):(

			<div>

            <textarea 
			className="w-full p-2 mt-2 text-black" 
			value={bioText} 
			onChange={handleChange}
			/>
			
            <button 
			className="bg-tealBlue hover:bg-darkPurple-dark text-white font-bold py-2 px-4 rounded mt-2" 
			onClick={handleSaveUpdates}
			> Save </button>
			
			</div>
			)
			}

			</div>

		</>
	);
}


export default BioCard