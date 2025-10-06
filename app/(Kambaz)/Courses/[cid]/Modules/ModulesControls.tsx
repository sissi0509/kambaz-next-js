import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { IoBan } from "react-icons/io5";

import GreenCheckmark from "./GreenCheckmark";
export default function ModulesControls() {
  return (
    <div
      id="wd-modules-controls"
      className="text-nowrap d-flex flex-wrap justify-content-end mb-3"
    >
      <Button
        id="wd-module-collapse-all"
        className=" me-2"
        variant="secondary"
        size="lg"
      >
        Collapse All
      </Button>
      <Button
        id="wd-module-view-Progress"
        className="me-2"
        variant="secondary"
        size="lg"
      >
        View Progress
      </Button>
      <Dropdown className="me-2">
        <DropdownToggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </DropdownItem>
          <DropdownItem id="wd-unpublish-all-modules-and-items">
            <IoBan className="text-secondary me-2 fs-5" />
            Unpublish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-unpublish-modules-only">
            <IoBan className="text-secondary me-2 fs-5" />
            Unpublish modules only
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Button
        variant="danger"
        size="lg"
        className="me-1 d-flex align-items-center"
        id="wd-add-module-btn"
      >
        <FaPlus className="me-2" />
        Module
      </Button>
    </div>
  );
}
