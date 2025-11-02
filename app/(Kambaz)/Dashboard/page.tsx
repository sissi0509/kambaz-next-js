"use client";
import Link from "next/link";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Button,
  FormControl,
} from "react-bootstrap";
import { useState } from "react";
import * as db from "../Database";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const courses = useSelector(
    (state: RootState) => state.coursesReducer.courses
  );

  const dispatch = useDispatch();
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "reactjs.jpg",
    department: "D123",
    credits: 4,
    description: "New Description",
  });

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  if (!currentUser) {
    return redirect("/Account/Signin");
    // return (
    //   <div id="wd-dashboard">
    //     <h1 id="wd-dashboard-title">Dashboard</h1>
    //     <hr />
    //     You’re not signed in.
    //     <Link href="/Account/Signin" className="danger">
    //       &nbsp;Sign in&nbsp;
    //     </Link>
    //     to view your courses.
    //   </div>
    // );
  }

  const { enrollments } = db;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => dispatch(addNewCourse(course))}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={() => dispatch(updateCourse(course))}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter((course) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              )
            )
            .map((course) => (
              <Col className="wd-dashboard-course" key={course._id}>
                <Card>
                  <Link
                    href={`/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardImg
                      variant="top"
                      src={`images/${course.image}`}
                      width="100%"
                      height={160}
                      alt=""
                    />
                    <CardBody>
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </CardText>
                      <div className="d-flex justify-content-between">
                        <Button> Go </Button>
                        <div>
                          <Button
                            className="btn btn-warning me-1"
                            onClick={(e) => {
                              e.preventDefault();
                              setCourse(course);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            className="btn btn-danger "
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(deleteCourse(course._id));
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}
