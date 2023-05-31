import { useRouter } from "next/router";

export default function CoursePage() {
  const router = useRouter();
  const { courseId, title, description } = router.query;

  // Use the courseId and title to fetch the course details from your data source
  // For simplicity, I'm using static data here
  const course = {
    id: courseId,
    title: decodeURIComponent(title),
    description: decodeURIComponent(description),
    // Other course details
  };

  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="text-5xl mt-10">{course.title}</h1>
      <p>{course.description}</p>
      {/* Render other course details */}
    </div>
  );
}
