import { Link } from 'react-router-dom'


const SearchTutorialCard = ({tutorial}) => {

  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
    
      <div
        key={tutorial._id}
        className="w-full"
      >
        <div className="bg-darkPurple-dark shadow-lg rounded-lg p-4 sm:p-6">
          <div className="font-bold  text-goldenOrange text-lg sm:text-xl mb-2">{tutorial.title}</div>
          {/* dummy styling to display game. will show title. not id. */}
          <div className="font-semibold text-white text-md mb-2">{tutorial.game}</div>
          <div className="font-light text-notWhite text-xs mb-2">{tutorial.console}</div>
          <div className="font-light text-brightPeach text-xs mb-2">{tutorial.rating}</div>
          <p className="text-white text-base mb-4">{tutorial.content}</p>
          <span className="text-white text-sm block mb-4">
            {/* make author username clickable to see their profile */}
            Author: {tutorial.author.username}
          </span>
          <Link
            to={`/tutorial/${tutorial._id}`}
            className="bg-[#814C75] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
          >
            Read Tutorial
          </Link>
        </div>
      {/* </div> */}
    
  </div>
  )
}

export default SearchTutorialCard