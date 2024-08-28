import Image from "next/image";
import CreetInfoBar from "@/app/components/ui/creetInfoBar";

export default function Creet({
  displayName,
  userName,
  text,
  pfp,
  info,
}: {
  displayName: string;
  userName: string;
  text: string;
  pfp: string;
  info: Array<number>;
}) {
  return (
    <div className="flex space-x-3 border border-gray-700 rounded-2xl p-4">
      <Image
        src={pfp}
        alt="Profile"
        className="w-12 h-12 rounded-full"
        width={256}
        height={256}
      />
      <div>
        <p className="font-bold">
          {displayName}
          <span className="text-gray-500 font-normal ml-2">
            @{userName} · 1h
          </span>
        </p>
        <p className="mt-1">{text}</p>
        <CreetInfoBar info={info} />
      </div>
    </div>
  );
}
