interface ProjectProps {
  title: string;
  detail: string;
  url: string;
}

export default function Project({title, detail, url}: ProjectProps) {
  return (
    <div className="flex flex-col min-h-[300px] max-h-[300px] rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out relative"> {/* Add relative positioning */}
      <div className="p-10 flex flex-col h-full bg-[#aac1c2] bg-opacity-30 backdrop-filter backdrop-blur-sm">
        <h2 className="text-gray-700 text-2xl font-bold mb-4 font-serif">{title}</h2>
        <p className="flex-grow text-gray-600 text-lg">
          {detail}
        </p>
        <div className="mt-4">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-gray-700 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Check it out
          </a>
        </div>
      </div>
    </div>
  );
}