"use client";
import Link from "next/link";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourses,
} from "../Courses/reducer";
import { enroll, unenroll } from "./reducer";
import * as client from "../Courses/client";
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
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const courses = useSelector(
    (state: RootState) => state.coursesReducer.courses
  );

  const enrollments = useSelector(
    (state: RootState) => state.enrollmentsReducer.enrollments
  );

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
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

  const [showAll, setShowAll] = useState(false);

  const isEnrolled = (courseID: string) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser?._id && enrollment.course === courseID
    );

  // const visibleCourses = showAll
  //   ? courses
  //   : courses.filter((c: any) => isEnrolled(c._id));

  const visibleCourses = courses;

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };
  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  const isFaculty = currentUser?.role === "FACULTY";
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
  };

  const fetchCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  if (!currentUser) {
    return redirect("/Account/Signin");
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button
          className="btn btn-primary float-end me-2"
          onClick={() => setShowAll(!showAll)}
          id="wd-enrollment-course-click"
        >
          {showAll ? "Show My Courses" : "Enrollments"}
        </button>
      </h1>
      <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end me-2"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse}
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
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {visibleCourses.map((c) => (
            <Col className="wd-dashboard-course" key={c._id}>
              <Card>
                <Link
                  href={
                    isEnrolled(c._id) ? `/Courses/${c._id}/Home` : "/Dashboard"
                  }
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    variant="top"
                    src={`images/${c.image}`}
                    width="100%"
                    height={160}
                    alt=""
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {c.description}
                    </CardText>
                    <div className="d-flex justify-content-between">
                      {!showAll && <Button className="btn-sm"> Go </Button>}
                      {isFaculty && !showAll && (
                        <div>
                          <Button
                            className="btn btn-sm btn-warning me-1"
                            onClick={(e) => {
                              e.preventDefault();
                              setCourse(c);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            className="btn btn-sm btn-danger "
                            onClick={(event) => {
                              event.preventDefault();
                              onDeleteCourse(c._id);
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      )}
                    </div>
                    {showAll && (
                      <div>
                        {isEnrolled(course._id) ? (
                          <Button
                            className="btn btn-sm btn-danger mt-1 me-1"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(
                                unenroll({
                                  user: currentUser!._id,
                                  course: course._id,
                                })
                              );
                            }}
                          >
                            {"Unenroll"}
                          </Button>
                        ) : (
                          <Button
                            className="btn btn-sm btn-success mt-1 me-1"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(
                                enroll({
                                  user: currentUser!._id,
                                  course: course._id,
                                })
                              );
                            }}
                          >
                            {"Enroll"}
                          </Button>
                        )}
                      </div>
                    )}
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
