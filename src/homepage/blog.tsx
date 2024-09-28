interface BlogProps {
  title: string;
  detail: string;
  url: string;
}

export default function Blog({title, detail, url}: BlogProps) {
  return (
    <div className="flex flex-col min-h-[300px] max-h-[300px] rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out z-0">
      <div className="p-10 flex flex-col h-full bg-[#d7ca86] bg-opacity-30 backdrop-filter backdrop-blur-sm">
        <h2 className="text-gray-700 text-2xl font-bold mb-4 font-serif">{title}</h2>
        <p className="flex-grow text-gray-600 text-lg">
          {detail}
        </p>
        <div className="mt-4">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-gray-700 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}