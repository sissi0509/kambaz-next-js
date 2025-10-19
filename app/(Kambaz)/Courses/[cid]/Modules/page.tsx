"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import * as db from "../../../Database";
import { useParams } from "next/navigation";

export default function Modules() {
  const { cid } = useParams();
  const courseModule = db.modules.filter((m) => m.course === cid);

  return (
    <div>
      <div className="mb-5">
        <ModulesControls />
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        {courseModule.map((m, i) => (
          <ListGroupItem
            key={i}
            className="wd-module p-0 mb-5 fs-5 border-gray "
          >
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between ">
              <div>
                <BsGripVertical className="me-2" />
                {m.name}
              </div>

              <ModuleControlButtons />
            </div>
            {m.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {m.lessons.map((lesson, j) => (
                  <ListGroupItem
                    key={j}
                    className="wd-lesson p-3 ps-1 d-flex justify-content-between"
                  >
                    <div>
                      <BsGripVertical className="me-2" />
                      {lesson.name}
                    </div>
                    <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* 
      //   <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray ">
      //     <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between ">
      //       <div>
      //         <BsGripVertical className="me-2" />

      //         <span>Week 1</span>
      //       </div>

      //       <ModuleControlButtons />
      //     </div>
      //     <ListGroup className="wd-lessons rounded-0">
      //       <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between">
      //         <div>
      //           <BsGripVertical className="me-2" />
      //           <span>LEARNING OBJECTIVES</span>
      //         </div>

      //         <LessonControlButtons />
      //       </ListGroupItem>
      //       <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between">
      //         <div>
      //           <BsGripVertical className="me-2" />

      //           <span>Introduction to the course</span>
      //         </div>
      //         <LessonControlButtons />
      //       </ListGroupItem>
      //       <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between">
      //         <div>
      //           <BsGripVertical className="me-2" />

      //           <span>Learn what is Web Development</span>
      //         </div>
      //         <LessonControlButtons />
      //       </ListGroupItem>
      //       <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between">
      //         <div>
      //           <BsGripVertical className="me-2" />

      //           <span>LESSON 1</span>
      //         </div>
      //         <LessonControlButtons />
      //       </ListGroupItem>
      //       <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between">
      //         <div>
      //           <BsGripVertical className="me-2" />

      //           <span>LESSON 2</span>
      //         </div>
      //         <LessonControlButtons />
      //       </ListGroupItem>
      //     </ListGroup>
      //   </ListGroupItem>
      //   <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      //     <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
      //       <div>
      //         <BsGripVertical className="me-2" />

      //         <span>Week 2</span>
      //       </div>
      //       <ModuleControlButtons />
      //     </div>
      //     <ListGroup className="wd-lessons rounded-0">
      //       <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between">
      //         <div>
      //           <BsGripVertical className="me-2" />

      //           <span>LEARNING OBJECTIVES</span>
      //         </div>
      //         <LessonControlButtons />
      //       </ListGroupItem>
      //       <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between">
      //         <div>
      //           <BsGripVertical className="me-2" />

      //           <span>LESSON 1</span>
      //         </div>
      //         <LessonControlButtons />
      //       </ListGroupItem>
      //       <ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between">
      //         <div>
      //           <BsGripVertical className="me-2" />

      //           <span>LESSON 2</span>
      //         </div>
      //         <LessonControlButtons />
      //       </ListGroupItem>
      //     </ListGroup>
      //   </ListGroupItem>
      // </ListGroup> */}
    </div>
  );
}
