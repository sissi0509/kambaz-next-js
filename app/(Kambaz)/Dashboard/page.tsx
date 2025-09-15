import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/courses/reactjs.jpg" width={200} height={150} alt="" />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5001" className="wd-dashboard-course-link">
                        <Image src="/images/courses/5001.jpg" width={200} height={150} alt="" />
                        <div>
                            <h5> CS5001 Foundation of Computer Science </h5>
                            <p className="wd-dashboard-course-title">
                                beginer to computer science
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5002" className="wd-dashboard-course-link">
                        <Image src="/images/courses/5002.jpg" width={200} height={150} alt="" />
                        <div>
                            <h5> CS5002 Discrete Structure </h5>
                            <p className="wd-dashboard-course-title">
                                beginer to Discrete Structure
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5004" className="wd-dashboard-course-link">
                        <Image src="/images/courses/5004.jpg" width={200} height={150} alt="" />
                        <div>
                            <h5> CS5004 Object Oriented Design </h5>
                            <p className="wd-dashboard-course-title">
                                beginer to Object Oriented Design
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5008" className="wd-dashboard-course-link">
                        <Image src="/images/courses/5008.jpg" width={200} height={150} alt="" />
                        <div>
                            <h5> CS5008 Data Structure </h5>
                            <p className="wd-dashboard-course-title">
                                beginer to Data Structure
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5200" className="wd-dashboard-course-link">
                        <Image src="/images/courses/5200.jpg" width={200} height={150} alt="" />
                        <div>
                            <h5> CS5200 Database Management </h5>
                            <p className="wd-dashboard-course-title">
                                beginer to Database Management
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5800" className="wd-dashboard-course-link">
                        <Image src="/images/courses/5800.jpg" width={200} height={150} alt="" />
                        <div>
                            <h5> CS5800 Algorithm </h5>
                            <p className="wd-dashboard-course-title">
                                beginer to Algorithm
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>




            </div>
        </div >
    );
}