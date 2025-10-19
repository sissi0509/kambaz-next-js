"use client";
import Link from "next/link";
import AssignmentControl from "./AssignmentControl";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButton from "./AssignmentControlButton";
import { LuNotebookPen } from "react-icons/lu";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import * as db from "../../../Database";
import { useParams } from "next/navigation";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((a) => a.course === cid);
  const dateConvert = (isoString: string) => {
    const date = new Date(isoString);

    const options = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    return date
      .toLocaleString("en-US", options)
      .replace(",", " at")
      .replace("AM", "am")
      .replace("PM", "pm");
  };

  return (
    <div id="wd-assignments">
      <div className="mb-5">
        <AssignmentControl />
      </div>
      <ListGroup className="rounded-0 fs-5">
        <ListGroupItem className="wd-assignments-title p-3 ps-3 bg-secondary d-flex justify-content-between align-items-center">
          <div>
            <BsGripVertical className="me-2" />
            <GoTriangleDown className="me-1" />
            <b>ASSIGNMENTS</b>
          </div>

          <AssignmentControlButton />
        </ListGroupItem>

        {assignments.length > 0 && (
          <ListGroup id="wd-assignment-list" className="rounded-0">
            {assignments.map((a, i) => (
              <ListGroupItem
                key={i}
                className="wd-assignment-list-item d-flex align-items-center"
              >
                <BsGripVertical className="me-2" />
                <LuNotebookPen className="text-success" />
                <div className="ms-4 flex-fill">
                  <Link
                    href={`/Courses/${cid}/Assignments/${a._id}`}
                    className="wd-assignment-link text-dark text-decoration-none "
                  >
                    <b>{`${a.number} ${a.title}`}</b>
                  </Link>
                  <div className="d-flex justify-content-between">
                    <span className="fs-6 me-5">
                      <span className="text-danger">Multiple Modules </span>|
                      <strong> Not available until</strong>{" "}
                      {dateConvert(a.availableDate)} |<strong> Due</strong>{" "}
                      {dateConvert(a.dueDate)} | {a.points} pts
                    </span>
                    <LessonControlButtons />
                  </div>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </ListGroup>
    </div>
  );
}
