//import staffMembers images
import image1 from '/images/about/tish.jpg';
import image2 from '/images/about/kyle.jpg';
import image3 from '/images/about/beth.jpg';
import image4 from '/images/about/karina.png';
import image5 from '/images/about/tristan.jpg';
import image6 from '/images/about/betzy.jpg';

const staffMembers = [
  {name: 'Tish Sirface', aka: '@ThisTish', image: image1, level:'Level 1 developer', bio: 'Web Developer, Crocheter, Disc Golfer'},
  {name: 'Kyle Kirby', aka: '@Kirbsteroonie', image: image2, level:'Level 1 developer', bio: 'Father, Golfer, Coder, and Pizza Inhaler'},
  {
      name: 'Beth McKinney',
      aka: '@Corgilicious',
      image: image3,
      level: 'Level 1 developer',
      bio: "I'm here so I don't get fined 🤷‍♀️",
      objectPosition: 'center top', // Adjusted position
  },
  {name: 'Karina Gonzalez', aka: '@Aimee_kgl', image: image4, level:'Level 1 developer', bio: '🧩 Puzzler, Big Bang Theory ⚛️'},
  {name: 'Tristan Smith', aka: '@Whiskeyy_RL', image: image5, level:'Level 1 developer', bio: 'https://www.youtube.com/watch?v=C6-F19hJ1h0&t=53s'},
  {
      name: 'Betzaida Taylor',
      aka: '@Nyxie96',
      image: image6,
      level: 'Level 1 developer',
      bio: '🎧 Rave enthusiast | 🎲 D&D adventurer | 💻 Coding newbie Living life one beat at a time and exploring the digital world online. Catch me at the rail or rolling dice in a campaign ✨',
      objectPosition: 'center top', // Adjusted position
  },
];


const StaffMembers = () => {
  return (
    <div className="w-[90%] mx-auto mt-8 mb-12 bg-deepBlue border-2 border-royalBlue-dark shadow-lg rounded-lg p-6 md:p-8">
      <div className="flex justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white relative inline-flex items-center">
          <span className="mr-2 md:mr-4 animate-pulse">✨</span>
          <span className="bg-gradient-to-r from-tealBlue via-brightPeach to-royalBlurp bg-clip-text text-transparent">
            Meet Our Staff
          </span>
          <span className="ml-2 md:ml-4 animate-pulse">✨</span>
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {staffMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-[#91407288] via-[#6e3b8f88] to-[#52229a88] shadow-xl rounded-lg p-8 md:p-10 transform hover:scale-105 transition-transform duration-300 max-w-[300px] sm:max-w-[340px] mx-auto border-2 border-tealBlue-dark"
          >
            <div className="w-48 h-56 md:w-60 md:h-72 relative mx-auto mb-4">
              <div className="flex justify-center items-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="rounded-full border-4 border-tealBlue-dark w-48 h-56 md:w-60 md:h-72 object-cover shadow-lg"
                  style={{ objectPosition: member.objectPosition || 'center' }} 
                />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-goldenOrange text-center">{member.name}</h3>
            <p className="text-lg md:text-xl text-tealBlue-light text-center mb-2">{member.aka}</p>
            <p className="text-md md:text-lg text-lightLavender text-center mb-2">{member.level}</p>
            <p className="text-sm md:text-notWhite text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffMembers;






