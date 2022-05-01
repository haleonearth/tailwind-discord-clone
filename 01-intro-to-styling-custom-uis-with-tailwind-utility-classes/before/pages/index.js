export default function Home() {
  return (
    <div className="flex h-screen text-white">
      <div className="p-4 bg-gray-800">
        <div className="flex items-center justify-center w-12 h-12 text-gray-800 bg-white rounded-full">TW</div>
      </div>
      <div className="flex flex-col bg-gray-700 w-60">
        <div className="p-4 shadow-md">Tailwind CSS</div>
        <div className="flex-1 p-4">channels</div>
      </div>
      <div className="flex flex-col flex-1 bg-gray-600">
        <div className="p-4 shadow-md">General</div>
        <div className="flex-1 p-4 bg-black">Messages</div>
      </div>
    </div>
  );
}
