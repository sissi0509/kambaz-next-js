"use client";
import { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export default function ArrayStateVariable() {
  const todos = useSelector((state: RootState) => state.todoReducer.todos);
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button className="btn btn-success" onClick={addElement}>
        Add Element
      </button>
      <ul className="list-group">
        {array.map((item, index) => (
          <li className="list-group-item" key={index}>
            <div className="d-flex justify-content-between">
              {item}
              <button
                className="btn btn-danger"
                onClick={() => deleteElement(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
