
const SearchBar = () => {
	return (
		<form action='/results' className='flex flex-col md:flex-row items-center max-w-4xl mx-auto'>
			<div className="flex-1 mx-4">
			<input type="text" placeholder="Search..." className="w-full px-4 py-2 md:px-7 md:py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-goldenOrange-dark" />
		</div>
		<button type='submit' className="bg-pinkyPink-dark hover:bg-lightLavender-dark text-white font-semibold py-2 px-4 md:py-1 md:px-6 md:text-base rounded">Search</button>
		</form>
	)
}

export default SearchBar
