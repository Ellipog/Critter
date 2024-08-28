import shortenNumber from "@/app/components/lib/utility";
import { Heart, MessageCircle, Repeat, Share } from "lucide-react";

export default function CreetInfoBar({ info }: { info: Array<number> }) {
  return (
    <div className="flex justify-between mt-3 text-gray-500 w-80">
      <button className="transition-all hover:text-dark-accent-green flex flex-row items-center gap-1 text-sm w-1/4">
        <MessageCircle size={18} />
        {shortenNumber(info[0])}
      </button>
      <button className="transition-all hover:text-green-400 flex flex-row items-center gap-1 text-sm w-1/4">
        <Repeat size={18} />
        {shortenNumber(info[1])}
      </button>
      <button className="transition-all hover:text-red-400 flex flex-row items-center gap-1 text-sm w-1/4">
        <Heart size={18} />
        {shortenNumber(info[2])}
      </button>
      <button className="transition-all hover:text-dark-accent-green flex flex-row items-center gap-1 text-sm w-1/4">
        <Share size={18} />
        {shortenNumber(info[3])}
      </button>
    </div>
  );
}
