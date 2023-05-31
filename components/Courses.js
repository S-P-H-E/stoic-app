import { BiSearch } from "react-icons/bi";
import { MdOutlineFilterList } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Courses() {
  const router = useRouter();
  const { courseId } = router.query;

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("newest"); // Added state for filter option

  const courses = [
    {
        id: 1,
        title: "How to create your brand",
        description: "Learn exactly how to create your social media brand/account. ",
        thumbnail: "/images/account.png",
      },
      {
        id: 2,
        title: "Setting up your affiliate link",
        description: "We will be going over how to setup your affiliate link and start getting paid",
        thumbnail: "/images/affiliate.png",
      },
      {
        id: 3,
        title: "How to edit your short form content",
        description: "Learn how to edit your short form content effectively.",
        thumbnail: "/images/edit.png",
      },
      {
        id: 4,
        title: "How to structure a viral video",
        description: "Discover the key elements for structuring a viral video.",
        thumbnail: "/images/structure.png",
      },
      {
        id: 5,
        title: "The metadata for uploading your video",
        description: "Learn about the important metadata to include when uploading your video.",
        thumbnail: "/images/metadata.png",
      },
      {
        id: 6,
        title: "What to expect in your short form journey",
        description: "Get insights into what to expect during your short form content creation journey.",
        thumbnail: "/images/expect.png",
      },
  ];

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterOptionChange = (event) => {
    setFilterOption(event.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Apply sorting based on filter option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (filterOption === "newest") {
      return b.id - a.id;
    } else if (filterOption === "oldest") {
      return a.id - b.id;
    } else {
      return a.id - b.id;
    }
  });

  return (
    <div className="flex flex-col h-screen p-10">
      <div className="flex gap-2">
        <div className="bg-[#1C1C1C] flex justify-center items-center h-fit w-full p-3 rounded-xl">
          <BiSearch />
          <input
            className="w-full bg-transparent mx-2 outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="bg-[#1C1C1C] flex justify-center items-center h-full p-3 rounded-xl">
          <div className="relative">
            <MdOutlineFilterList size={20} />
            <select
              className="absolute inset-0 opacity-0 cursor-pointer"
              value={filterOption}
              onChange={handleFilterOptionChange}
            >
              <option value="newest">Sort by Newest</option>
              <option value="oldest">Sort by Oldest</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        {selectedCourse || (
          <div className="my-10 flex flex-wrap gap-5">
            {sortedCourses.length > 0 ? (
              sortedCourses.map((course) => (
                <div className="bg-[#1C1C1C] w-[280px] p-4 rounded-2xl transition-all hover:scale-110">
                  <Link
                    key={course.id}
                    href={`/course?courseId=${course.id}&title=${encodeURIComponent(
                      course.title
                    )}&description=${encodeURIComponent(course.description)}`}
                    className="w-fit bg-red-200"
                  >
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      width={300}
                      height={100}
                      className="rounded-xl"
                    />
                    <h3 className="text-3xl font-medium py-2">{course.title}</h3>
                    <p className="text-sm">{course.description}</p>
                  </Link>
                </div>
              ))
            ) : (
              <div className="bg-[#1C1C1C] p-4 rounded-xl flex justify-center items-center">
                No results for your search.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
