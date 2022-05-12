export default function Home() {
  return (
    <div className="flex h-screen text-white">
      <div className="p-3 space-y-2 overflow-y-scroll bg-gray-800">
        {[...Array(40)].map((_, i) => (
          <div className="flex items-center justify-center w-12 h-12 text-gray-800 bg-white rounded-full">
          {i}
          </div>
        ))}
      </div>


      <div className="flex flex-col bg-gray-700 w-60">
        <div className="flex items-center h-12 px-3 shadow-md">
          Tailwind CSS
        </div>

        <div className="flex-1 p-3 space-y-2 overflow-y-scroll">
        {[...Array(40)].map((_, i) => (
          <p>channel {i}</p>
        ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-gray-600">
        <div className="p-4 shadow-md">General</div>
        <div className="flex-1 p-4 bg-black">Messages</div>
      </div>
    </div>
  );
}
