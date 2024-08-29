import Navbar from "@/app/components/Navbar";
import Searchbar from "@/app/components/Searchbar";
import { creets } from "@/app/temp/data";
import { FullscreenCreet } from "@/app/components/ui/creet";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";

export default function CreetPage({ params }: { params: { id: string } }) {
  const creetId = parseInt(params.id);
  const creet = creets.find((c) => c.id === creetId);

  if (!creet) {
    return <div>Creet not found</div>;
  }

  return (
    <div className="w-screen flex flex-row">
      <Navbar />
      <div className="flex-1">
        <header className="p-4 border-b border-gray-700">
          <Link
            href={`/#${creet.id.toString()}`}
            className="flex flex-row items-center gap-1 hover:text-dark-text-secondary"
          >
            <ArrowBigLeft size={26} />
            <h1 className="text-xl font-bold">Go back</h1>
          </Link>
        </header>
        <FullscreenCreet
          id={creet.id}
          displayName={creet.displayName}
          userName={creet.userName}
          text={creet.text}
          pfp={creet.pfp}
          info={creet.info}
        />
      </div>
      <Searchbar />
    </div>
  );
}
