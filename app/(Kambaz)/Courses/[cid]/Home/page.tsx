import Modules from "../Modules/page";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="d-none ms-3 d-xl-block">
        <CourseStatus />
      </div>
    </div>
  );
}
