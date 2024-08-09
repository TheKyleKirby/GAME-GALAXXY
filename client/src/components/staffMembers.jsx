//import staffMembers images
import image1 from '/images/about/tish.jpg';
import image2 from '/images/about/kyle.jpg';
import image3 from '/images/about/beth.jpg';
import image4 from '/images/about/karina.png';
import image5 from '/images/about/tristan.jpg';
import image6 from '/images/about/betzy.jpg';

const staffMembers = [
    {name: 'Tish Sirface A.K.A. ThisTish', image: image1, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Kyle Kirby A.K.A. Kirbsteroonie', image: image2, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Beth McKinney A.K.A. Corgilicious', image: image3, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Karina Gonzalez A.K.A. Aimee_kgl', image: image4, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Tristan Smith A.K.A. ', image: image5, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Betzaida Taylor A.K.A. Nyxie96', image: image6, level:'Level 1 developer', bio: '(insert bio here)'},

];

const StaffMembers = () => {
    return(
        <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Meet Our Staff</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((member, index) =>(
                <div key={index} className="bg-purple-600 shadow-lg rounded-lg p-6">
                  <div className="w-full h-96 relative mb-4">
                    <div className="image-container">
                    <img src={member.image}
                         alt={member.name}
                         className="absolute w-full object-contain"
                         style={{maxHeight:'100%'}}/>
                         </div>
                         </div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-white mb-2">{member.level}</p>
                    <p className="text-white">{member.bio}</p>
                  </div> 
            ))}
      </div>
    </div>
    )
}

export default StaffMembers