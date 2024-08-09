import NotFoundPic from '/images/NotFound/NotFoundPic.mp4'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='relative'>
			<video className="w-full " autoPlay muted>
				<source  src={NotFoundPic} type ="video/mp4"/>
			</video>
				<Link to='/'>
				<button className="bg-tealBlue-dark hover:bg-tealBlue-light text-goldenOrange-light text-3xl font-bold py-5 px-10 rounded-md absolute bottom-64 left-96 z-20 shadow-lg shadow-goldenOrange-dark opacity-75">Start Over?</button>
				</Link>
		</div>
	)
}

export default NotFound