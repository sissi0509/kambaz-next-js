import { Button, Col, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Form id="wd-assignments-editor" className="p-3">
      <Form.Label className="fs-5" htmlFor="wd-name">
        Assignment Name
      </Form.Label>
      <Form.Control
        id="wd-name"
        className="mb-3 rounded-0"
        defaultValue="A1 - ENV + HTML"
      />

      <div
        contentEditable="true"
        className="border rounded-0 mb-3 p-3 bg-white form-control"
      >
        The assignment is <span className="text-danger">available online</span>.
        <br />
        <br />
        Submit a link to the landing page of your Web application running on
        Netlify.
        <br />
        <br />
        The landing page should include:
        <ul>
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>Link to the Kanbas application</li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        The <strong>Kanbas</strong> application should include a link to
        navigate back.
      </div>

      <Row className="mb-3">
        <Form.Label htmlFor="wd-points" column sm="4" className="text-end">
          Points
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            id="wd-points"
            type="number"
            className="rounded-0"
            defaultValue={100}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label htmlFor="wd-group" column sm="4" className="text-end">
          Assignment Group
        </Form.Label>

        <Col sm={8}>
          <Form.Select id="wd-group" defaultValue="ASSI" className="rounded-0">
            <option value="ASSI">ASSIGNMENTS</option>
            <option value="QUIZ">QUIZZES</option>
            <option value="EXAM">EXAMS</option>
            <option value="PROJ">PROJECT</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label
          htmlFor="wd-display-grade-as"
          column
          sm={4}
          className="text-end"
        >
          Display Grade as
        </Form.Label>

        <Col sm={8}>
          <Form.Select
            id="wd-display-grade-as"
            defaultValue="PERC"
            className="rounded-0"
          >
            <option value="PERC">Percentage</option>
            <option value="POINT">Points</option>
            <option value="LET">Letter Grade</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label
          column
          htmlFor="wd-submission-type"
          sm={4}
          className="text-end"
        >
          Submission Type
        </Form.Label>
        <Col sm={8}>
          <div className="border border-light-subtle rounded-0 p-3">
            <Form.Select
              id="wd-submission-type"
              defaultValue="ONLINE"
              className="mb-3 rounded-0 "
            >
              <option value="ONLINE">Online</option>
              <option value="PAPER">On Paper</option>
            </Form.Select>
            <div>
              <div id="wd-submission-type" className="mb-3 fw-bold">
                Online Entry Options
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="submission"
                  id="wd-text-entry"
                />
                <label className="form-check-label" htmlFor="wd-text-entry">
                  Text Entry
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="submission"
                  id="wd-website-url"
                />
                <label className="form-check-label" htmlFor="wd-website-url">
                  Website URL
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="submission"
                  id="wd-media-recordings"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-media-recordings"
                >
                  Media Recordings
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="submission"
                  id="wd-student-annotation"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-student-annotation"
                >
                  Student Annotation
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="submission"
                  id="wd-file-upload"
                />
                <label className="form-check-label" htmlFor="wd-file-upload">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm={4} className="text-end">
          Assign
        </Col>
        <Col sm={8}>
          <div className="border border-light-subtle rounded-0 p-3">
            <Form.Label htmlFor="wd-assign-to" className="fw-bold">
              Assign to
            </Form.Label>

            <input
              id="wd-assign-to"
              className="form-control mb-3 rounded-0"
              defaultValue="Everyone"
            />

            <Form.Label className="fw-bold">Due</Form.Label>
            <div className="input-group mb-3">
              <Form.Control
                type="datetime-local"
                step="1"
                defaultValue="2024-05-16T23:59:00"
              />
              {/* <div className="input-group-text">
                <FaRegCalendarAlt className="text-secondary" />
              </div> */}
            </div>

            <Row>
              <Col sm={6}>
                <Form.Label htmlFor="wd-available-from" className="fw-bold">
                  Available from
                </Form.Label>
                <div className="input-group mb-3">
                  <input
                    className="form-control rounded-0"
                    type="datetime-local"
                    step="1"
                    id="wd-available-from"
                    defaultValue="2024-05-13T23:59:00"
                  />
                  {/* <div className="input-group-text">
                    <FaRegCalendarAlt className="text-secondary" />
                  </div> */}
                </div>
              </Col>
              <Col sm={6}>
                <Form.Label htmlFor="wd-available-until" className="fw-bold">
                  Until
                </Form.Label>
                <div className="input-group mb-3">
                  <input
                    className="form-control rounded-0"
                    type="datetime-local"
                    step="1"
                    id="wd-available-until"
                    defaultValue="2024-05-16T23:59:00"
                  />
                  {/* <div className="input-group-text">
                    <FaRegCalendarAlt className="text-secondary" />
                  </div> */}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <hr className="" />
      <div className="d-flex justify-content-end">
        <Button className="me-2" variant="secondary" size="lg" id="wd-save">
          Cancel
        </Button>

        <Button className="me-2 " variant="danger" size="lg" id="wd-cancel">
          Save
        </Button>
      </div>
    </Form>
  );
}
