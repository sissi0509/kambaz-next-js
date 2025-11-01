"use client";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "next/navigation";
import { useState } from "react";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import type { Module } from "./reducer";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState("");
  const modules = useSelector<RootState, Module[]>(
    (state) => state.modulesReducer.modules
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mb-5">
        <ModulesControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
          }}
        />
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .filter((module) => module.course === cid)
          .map((m, i) => (
            <ListGroupItem
              key={i}
              className="wd-module p-0 mb-5 fs-5 border-gray "
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between ">
                <div>
                  <BsGripVertical className="me-2" />
                  {!m.editing && m.name}
                  {m.editing && (
                    <FormControl
                      className="w-75 d-inline-block"
                      onChange={(e) =>
                        dispatch(updateModule({ ...m, name: e.target.value }))
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...m, editing: false }));
                        }
                      }}
                      defaultValue={m.name}
                    />
                  )}
                </div>
                <ModuleControlButtons
                  moduleId={m._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
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
    </div>
  );
}
