import Navbar from "@/app/components/Navbar";
import Searchbar from "@/app/components/Searchbar";
import { creets } from "@/app/temp/data";
import Creet from "@/app/components/ui/creet";
import Link from "next/link";

export default function CreetPage({ params }: { params: { id: string } }) {
  const creetId = parseInt(params.id);
  const creet = creets.find((c) => c.id === creetId);

  if (!creet) {
    return <div>Creet not found</div>;
  }

  return (
    <div className="w-screen flex flex-row">
      <Navbar />
      <div className="flex-1 p-4">
        <Link href={`/#${creet.id.toString()}`}>Go Back</Link>
        <Creet
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
