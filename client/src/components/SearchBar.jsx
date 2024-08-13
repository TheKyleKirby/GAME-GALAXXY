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
		<form onSubmit={handleSubmit} action='/results' className='flex flex-col md:flex-row items-center max-w-4xl mx-auto'>
			<div className="flex-2 mx-4">
			<input onChange={handleInput} type="text" placeholder="Search for a game, user, tutorial, etc..." className="w-[200px] md:w-[400px] lg:w-[600px] px-4 py-2 md:px-7 md:py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-goldenOrange-dark" />
		</div>
		<button type='submit' className="bg-pinkyPink-dark hover:bg-lightLavender-dark text-white font-semibold py-2 px-4 md:py-1 md:px-6 md:text-base rounded">Search</button>
		</form>
	)
}

export default SearchBar;
