import hero from "/images/hero/hero.mp4"

const Hero = () => {
	return (
		<>

			<section className="hero relative bg-black">
				<video className="w-full h-screen object-contain" src={hero} autoPlay loop />
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<div className="flex justify-center space-x-40 mb-4 lg:mb-2" style={{ marginBottom: '0%' }}>
						<button className="bg-fooBar hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore the Galaxxy!</button>
						<button className="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join the Adventure!</button>
					</div>
				</div>
			</section></>
	)
}

export default Hero