import hero from "/images/hero/hero.mp4"

const Hero = () => {
	return (
		<>
			<section className="hero relative bg-deepBlue-dark">
				<video className="w-full mx-auto" autoPlay loop muted>
					<source src={hero} type="video/mp4" />
				</video>
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<div className="flex justify-center space-x-40 mt-60"> 
						<button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-6 text-xl rounded"> 
							Explore the Galaxy!
						</button>
						<button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 text-xl rounded"> 
							Join the Adventure!
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero
