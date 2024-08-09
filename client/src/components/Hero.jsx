import hero from "/images/hero/hero.mp4"

const Hero = () => {
	return (
		<>

			<section className="hero relative bg-deepBlue-dark">
				<video className="w-full mx-auto" autoPlay loop muted>
					<source  src={hero} type ="video/mp4"/></video>
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<div className="flex justify-center space-x-40">
						<button className="bg-[#814C75] hover:bg-tealBlue text-white font-bold py-2 px-4 rounded">Explore the Galaxxy!</button>
						<button className="bg-[#689596] hover:bg-tealBlue text-white font-bold py-2 px-4 rounded">Join the Adventure!</button>
					</div>
				</div>
			</section></>
	)
}

export default Hero