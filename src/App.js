import React, { useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBBadge, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

import "./styles.css";
const itemList = [
  { id: 1, name: "Jhon Scot" },
  { id: 2, name: "Vannessa Rail" },
  { id: 3, name: "Raul Mill" },
  { id: 4, name: "Mike underwood" },
  { id: 5, name: "Ronald Flex" },
];

const markAll = (index) => {
  const newTodos = [...itemList];
  newTodos[index].isSelect = true;
};
function Items() {
  return (
    <MDBListGroup style={{ minWidth: "22rem" }} light>
      {itemList &&
        itemList.map((item) => {
          return (
            <MDBListGroupItem
              tag="a"
              href="#"
              action
              noBorders
              color="light"
              className="px-3 rounded-3 mb-2"
            >
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{item.name}</p>
                </div>
              </div>
            </MDBListGroupItem>
          );
        })}
    </MDBListGroup>
  );
}

function ItemList({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="itemListContainer">
      <h4 className="headers">Item List</h4>
      <div className="innerContainer">
        <div>
          {itemList &&
            itemList.map((item) => {
              return (
                <div className="d-flex align-items-center itemList">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{item.name}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="button">
        <Button onClick={() => {}}>Select All ✓</Button>
      </div>
    </div>
  );
}

function SelectedItems({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="selectedItemsContainer">
      <h4 className="headers">Selected Items</h4>
      <div className="innerContainer">
        {itemList &&
          itemList.map((item) => {
            return (
              <div className="d-flex align-items-center selectedItems justify-content-between">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px", marginRight: 16 }}
                    className="rounded-circle"
                  />
                  <p className="fw-bold mb-1">{item.name}</p>
                </div>
                <div className="col-2 ms-3">
                  <div>
                    <Button variant="outline-danger">✕</Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <div className="button">
          <Button onClick={() => {}}>Clear </Button>
        </div>
      </div>
    </div>
  );
}

function App() {
  useEffect((item) => {
    ItemList(itemList);
  }, []);

  return (
    <div style={{ flexDirection: "column", flex: "1", columns: "2" }}>
      <ItemList />
      <SelectedItems />
    </div>
  );
}

export default App;
