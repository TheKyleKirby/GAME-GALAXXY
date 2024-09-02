import { useCallback, useState } from "react"
import { useDropzone } from 'react-dropzone'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { UPLOAD_PROFILE_PICTURE } from "../utils/mutations"
import { useMutation } from "@apollo/client"
import { QUERY_ME } from "../utils/queries"

const ProfilePicture = ({ picture }) => {
    const [picStatus, setPicStatus] = useState('img')
    const [preview, setPreview] = useState(null)
    const [file, setFile] = useState([])
    const [message, setMessage] = useState('')
    const [uploadProfilePicture] = useMutation(UPLOAD_PROFILE_PICTURE,
        {
            refetchQueries: [{ query: QUERY_ME }]
        }
    )

    const handlePicClick = () => setPicStatus('edit')

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = new FileReader()
        file.onload = function () {
            setPreview(file.result)
        }
        setPicStatus('preview')
        file.readAsDataURL(acceptedFiles[0])

        setFile(acceptedFiles)
    }, [])

    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    const handleOnSubmit = async (event) => {
        event.preventDefault()

        if (!file[0]) return

        const newProfilePic = file[0]

        const formData = new FormData()

        formData.append('file', newProfilePic)
        formData.append('upload_preset', 'game_galaxy')

        const results = await fetch('https://api.cloudinary.com/v1_1/dnvibzwty/image/upload', {
            method: 'POST',
            body: formData
        }).then(r => r.json())

        try {
            const { data } = await uploadProfilePicture({ variables: { file: results.secure_url } })

            if (data.uploadProfilePicture.success) {
                setPicStatus('img')
            } else {
                setMessage(data.uploadProfilePicture.message)
            }
        } catch (error) {
            setMessage(`Error uploading picture: ${error}`)
        }
    }

    return (
        <div className="w-64 h-64 border-4 border-tealBlue-light rounded-full flex justify-center items-center bg-gradient-to-br from-deepBlue-dark to-darkPurple-dark shadow-xl transform hover:scale-105 transition-transform duration-300">
            <button onClick={handlePicClick} >
                {picStatus === 'img' && (
                    <div className="relative group">
                        <img
                            src={`${picture}` || "https://via.placeholder.com/200"}
                            alt="ProfilePic"
                            className="rounded-full w-60 h-60 object-cover transition-opacity duration-300 group-hover:opacity-20"
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-goldenOrange font-extrabold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Change Picture
                        </span>
                    </div>
                )}
                {picStatus === 'edit' && (
                    <div {...getRootProps()} className="w-56 h-56 border-none rounded-full space-y-5 bg-deepBlue-light flex flex-col justify-center text-goldenOrange items-center">
                        <input {...getInputProps()} />
                        <span className="mt-7 bg-transparent font-extrabold text-2xl text-center">Drop Picture Here</span>
                        <FaLongArrowAltDown className="text-3xl animate-bounce" />
                    </div>
                )}
                {picStatus === 'preview' && (
                    <img
                        src={preview}
                        alt="ProfilePic"
                        className="overflow-hidden w-56 h-56 border-none rounded-full object-cover transition-opacity duration-300 group-hover:opacity-20"
                    />

                )}
            </button>

            {picStatus === 'preview' && (
                <button
                    onClick={handleOnSubmit}
                    className="absolute inset-0 flex items-center justify-center w-16 h-10 bg-gradient-to-br from-darkPurple-dark to-[#8c5b94] text-goldenOrange font-extrabold rounded-full transition-colors duration-300 hover:bg-goldenOrange-dark"
                >
                    Save
                </button>
            )}
        {message &&  <p className="text-brightPeach-dark">{message}</p>}
        </div>
    )
}

export default ProfilePicture
