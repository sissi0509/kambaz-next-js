"use client";
import Link from "next/link";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../Courses/reducer";
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

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const dispatch = useDispatch();

  const emtpyCourse = {
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "reactjs.jpg",
    department: "D123",
    credits: 4,
    description: "New Description",
  };

  const [course, setCourse] = useState(emtpyCourse);

  const [showAll, setShowAll] = useState(false);
  const [myCourses, setMyCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>([]);

  const isEnrolled = (courseId: string) =>
    myCourses.some((c) => c._id === courseId);

  const loadCourses = async () => {
    const [all, mine] = await Promise.all([
      client.fetchAllCourses(),
      client.findMyCourses(),
    ]);
    setAllCourses(all);
    setMyCourses(mine);
  };
  useEffect(() => {
    if (!currentUser) return;
    loadCourses();
  }, [currentUser]);

  const handleEnroll = async (courseId: string) => {
    await client.enrollInCourse(courseId);
    const mine = await client.findMyCourses();
    setMyCourses(mine);
  };

  const handleUnenroll = async (courseId: string) => {
    await client.unenrollFromCourse(courseId);
    const mine = await client.findMyCourses();
    setMyCourses(mine);
  };

  const visibleCourses = showAll ? allCourses : myCourses;

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
    await loadCourses();
    setCourse(emtpyCourse);
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
    await loadCourses();
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
    await loadCourses();
    setCourse(emtpyCourse);
  };

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
                        {isEnrolled(c._id) ? (
                          <Button
                            className="btn btn-sm btn-danger mt-1 me-1"
                            onClick={(e) => {
                              e.preventDefault();
                              handleUnenroll(c._id);
                            }}
                          >
                            {"Unenroll"}
                          </Button>
                        ) : (
                          <Button
                            className="btn btn-sm btn-success mt-1 me-1"
                            onClick={(e) => {
                              e.preventDefault();
                              handleEnroll(c._id);
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
