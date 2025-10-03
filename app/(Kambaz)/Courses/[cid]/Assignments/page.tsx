import Link from "next/link";
import AssignmentControl from "./AssignmentControl";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButton from "./AssignmentControlButton";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="mb-5">
        <AssignmentControl />
      </div>

      <ListGroup className="rounded-0 fs-5">
        <ListGroupItem className="wd-assignments-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <span>ASSIGNMENTS</span>
          <AssignmentControlButton />
        </ListGroupItem>

        <ListGroup id="wd-assignment-list" className="rounded-0">
          <ListGroupItem className="wd-assignment-list-item ">
            <Link
              href="/Courses/1234/Assignments/1"
              className="wd-assignment-link text-dark text-decoration-none"
            >
              A1 - ENV + HTML
            </Link>
            <div className="d-flex justify-content-between">
              <span className="fs-6">
                Multiple Modules | <strong>Not available until</strong> May 6 at
                12:00am |<strong> Due</strong> May 13 at 11:59pm | 100 pts
              </span>
              <LessonControlButtons />
            </div>
          </ListGroupItem>

          <ListGroupItem className="wd-assignment-list-item">
            <Link
              href="/Courses/1234/Assignments/2"
              className="wd-assignment-link text-dark text-decoration-none"
            >
              A2 - CSS + BOOTSTRAP
            </Link>
            <div className="d-flex justify-content-between">
              <span className="fs-6">
                Multiple Modules | <strong>Not available until</strong> May 13
                at 12:00am |<strong> Due</strong> May 20 at 11:59pm | 100 pts
              </span>
              <LessonControlButtons />
            </div>
          </ListGroupItem>

          <ListGroupItem className="wd-assignment-list-item">
            <Link
              href="/Courses/1234/Assignments/3"
              className="wd-assignment-link text-dark text-decoration-none"
            >
              A3 - JAVASCRIPT + REACT
            </Link>
            <div className="d-flex justify-content-between">
              <span className="fs-6">
                Multiple Modules | <strong>Not available until</strong> May 20
                at 12:00am |<strong> Due</strong> May 27 at 11:59pm | 100 pts
              </span>
              <LessonControlButtons />
            </div>
          </ListGroupItem>
        </ListGroup>
      </ListGroup>
    </div>
  );
}
