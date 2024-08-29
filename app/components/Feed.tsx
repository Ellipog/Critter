/* eslint-disable jsx-a11y/alt-text */
import Creet from "@/app/components/ui/creet";
import { Image, ImagePlay } from "lucide-react";
import { creets } from "../temp/data";

export default function Feed() {
  return (
    <div className="flex-1 flex flex-col h-screen">
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Home</h1>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 gap-4 flex-col flex">
          <div className="flex space-x-3 border border-gray-700 rounded-2xl p-4 bg-dark-bg-primary flex-col">
            <textarea
              className="w-full bg-transparent resize-none outline-none"
              rows={3}
              placeholder="What's happening?"
            ></textarea>
            <div className="flex justify-between items-center mt-4 ">
              <div className="flex space-x-3 -ml-2">
                <button className="text-dark-accent-green hover:bg-dark-accent-green transition-all hover:bg-opacity-10 p-2 rounded-full">
                  <Image size={22} />
                </button>
                <button className="text-dark-accent-green hover:bg-dark-accent-green transition-all hover:bg-opacity-10 p-2 rounded-full">
                  <ImagePlay size={22} />
                </button>
              </div>
              <button className="bg-dark-accent-green transition-all hover:bg-dark-accent-darkGreen text-white font-bold py-2 px-4 rounded-full">
                Creet
              </button>
            </div>
          </div>
          {creets.map((creetInfo) => (
            <Creet
              id={creetInfo.id}
              displayName={creetInfo.displayName}
              userName={creetInfo.userName}
              text={creetInfo.text}
              pfp={creetInfo.pfp}
              info={creetInfo.info}
              key={creetInfo.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
