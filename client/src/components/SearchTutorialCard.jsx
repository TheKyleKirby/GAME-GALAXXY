import { Link } from 'react-router-dom'


const SearchTutorialCard = ({tutorials}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {tutorials.map((tutorial) => (//change testTutorials to tutorials when search functions in place.
      <div
        key={tutorial._id}
        className={`w-1/2`}
      >
        <div className="bg-darkPurple-dark shadow-lg rounded-lg p-6 mx-4">
          <div className="font-bold  text-goldenOrange text-xl mb-2">{tutorial.title}</div>
          {/* dummy styling to display game. will show title. not id. */}
          <div className="font-semibold text-white text-md mb-2">{tutorial.game}</div>
          <div className="font-light text-notWhite text-xs mb-2">{tutorial.console}</div>
          <div className="font-light text-brightPeach text-xs mb-2">{tutorial.rating}</div>
          <p className="text-gray-700 text-base mb-4">{tutorial.content}</p>
          <span className="text-white text-sm block mb-4">
            {/* make author username clickable to see their profile */}
            Author: {tutorial.author.username}
          </span>
          {/* <Link to="tutorial/{tutorial._id}" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read Tutorial</Link>... when detailed tutorial page done.*/}
          <Link
            to="/tutorial"
            className="bg-[#814C75] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Read Tutorial
          </Link>
        </div>
      </div>
    ))}
  </div>
  )
}

export default SearchTutorialCard