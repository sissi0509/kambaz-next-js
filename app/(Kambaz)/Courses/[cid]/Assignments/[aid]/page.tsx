"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button, Col, Form, Row } from "react-bootstrap";
import { assignments } from "../.../../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find((a) => a._id === aid);
  return (
    <Form id="wd-assignments-editor" className="p-3">
      <Form.Label className="fs-5" htmlFor="wd-name">
        Assignment Name
      </Form.Label>
      <Form.Control
        id="wd-name"
        className="mb-3 rounded-0"
        defaultValue={assignment?.title}
      />

      <Form.Control
        as="textarea"
        rows={5}
        defaultValue={assignment?.description ?? ""}
        placeholder="Enter description here"
      />

      <Row className="mb-3">
        <Form.Label htmlFor="wd-points" column sm="4" className="text-end">
          Points
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            id="wd-points"
            type="number"
            className="rounded-0"
            defaultValue={assignment?.points ?? 100}
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
                defaultValue={assignment?.dueDate}
              />
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
                    defaultValue={assignment?.availableDate}
                  />
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
                    defaultValue={assignment?.unitDate}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <hr className="" />
      <div className="d-flex justify-content-end">
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button className="me-2" variant="secondary" size="lg" id="wd-save">
            Cancel
          </Button>
        </Link>
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button className="me-2 " variant="danger" size="lg" id="wd-cancel">
            Save
          </Button>
        </Link>
      </div>
    </Form>
  );
}
