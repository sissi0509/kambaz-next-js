import Link from "next/link";
import AssignmentControl from "./AssignmentControl";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButton from "./AssignmentControlButton";
import { LuNotebookPen } from "react-icons/lu";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";

export default function Assignments() {
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

        <ListGroup id="wd-assignment-list" className="rounded-0">
          <ListGroupItem className="wd-assignment-list-item d-flex align-items-center">
            <BsGripVertical className="me-2" />
            <LuNotebookPen className="text-success" />
            <div className="ms-4 flex-fill">
              <Link
                href="/Courses/1234/Assignments/1"
                className="wd-assignment-link text-dark text-decoration-none "
              >
                <b>A1</b>
              </Link>
              <div className="d-flex justify-content-between">
                <span className="fs-6 me-5">
                  <span className="text-danger">Multiple Modules </span>|
                  <strong> Not available until</strong> May 6 at 12:00am |
                  <strong> Due</strong> May 13 at 11:59pm | 100 pts
                </span>
                <LessonControlButtons />
              </div>
            </div>
          </ListGroupItem>

          <ListGroupItem className="wd-assignment-list-item d-flex align-items-center">
            <BsGripVertical className="me-2" />
            <LuNotebookPen className="text-success" />
            <div className="ms-4 flex-fill">
              <Link
                href="/Courses/1234/Assignments/2"
                className="wd-assignment-link text-dark text-decoration-none"
              >
                <b>A2</b>
              </Link>
              <div className="d-flex justify-content-between">
                <span className="fs-6 me-5">
                  <span className="text-danger">Multiple Modules </span> |
                  <strong> Not available until</strong> May 13 at 12:00am |
                  <strong> Due</strong> May 20 at 11:59pm | 100 pts
                </span>
                <LessonControlButtons />
              </div>
            </div>
          </ListGroupItem>

          <ListGroupItem className="wd-assignment-list-item d-flex align-items-center">
            <BsGripVertical className="me-2" />
            <LuNotebookPen className="text-success" />
            <div className="ms-4 flex-fill">
              <Link
                href="/Courses/1234/Assignments/3"
                className="wd-assignment-link text-dark text-decoration-none"
              >
                <b>A3</b>
              </Link>
              <div className="d-flex justify-content-between">
                <span className="fs-6 me-5">
                  <span className="text-danger">Multiple Modules </span> |
                  <strong> Not available until</strong> May 20 at 12:00am |
                  <strong> Due</strong> May 27 at 11:59pm | 100 pts
                </span>
                <LessonControlButtons />
              </div>
            </div>
          </ListGroupItem>
        </ListGroup>
      </ListGroup>
    </div>
  );
}
