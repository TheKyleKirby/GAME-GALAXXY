import hero from "/images/hero/hero.mp4";

const Hero = () => {
  return (
    <>
      <section className="hero relative bg-deepBlue-dark">
        <video className="w-full mx-auto" autoPlay loop muted>
          <source src={hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-20 sm:mt-32 lg:mt-40 xl:mt-60">
            <a href="#trending-tutorials" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-5 lg:py-4 lg:px-6 text-base sm:text-lg lg:text-xl rounded">
              Explore the Galaxy!
            </a>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-5 lg:py-4 lg:px-6 text-base sm:text-lg lg:text-xl rounded">
              Join the Adventure!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
