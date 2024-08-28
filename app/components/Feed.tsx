/* eslint-disable jsx-a11y/alt-text */
import Creet from "@/app/components/ui/creet";
import { Image, ImagePlay } from "lucide-react";

export default function Feed() {
  return (
    <div className="flex-1 border-r border-gray-700 p-4 gap-4 flex-col flex">
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Home</h1>
      </header>

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
      <Creet
        displayName="Froskemannen"
        userName="frogman154"
        text="Eg elskar fiskar!"
        pfp="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        info={[2422456, 352, 34354, 5345]}
      />
      <Creet
        displayName="Episke Fiskekvoter"
        userName="ikkeenbot100"
        text="Det var en gang en fisk som hadde en drøm... la det synke inn..."
        pfp="https://images.pexels.com/photos/229789/pexels-photo-229789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        info={[13242, 4562, 2344, 5456456]}
      />
    </div>
  );
}
