import { RiDashboard3Line } from "react-icons/ri";
import { FaBook } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { SiMailboxdotorg } from "react-icons/si";
import { AiOutlineExperiment } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
export default function KambazNavigation() {
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-lg-block bg-black z-2"
      style={{ width: 110 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        as={Link}
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        className="bg-black border-0 text-white text-center"
        target="_blank"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Account"
        className="bg-black border-0 text-white text-center"
        id="wd-account-link"
      >
        <FaRegUserCircle className="fs-1" />
        <br />
        Account
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Dashboard"
        className="bg-white border-0 text-danger text-center"
        id="wd-dashboard-link"
      >
        <RiDashboard3Line className="fs-1" />
        <br />
        Dashboard
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Dashboard"
        className="bg-black border-0 text-white text-center"
        id="wd-courses-link"
      >
        <FaBook className="fs-1 text-danger" />
        <br />
        Courses
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Calendar"
        className="bg-black border-0 text-white text-center"
        id="wd-calendar-link"
      >
        <FaCalendarAlt className="fs-1 text-danger" />
        <br />
        Calendar
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Inbox"
        className="bg-black border-0 text-white text-center"
        id="wd-inbox-link"
      >
        <SiMailboxdotorg className="fs-1 text-danger" />
        <br />
        Inbox
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Labs"
        className="bg-black border-0 text-white text-center"
        id="wd-labs-link"
      >
        <AiOutlineExperiment className="fs-1 text-danger" />
        <br />
        Labs
      </ListGroupItem>
    </ListGroup>
  );
}
