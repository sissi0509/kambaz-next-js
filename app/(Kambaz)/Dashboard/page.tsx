import Link from "next/link";
import * as db from "../Database";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Button,
} from "react-bootstrap";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
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
                    <Button> Go </Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}

          {/* <Col className="wd-dashboard-course">
            <Card>
              <Link href="/Courses/1234" className="wd-dashboard-course-link">
                <CardImg
                  variant="top"
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Full Stack software developer
                  </CardText>
                </CardBody>

                <Button> Go </Button>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
              <Link href="/Courses/5001" className="wd-dashboard-course-link">
                <CardImg
                  variant="top"
                  src="/images/5001.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5001 Foundation of Computer Science
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Beginner to computer science
                  </CardText>
                </CardBody>

                <Button> Go </Button>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
              <Link href="/Courses/5002" className="wd-dashboard-course-link">
                <CardImg
                  variant="top"
                  src="/images/5002.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5002 Discrete Structure
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Beginner to Discrete Structure
                  </CardText>
                </CardBody>

                <Button> Go </Button>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
              <Link href="/Courses/5002" className="wd-dashboard-course-link">
                <CardImg
                  variant="top"
                  src="/images/5002.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5002 Discrete Structure
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Beginner to Discrete Structure
                  </CardText>
                </CardBody>

                <Button> Go </Button>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
              <Link href="/Courses/5004" className="wd-dashboard-course-link">
                <CardImg
                  variant="top"
                  src="/images/5004.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5004 Object Oriented Design
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Beginner to Object Oriented Design
                  </CardText>
                </CardBody>

                <Button> Go </Button>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
              <Link href="/Courses/5008" className="wd-dashboard-course-link">
                <CardImg
                  variant="top"
                  src="/images/5008.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5008 Data Structure
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Beginner to Data Structure
                  </CardText>
                </CardBody>

                <Button> Go </Button>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
              <Link href="/Courses/5800" className="wd-dashboard-course-link">
                <CardImg
                  variant="top"
                  src="/images/5800.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS800 Algorithm
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Beginner to Algorithm
                  </CardText>
                </CardBody>

                <Button> Go </Button>
              </Link>
            </Card>
          </Col> */}
        </Row>
      </div>
    </div>
  );
}
