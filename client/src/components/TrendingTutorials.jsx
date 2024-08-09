import CustomCarousel from './CustomCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const TrendingTutorials = () => {
    return (
        <div className="container mx-auto mt-8">
        <h2 className="text-3xl text-white font-bold mb-4">Trending Tutorials</h2>
        <CustomCarousel />
      </div>
    )
}

export default TrendingTutorials
