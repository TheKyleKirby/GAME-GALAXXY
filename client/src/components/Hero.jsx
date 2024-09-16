import hero from "/images/hero/hero.mp4";
import { useNavigate } from 'react-router-dom'



const Hero = () => {

  const navigate = useNavigate()

  return (
    <>
      <section className="hero relative bg-deepBlue-dark">
        <video className="w-full mx-auto" autoPlay loop muted>
          <source src={hero} type="video/mp4" />
        </video>
        <div className="md:absolute md:inset-0 space-y-4 flex mt-20  flex-col items-center md:flex-row md:justify-center md:space-x-32 md:space-y-0">
          {/* <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-20 sm:mt-32 lg:mt-40 xl:mt-60"> */}
            <a href="#trending-tutorials" className="bg-cyan-500 bg-opacity-65 rounded-xl hover:bg-cyan-600 text-white text-xs font-bold py-2 px-4 sm:py-3 sm:px-5 lg:py-4 lg:px-6 md:text-base sm:text-lg lg:text-xl">
              Explore the Galaxy!
            </a>
            <button
              onClick={() => navigate('/signup')} 
              className="bg-pinkyPink hover:bg-pinkyPink-dark bg-opacity-65 rounded-xl text-white text-xs font-bold py-2 px-4 sm:py-3 sm:px-5 lg:py-4 lg:px-6 md:text-base sm:text-lg lg:text-xl ">
              Join the Adventure!
            </button>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
