import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentControls() {
  return (
    <div
      id="wd-assignment-controls"
      className="text-nowrap d-flex flex-wrap justify-content-between mb-3"
    >
      <div
        id="wd-search-assignment"
        className="input-group"
        style={{ maxWidth: "250px" }}
      >
        <span className="input-group-text bg-white border-end-0">
          <FaSearch />
        </span>
        <input
          type="search"
          className="form-control border-start-0 from-slate-500"
          placeholder="Search..."
        />
      </div>

      <div className="d-flex float-end">
        <Button
          id="wd-add-assignment-group "
          className="me-2"
          variant="secondary"
          size="lg"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "2.5px" }}
          />
          Group
        </Button>
        <Button
          id="wd-add-assignment "
          className="me-2"
          variant="danger"
          size="lg"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "2.5px" }}
          />
          Assignment
        </Button>
      </div>
    </div>
  );
}
