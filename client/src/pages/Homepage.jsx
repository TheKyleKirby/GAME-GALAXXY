import Navbar from './Navbar';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            {/* Title Box */}
            <div className="h-40 bg-blue-600 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold">Welcome to Our Website</h1>
            </div>

            {/* Trending Guides Card */}
            <div className="flex justify-center mt-8">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Trending Guides</h2>
                    <p className="text-gray-600">Here are some popular game guides you might like...</p>
                </div>
            </div>

            {/* Meet Our Staff Card */}
            <div className="flex justify-center mt-8">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Staff</h2>
                    <p className="text-gray-600">Learn more about the amazing team behind our success...</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;