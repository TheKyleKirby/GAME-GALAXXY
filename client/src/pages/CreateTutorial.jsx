import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TUTORIAL } from "../utils/mutations";

const CreateTutorial = () => {
  // State variables for the form inputs
  const [title, setTitle] = useState('');
  const [game, setGame] = useState('');
  const [platform, setPlatform] = useState('');
  const [level, setLevel] = useState('');
  const [youTubeLink, setYouTubeLink] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  // todo gonna have to split tags into each tag string.
  const tutorialInput = {
    title,
    game,
    platform,
    level,
    youTubeLink,
    content,
    tags,
  };

  // Mutation to create a tutorial
  // const [createTutorial] = useMutation(CREATE_TUTORIAL, {
  //   variables: { tutorial: tutorialInput },
  // });
//--------------------------------------------------------------------------------------------
  const [createTutorial] = useMutation(CREATE_TUTORIAL);

  const handleTagsChange = (event) => {
    setTags(event.target.value.split(',').map(tag => tag.trim()));
  };

  // Form submission handler
  const onSubmit = async (event) => {
    event.preventDefault();
    if (title === '' || content === '') {
      return alert('Title and Content are required.');
    }
    try {
      const { data } = await createTutorial(
        { variables: 
          { tutorial: tutorialInput } 
        })
        ;
      console.log('Tutorial created:', data);
    } catch (error) {
      console.error('Error creating tutorial:', JSON.stringify(error, null, 2));
    }

    // createTutorial(tutorialInput);
  };
//-----------------------------------------------------------------------------------------------
  return (
    <main className="flex flex-col items-center bg-darkPurple-dark">
      {/* Heading Section */}
      <div className="flex justify-center mt-10 mb-6">
        <h2 className="text-5xl font-bold text-white relative inline-flex items-center">
          <span className="mr-2 md:mr-4 animate-pulse">✨</span>
          <span className="bg-gradient-to-r from-tealBlue via-brightPeach to-royalBlurp bg-clip-text text-transparent m-auto custom-heading">
            CREATE TUTORIAL
          </span>
          <span className="ml-2 md:ml-4 animate-pulse">✨</span>
        </h2>
      </div>

      {/* Form Section */}
      <div className="bg-gradient-to-br from-pinkyPink-dark to-[#9f87ff] shadow-lg p-6 border-2 border-tealBlue-dark mb-10 rounded-lg w-[95%] max-w-4xl">
        <form onSubmit={onSubmit} className="flex flex-col space-y-6">
          <div className="flex flex-wrap justify-between gap-6">
            <input
              type="text"
              name="title"
              className="rounded-lg p-3 w-full sm:w-[48%] focus:outline-none focus:ring-4 focus:ring-offset-deepBlue"
              placeholder="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              type="text"
              name="game"
              className="rounded-lg p-3 w-full sm:w-[48%] focus:outline-none focus:ring-4 focus:ring-offset-deepBlue"
              placeholder="Game"
              value={game}
              onChange={(event) => setGame(event.target.value)}
            />
            <select
              id="platform"
              name="platform"
              className="rounded-lg p-3 w-full sm:w-[48%] focus:outline-none focus:ring-4 focus:ring-offset-deepBlue"
              value={platform}
              onChange={(event) => setPlatform(event.target.value)}
            >
              <option value="" disabled hidden>
                Platform
              </option>
              {/* Add platform options here */}
            </select>
            <input
              type="text"
              name="level"
              className="rounded-lg p-3 w-full sm:w-[48%] focus:outline-none focus:ring-4 focus:ring-offset-deepBlue"
              placeholder="Level"
              value={level}
              onChange={(event) => setLevel(event.target.value)}
            />
            <input
              type="text"
              name="youtubelink"
              className="rounded-lg p-3 w-full focus:outline-none focus:ring-4 focus:ring-offset-deepBlue"
              placeholder="YouTube Link?"
              value={youTubeLink}
              onChange={(event) => setYouTubeLink(event.target.value)}
            />
          </div>
          <div className="flex flex-col text-2xl text-goldenOrange-light gap-4 font-light">
            <label>Create your tutorial here...</label>
            <textarea
              name="content"
              className="rounded-lg p-3 w-full h-48 focus:outline-none focus:ring-4 focus:ring-offset-deepBlue"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            ></textarea>
            <input
              type="text"
              name="tags"
              className="rounded-lg p-2 w-full focus:outline-none focus:ring-4 focus:ring-offset-deepBlue"
              placeholder="Tags"
              value={tags}
              onChange={(handleTagsChange)}
            />
            <button
              type="submit"
              className="text-white bg-royalBlurp-dark w-full md:w-48 py-2 self-end rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateTutorial;
