import { useCallback, useState } from "react"
import { useDropzone } from 'react-dropzone'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { UPLOAD_PROFILE_PICTURE } from "../utils/mutations"
import { useMutation } from "@apollo/client"



const ProfilePicture = ({picture}) => {

	const [picStatus, setPicStatus] = useState('img')

	const handlePicClick = () => {
		setPicStatus('edit')
	}


// previewing pic when dropping in
	const onDrop = useCallback(async (acceptedFiles) => {
		console.log('onDrop Started')
// todo cloudarity
		const file = new FileReader()
	
		file.onload = function() {
			setPreview(file.result)
		}
		setPicStatus('preview')
		file.readAsDataURL(acceptedFiles[0])
	}, [])

	const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop
	})
	const [preview, setPreview] = useState(null)
	const [uploadProfilePicture] = useMutation(UPLOAD_PROFILE_PICTURE)


// submitting pic
// todo to call this
	const handleOnSubmit = async (event) =>{
		event.preventDefault()

		if( typeof acceptedFiles[0] === 'undefined') return

		const newProfilePic = acceptedFiles[0]

		try{
			const { data } = await uploadProfilePicture({
				variables: {
					file: newProfilePic
				}
			})
			console.log(success, message)
				if (data.uploadProfilePicture.success) {
					console.log(`Success! picture updated ${data.uploadProfilePicture.profilePictureUrl}`)
					setPicStatus('img')
					setPreview(data.uploadProfilePicture.profilePictureUrl)
				} else {
					console.error(data.uploadProfilePicture.message)
				}
		
		}catch(error){
			console.log(`Error uploading picture ${error}`)
		}

		// use Mutation to save to profile

	}




	return (
		<div className="w-64 h-64 mr-8 border-4 border-tealBlue-light rounded-full flex justify-center">
			<button onClick={handlePicClick}> 
			{ picStatus === 'img' && ( 
				<div className="relative group">
				<img
					src={picture || "https://via.placeholder.com/200"}
					alt="ProfilePic"
					className="rounded-full object-cover transition-opacity duration-300 group-hover:opacity-20"
				/>
				<span className="absolute inset-0 flex items-center justify-center text-goldenOrange font-extrabold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					Change Picture
				</span>
				</div>
				)
			}
			{ picStatus === 'edit' && (
				<div {...getRootProps()} className="w-56 h-56 border-none rounded-full space-y-5 bg-deepBlue-light flex flex-col justify-center text-goldenOrange items-center">
					<input {...getInputProps()}  />
					<span className="mt-7 bg-transparent font-extrabold text-2xl text-center">Deposit Picture to Save</span>
					<FaLongArrowAltDown className="text-3xl animate-bounce" />
				</div>
				)
			}
			{ picStatus === 'preview' && (
				<img
				src={preview}
				alt="ProfilePic"
				className="overflow-hidden w-56 h-56 border-none rounded-full object-cover transition-opacity duration-300 group-hover:opacity-20"
			/>
			)

			}

			</button>
		</div>
	)
}

export default ProfilePicture