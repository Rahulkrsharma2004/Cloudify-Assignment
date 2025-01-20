import Table from './components/Table';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Dynamic Table with Dropdowns
        </h1>
        <Table />
      </div>
    </div>
  );
};

export default App;
