const Tutorial = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold">Game Guide Author</h2>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold">Game Name/PC Console</h2>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold">Level Links</h2>
            <ul className="list-disc pl-5">
              <li>Level 1</li>
              <li>Level 2</li>
              <li>Level 3</li>
              <li>Level 4</li>
              <li>Level 5</li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold">Level 1 Name - Level Difficulty</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;