import React from 'react';

const Tutorial = () => {
  return (
    <div className="flex flex-col flex-grow bg-deepBlue text-notWhite min-h-screen">
      {/* Main content wrapper */}
      <div className="flex-grow p-4">
        {/* Tutorial Title and Author Section */}
        <div className="mx-auto w-[75%] bg-gradient-to-br from-pinkyPink-dark to-[#9f87ff] shadow-lg rounded-lg p-6 border-2 border-tealBlue-dark mb-6 text-center">
          <h2 className="text-4xl font-bold text-brightPeach">Tutorial Title</h2>
          <p className="mt-2 text-xl text-notWhite">Author: Author Name Here</p>
          <p className="text-sm text-notWhite">Date of Creation</p>
          <div className="mt-4 text-brightPeach text-xl flex items-center justify-center">
            <span className="mr-2">Tutorial Rating</span>
            <span className="text-2xl">★ ★ ★ ★ ☆</span>
            <span className="ml-2">(4.0/5)</span>
          </div>
        </div>

        {/* Game Name and PC Console Section */}
        <div className="grid grid-cols-2 gap-6 mb-6 mx-auto w-[75%]">
          <div className="bg-royalBlurp shadow-lg rounded-lg p-6 border-2 border-tealBlue-dark">
            <h2 className="text-xl font-bold text-brightPeach">Game Name</h2>
            <p className="mt-2 text-notWhite">Game Name</p>
          </div>
          <div className="bg-royalBlurp shadow-lg rounded-lg p-6 border-2 border-tealBlue-dark">
            <h2 className="text-xl font-bold text-brightPeach">PC/Console</h2>
            <p className="mt-2 text-notWhite">Platform</p>
          </div>
        </div>

        {/* Tutorial Content */}
        <div className="grid grid-cols-1 mb-6">
          <div className="bg-gradient-to-br from-pinkyPink-dark to-[#9f87ff] shadow-lg rounded-lg p-8 border-2 border-tealBlue-dark">
            <h2 className="text-2xl font-bold text-brightPeach">Content & Headings</h2>
            <p className="mt-4 text-notWhite">
              This is where detailed information about the tutorial goes. Describe the challenges, tips, and strategies for this specific level. This section can also include embedded media, images, or other relevant content.
            </p>
            <div className="mt-8 flex items-center">
              <h3 className="text-xl font-bold text-brightPeach mr-4">Tags:</h3>
              <div className="flex flex-wrap">
                <button className="bg-brightPeach text-deepBlue rounded-full px-3 py-1 mr-2 mb-2 text-sm">Tag 1</button>
                <button className="bg-brightPeach text-deepBlue rounded-full px-3 py-1 mr-2 mb-2 text-sm">Tag 2</button>
                <button className="bg-brightPeach text-deepBlue rounded-full px-3 py-1 mr-2 mb-2 text-sm">Tag 3</button>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="flex justify-center p-4">
          <div className="w-[75%] bg-royalBlurp shadow-lg rounded-lg p-6 border-2 border-tealBlue-dark">
            <h3 className="text-xl font-bold text-brightPeach mb-4">YouTube Video</h3>
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="flex justify-center p-4">
        <div className="w-3/4 bg-darkPurple p-6 shadow-lg rounded-lg border-2 border-tealBlue-dark">
          <h2 className="text-xl font-bold text-brightPeach mb-4">Comments</h2>
          
          {/* List of Comments */}
          <div className="space-y-4">
            {/* Example Comment */}
            <div className="p-4 bg-royalBlurp rounded-md shadow-inner">
              <p className="text-notWhite"><strong>User123:</strong> This tutorial was really helpful, thanks!</p>
            </div>
          </div>

          {/* Comment form */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-notWhite">Leave a Comment</h3>
            <form className="mt-4">
              <textarea
                className="w-full p-2 rounded-lg bg-notWhite text-deepBlue focus:outline-none focus:ring-2 focus:ring-brightPeach"
                rows="4"
                placeholder="Write your comment here..."
              ></textarea>

              {/* Submit form button */}
              <button
                type="submit"
                className="mt-4 bg-brightPeach hover:bg-brightPeach-dark text-deepBlue font-bold py-2 px-4 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
