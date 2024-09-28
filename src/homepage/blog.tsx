interface BlogProps {
    title: string;
    detail: string;
  }

export default function Blog ({title, detail}:BlogProps){
    return (
        <div className="flex flex-col min-h-[300px] max-h-[300px] bg-opacity-30  backdrop:filter bg-[#d7ca86] opacity-80  rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1">
          <div className="p-10 flex flex-col h-full">
            <h2 className=" text-2xl font-bold mb-4 font-serif">{title}</h2>
            <p className="flex-grow ">
              {detail}
            </p>
            <div className="mt-4">
              <button className="bg-gray-900 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
                Check it out
              </button>
            </div>
          </div>
        </div>
      );
 }