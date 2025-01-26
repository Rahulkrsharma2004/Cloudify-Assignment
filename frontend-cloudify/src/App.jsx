import Table from "./components/Table";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="backdrop-blur-2xl shadow-lg rounded-lg p-6 w-full max-w-4xl ml-4 mr-4">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 relative">
          <span className="relative z-10">Dynamic Table with Dropdowns</span>
        </h1>
        <Table />
      </div>
    </div>
  );
};

export default App;
