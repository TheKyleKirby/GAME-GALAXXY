const Blog = () => {
  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded p-4 mb-4 w-full">
        <h2 className="text-2xl font-bold">Welcome to the Blog Space!</h2>
      </div>
      <div className="bg-white shadow-md rounded p-4 mb-4 w-full">
        <h2 className="text-xl font-bold">Search for existing discussions</h2>
        <input
          type="text"
          placeholder="Search..."
          className="mt-2 p-2 border rounded w-full"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <div className="mb-4">
            <button className="bg-blue-500 text-white p-2 rounded w-full">
              Start a new discussion
            </button>
          </div>
          <div>
            <h2 className="text-xl font-bold">Discussion Title</h2>
            <p className="mt-2">Content underneath the discussion title.</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold">Discussions</h2>
          <p className="mt-2">This is where all the blogs will be displayed.</p>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold">My Discussions</h2>
          <div className="mt-4">
            <div className="bg-gray-100 p-2 rounded mb-2">Box 1</div>
            <div className="bg-gray-100 p-2 rounded">Box 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;