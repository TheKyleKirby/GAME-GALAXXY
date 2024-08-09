import React from 'react';


const SearchTutorialCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mx-4">
    <div className="font-bold text-xl mb-2">{tutorial.title}</div>
    <p className="text-gray-700 text-base mb-4">{tutorial.content}</p>
    <span className="text-gray-600 text-sm block mb-4">
      {/* make author username clickable to see their card? or add a follow creator button somewhere? */}
      Author: {tutorial.author.username}
    </span>
    {/* <Link to="/{tutorial._id}" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Read Tutorial</Link>... when detailed tutorial page done.*/}
    <a
      href={tutorial.link}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Read Tutorial
    </a>
  </div>
  )
}

export default SearchTutorialCard