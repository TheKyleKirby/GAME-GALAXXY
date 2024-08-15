import { useState } from "react"
import { useNavigate } from 'react-router-dom'



const SearchBar = () => {
const [searchString, setSearchString] = useState('')
const navigate = useNavigate()

const handleInput = (event) =>{
	setSearchString(event.target.value)
}

const handleSubmit = (event) =>{
	event.preventDefault()
	console.log(searchString)
	if(searchString.trim()){
		navigate(`/results?query=${encodeURIComponent(searchString)}`)
	}
}


	return (
		<form onSubmit={handleSubmit} action='/results' className='space-x-4 mt-3 md:mt-0 flex'>
			<div >
			<input 
			onChange={handleInput} 
			type="text" 
			placeholder="Search for a game, user, tutorial, etc..." 
			className=" px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-goldenOrange-dark" />
		</div>
		<button type='submit' className="bg-pinkyPink-dark hover:bg-lightLavender-dark text-white font-semibold text-sm lg:text-base  py-2 md:py-1 md:px-3 px-1 rounded">Search</button>
		</form>
	)
}

export default SearchBar;
