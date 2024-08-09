
const ProfilePicture = ({picture}) => {
	return (
		<div className="w-64 h-64 mr-8 border-4 border-tealBlue-light rounded-full">
			<img
				src={picture || "https://via.placeholder.com/200"}
				alt="ProfilePic"
				className="w-full h-full rounded-full object-cover"
			/>
		</div>
	)
}

export default ProfilePicture