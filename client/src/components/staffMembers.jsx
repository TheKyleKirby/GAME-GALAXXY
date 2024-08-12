//import staffMembers images
import image1 from '/images/about/tish.jpg';
import image2 from '/images/about/kyle.jpg';
import image3 from '/images/about/beth.jpg';
import image4 from '/images/about/karina.png';
import image5 from '/images/about/tristan.jpg';
import image6 from '/images/about/betzy.jpg';

const staffMembers = [
  {name: 'Tish Sirface', aka: '@ThisTish', image: image1, level:'Level 1 developer', bio: '(insert bio here)'},
  {name: 'Kyle Kirby', aka: '@Kirbsteroonie', image: image2, level:'Level 1 developer', bio: '(insert bio here)'},
  {
      name: 'Beth McKinney',
      aka: '@Corgilicious',
      image: image3,
      level: 'Level 1 developer',
      bio: '(insert bio here)',
      objectPosition: 'center top', // Adjusted position
  },
  {name: 'Karina Gonzalez', aka: '@Aimee_kgl', image: image4, level:'Level 1 developer', bio: '(insert bio here)'},
  {name: 'Tristan Smith', aka: '@Whiskeyy_RL', image: image5, level:'Level 1 developer', bio: '(insert bio here)'},
  {
      name: 'Betzaida Taylor',
      aka: '@Nyxie96',
      image: image6,
      level: 'Level 1 developer',
      bio: '(insert bio here)',
      objectPosition: 'center top', // Adjusted position
  },
];


const StaffMembers = () => {
  return (
    <div className="w-[90%] mx-auto mt-8 bg-deepBlue border-2 border-royalBlue-dark shadow-lg rounded-lg p-6 md:p-8">
      <div className="flex justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white relative inline-flex items-center">
          <span className="mr-2 md:mr-4 animate-pulse">✨</span>
          <span className="bg-gradient-to-r from-tealBlue via-brightPeach to-royalBlurp bg-clip-text text-transparent">
            Meet Our Staff
          </span>
          <span className="ml-2 md:ml-4 animate-pulse">✨</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
        {staffMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-darkPurple-dark shadow-xl rounded-lg p-8 md:p-10 transform hover:scale-105 transition-transform duration-300 max-w-[300px] sm:max-w-[340px] mx-auto"
          >
            <div className="w-48 h-56 md:w-60 md:h-72 relative mx-auto mb-4">
              <div className="flex justify-center items-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="rounded-full border-4 border-tealBlue-dark w-48 h-56 md:w-60 md:h-72 object-cover shadow-lg"
                  style={{ objectPosition: member.objectPosition || 'center' }} // Default to center if not specified
                />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-goldenOrange text-center">{member.name}</h3>
            <p className="text-lg md:text-xl text-lightLavender text-center mb-2">{member.aka}</p>
            <p className="text-md md:text-lg text-lightLavender text-center mb-2">{member.level}</p>
            <p className="text-sm md:text-notWhite text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffMembers;




