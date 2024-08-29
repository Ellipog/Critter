import Image from "next/image";
import CreetInfoBar from "@/app/components/ui/creetInfoBar";
import Link from "next/link";

export function Creet({
  id,
  displayName,
  userName,
  text,
  pfp,
  info,
}: {
  id: number;
  displayName: string;
  userName: string;
  text: string;
  pfp: string;
  info: Array<number>;
}) {
  return (
    <div className="border border-gray-700 rounded-2xl p-4" id={id.toString()}>
      <Link
        href={`/creet/${id}`}
        className="flex flex-row space-x-3 cursor-default"
      >
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
      </Link>
    </div>
  );
}

export function FullscreenCreet({
  id,
  displayName,
  userName,
  text,
  pfp,
  info,
}: {
  id: number;
  displayName: string;
  userName: string;
  text: string;
  pfp: string;
  info: Array<number>;
}) {
  return (
    <div className="p-4 border-gray-700 border-b" id={id.toString()}>
      <Link
        href={`/creet/${id}`}
        className="flex flex-row space-x-3 cursor-default"
      >
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
      </Link>
    </div>
  );
}
