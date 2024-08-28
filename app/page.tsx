"use client";

import Feed from "@/app/components/Feed";
import Navbar from "@/app/components/Navbar";
import Searchbar from "@/app/components/Searchbar";

export default function Home() {
  return (
    <div className="w-screen flex flex-row">
      <Navbar />
      <Feed />
      <Searchbar />
    </div>
  );
}
