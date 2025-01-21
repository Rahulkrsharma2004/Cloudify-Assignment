import Table from './components/Table';

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="backdrop-blur-2xl shadow-lg rounded-lg p-16 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Dynamic Table with Dropdowns
        </h1>
        <Table />
      </div>
    </div>
  );
};

export default App;
