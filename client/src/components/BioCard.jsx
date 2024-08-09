const BioCard = ({ bio }) => {
	return (
		<>
			{bio !== null && (
				<div className="bg-darkPurple-dark p-6 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3">
					<h2 className="text-2xl font-bold mb-2 text-brightPeach-light">Bio</h2>
					<p className="text-notWhite">
						{bio}
					</p>
				</div>
			)}
		</>
	);
}


export default BioCard