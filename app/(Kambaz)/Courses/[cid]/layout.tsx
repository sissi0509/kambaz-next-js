"use client";
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);

  const course = courses.find((c: any) => c._id === cid);
  const [showNav, setShowNav] = useState(false);

  return (
    <div id="wd-courses">
      <h2 className="text-danger ">
        {/* "d-none d-lg-block" */}
        <FaAlignJustify
          className="me-4 fs-4 mb-1 "
          onClick={() => setShowNav(!showNav)}
        />
        {course?.name}
        {/* <Breadcrumb course={course} /> */}
      </h2>

      <hr />
      <div className="d-flex">
        {showNav && (
          <div className="me-5">
            <CourseNavigation cid={cid} />
          </div>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
