import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Courses from "@/components/Courses";

export default function Home() {
  const [activeSection, setActiveSection] = useState("courses");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Head>
        <title>S T O I C | Courses</title>
        <meta name="description" content="Stoic Education Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col-reverse md:flex-row h-screen">
        <Navbar activeSection={activeSection} handleSectionClick={handleSectionClick} />

        {/* Home */}
        <div className="w-full">
          {activeSection === "courses" && <Courses />}
        </div>
      </div>
    </>
  );
}
