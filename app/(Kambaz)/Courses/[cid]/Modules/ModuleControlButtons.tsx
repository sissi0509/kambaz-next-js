import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { IoMdAdd } from "react-icons/io";

export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoMdAdd className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
