
const SearchBar = () => {
	return (
		<form action='/results' className='flex'>
			<div className="flex-1 mx-4">
			<input type="text" placeholder="Search..." className="px-7 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-goldenOrange-dark" />
		</div>
		<button type='submit' className="bg-pinkyPink-dark hover:bg-lightLavender-dark text-white font-semibold py-1 px-4 text-sm rounded">Search</button>
		</form>
	)
}

export default SearchBar
