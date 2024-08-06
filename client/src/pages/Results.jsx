const Results = () => {
  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded p-4 mb-4 w-full">
        <h2 className="text-2xl font-bold">Results Page</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold">Tutorials</h2>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold">Users</h2>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold">Blogs</h2>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold">Games</h2>
        </div>
      </div>
    </div>
  );
};

export default Results;