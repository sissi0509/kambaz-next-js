import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ id: string }> }>) {
  const { cid } = params;
  return (
    <div id="wd-courses">
      <h2>Courses {cid}</h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation cid={cid} />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
