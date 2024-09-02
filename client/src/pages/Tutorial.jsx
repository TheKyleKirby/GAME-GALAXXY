import { useParams, useNavigate } from "react-router-dom"
import { useMutation, useQuery } from "@apollo/client"
import { CLICKED_TUTORIAL, QUERY_ME } from "../utils/queries"
import ReactStars from 'react-rating-stars-component'
import { useState, useEffect } from "react"
import { SAVE_TUTORIAL } from "../utils/mutations"

const Tutorial = () => {
  const { id } = useParams()
  const [tutorial, setTutorial] = useState(null)
  const [saveTutorial] = useMutation(SAVE_TUTORIAL, {
    refetchQueries: [{ query: QUERY_ME }]
  })

  const navigate = useNavigate()

  const { data, loading, error } = useQuery(CLICKED_TUTORIAL, {
    variables: { id },
  })

  useEffect(() => {
    if (data && data.clickedTutorial) {
      setTutorial(data.clickedTutorial)
    }
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  if (!tutorial) return <p>Hold on</p>

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const randomNumber = getRandomNumber(0, 5)

  const handleSaveTutorial = async (id) => {
    try {
      await saveTutorial({
        variables: {
          savedTutorials: id,
        },
      })

      alert("Tutorial saved!")
      navigate("/profile")
    } catch {
      alert("Failed to save tutorial.")
    }
  }

  return (
    <div className="flex flex-col flex-grow bg-deepBlue text-notWhite min-h-screen">
      {/* Save Tutorial Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => handleSaveTutorial(tutorial._id)}
          className="bg-lightLavender text-deepBlue-light hover:bg-gradient-to-r hover:from-pinkyPink hover:to-brightPeach font-bold py-2 px-4 rounded transition-all duration-300"
        >
          Save Tutorial
        </button>
      </div>

      {/* Main content wrapper */}
      <div className="flex-grow p-4">
        {/* Tutorial Title and Author Section */}
        <div className="mx-auto w-[75%] bg-gradient-to-br from-pinkyPink-dark to-[#9f87ff] shadow-lg rounded-lg p-6 border-2 border-tealBlue-dark mb-6 text-center">
          <h2 className="text-4xl font-bold text-brightPeach">{tutorial.title}</h2>
          <p className="mt-2 text-xl text-notWhite">{tutorial.author.username}</p>
          <div className="mt-4 text-brightPeach text-xl flex items-center justify-center">
            <span className="mr-2">Tutorial Rating</span>
            <span className="text-5xl">
              <ReactStars
                value={randomNumber}
                size={32}
                color="#4A32CC"
                activeColor="#d8ab72"
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
              />
            </span>
            <span className="ml-2">{randomNumber}/5</span>
          </div>
        </div>

        {/* Game Name and PC Console Section */}
        <div className="grid grid-cols-2 gap-6 mb-6 mx-auto w-[75%]">
          <div className="bg-royalBlurp shadow-lg rounded-lg p-6 border-2 border-tealBlue-dark">
            <h2 className="text-xl font-bold text-brightPeach">Game Name</h2>
            <p className="mt-2 text-notWhite">{tutorial.game}</p>
          </div>
          <div className="bg-royalBlurp shadow-lg rounded-lg p-6 border-2 border-tealBlue-dark">
            <h2 className="text-xl font-bold text-brightPeach">{tutorial.platform}</h2>
            <p className="mt-2 text-notWhite">Platform</p>
          </div>
        </div>

        {/* Tutorial Content */}
        <div className="grid grid-cols-1 mb-6">
          <div className="bg-gradient-to-br from-pinkyPink-dark to-[#9f87ff] shadow-lg rounded-lg p-8 border-2 border-tealBlue-dark">
            <h2 className="text-2xl font-bold text-brightPeach">Tutorial Content</h2>
            <p className="mt-4 text-notWhite">{tutorial.content}</p>

            {tutorial.tags && tutorial.tags.length > 0 && (
              <div className="mt-8 flex items-center">
                <h3 className="text-xl font-bold text-brightPeach mr-4">Tags:</h3>
                <div className="flex flex-wrap">
                  {Array.isArray(tutorial.tags) ? (
                    tutorial.tags.map((tag, index) => (
                      <button
                        className="bg-brightPeach text-deepBlue rounded-full px-3 py-1 mr-2 mb-2 text-sm"
                        key={index}
                      >
                        {tag}
                      </button>
                    ))
                  ) : (
                    <button className="bg-brightPeach text-deepBlue rounded-full px-3 py-1 mr-2 mb-2 text-sm">
                      {tutorial.tags}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* YouTube Video Section - only renders if a YouTube link is provided */}
        {/* YouTube Video Section */}
{tutorial.youTubeLink && tutorial.youTubeLink.includes('youtube.com/embed/') ? (
  <div className="flex justify-center p-4">
    <div className="w-[75%] bg-royalBlurp shadow-lg rounded-lg p-6 border-2 border-tealBlue-dark">
      <h3 className="text-xl font-bold text-brightPeach mb-4">YouTube Video</h3>
      <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
        <iframe 
          className="absolute top-0 left-0 w-full h-full" 
          src={tutorial.youTubeLink} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
) : (
  <p className="text-center text-brightPeach">No YouTube video available for this tutorial.</p>
)}

      </div>

      {/* Comments Section */}
      <div className="flex justify-center p-4">
        <div className="w-3/4 bg-darkPurple p-6 shadow-lg rounded-lg border-2 border-tealBlue-dark">
          <h2 className="text-xl font-bold text-brightPeach mb-4">Comments</h2>
          {tutorial.comments && tutorial.comments.length > 0 && (
            <div className="space-y-4">
              {tutorial.comments.map((comment, index) => (
                <div className="p-4 bg-royalBlurp rounded-md shadow-inner" key={index}>
                  <p className="text-notWhite">
                    <strong>{comment.commenter}</strong>: {comment.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Comment form */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-notWhite">Leave a Comment</h3>

            {/* todo onSubmit={function to $addToSet tutorial.comments array} */}
            <form className="mt-4">
              {/* todo onChange={function to have event.target.value be set} */}
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
  )
}

export default Tutorial
