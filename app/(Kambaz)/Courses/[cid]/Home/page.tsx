"use client";
import Modules from "../Modules/page";
import CourseStatus from "./Status";
import { redirect, useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Home() {
  const { cid } = useParams();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector(
    (state: any) => state.enrollmentsReducer.enrollments
  );

  const isEnrolled = enrollments.some(
    (e: any) => e.user === currentUser?._id && e.course === cid
  );

  useEffect(() => {
    if (!currentUser) {
      redirect("/Account/Signin");
      return;
    }

    if (!isEnrolled) {
      redirect("/Dashboard");
      return;
    }
  }, [currentUser, isEnrolled, cid]);

  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="d-none ms-5  d-xl-block">
        <CourseStatus />
      </div>
    </div>
  );
}
