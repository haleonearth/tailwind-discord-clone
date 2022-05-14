export default function Home() {
  return (
    <div className="flex h-screen text-gray-100">
      <div className="p-3 space-y-2 overflow-y-scroll bg-gray-900">
        {[...Array(40)].map((_, i) => (
          <div className="flex items-center justify-center w-12 h-12 text-gray-800 bg-white rounded-full">
          {i}
          </div>
        ))}
      </div>


      <div className="flex flex-col bg-gray-800 w-60">
        <div className="flex items-center h-12 px-3 shadow-md">
          Tailwind CSS
        </div>

        <div className="flex-1 p-3 space-y-2 overflow-y-scroll text-gray-300">
          <p class="text-white">channel (unread)</p>
          <p class="text-white">channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p>channel {i}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-gray-700">
        <div className="flex items-center h-12 px-3 shadow-md">General</div>
        <div className="flex-1 p-3 space-y-4 overflow-y-scroll">
          {[...Array(40)].map((_, i) => (
            <p>channel {i}. But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
          ))}
        </div>
      </div>
    </div>
  );
}
