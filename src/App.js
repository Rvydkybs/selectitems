import React, { useEffect, useState } from "react";
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
function App() {
  const [selectedItemList, setSelectedItemList] = useState([]);
  const [newItemList, setNewItemList] = useState(itemList);
  const [isItemSelect, setIsITemSelect] = useState(true);
  const [isItemDeleted, setIsITemDeleted] = useState(true);
  // useEffect(() => {
  //   setNewItemList(itemList);
  // }, []);

  useEffect(() => {
    <ItemList />;
    <SelectedItems />;
  }, [isItemSelect]);

  useEffect(() => {
    <ItemList />;
    <SelectedItems />;

    console.log("newItemList 2", newItemList, selectedItemList);
  }, [isItemDeleted]);

  const selectItem = (item) => {
    const index = newItemList.indexOf(item);

    console.log("index:", index);
    if (index >= -1) {
      //silme işlemi bir kez yaptıktan sonra tekrar deneyince çoklu siliyor-aynı indexe sahip birden fazla eleman mı var?-varsa neden elemanların indexleri aynı?
      console.log("first");
      newItemList.splice(index, 1);
      setNewItemList(newItemList);
    }
    setSelectedItemList([...selectedItemList, item]);
    setIsITemSelect(!isItemSelect);
  };
  const selectHandler = (newItemList) => {
    setNewItemList([]);
    setSelectedItemList([...selectedItemList, ...newItemList]);
  };
  const deleteItem = (item) => {
    let newDeletedItemList = selectedItemList;
    const index = selectedItemList.indexOf(item);
    if (index > -1) {
      selectedItemList.splice(index, 1);
      setSelectedItemList(selectedItemList);
    }
    setNewItemList([...newItemList, item]);
    setIsITemDeleted(!isItemDeleted);
  };
  const clearHandler = (selectedItemList) => {
    let indexCount;
    selectedItemList.map((item) => {
      newItemList.map((index) => {
        if (item === index) {
          indexCount = newItemList.indexOf(index);
          if (index > -1) {
            newItemList.splice(index, 1);
            setNewItemList(newItemList);
          }
        }
      });
    });
    setNewItemList([...newItemList, ...selectedItemList]);
    setSelectedItemList([]);
  };
  function ItemList() {
    console.log("newItemList", newItemList);
    return (
      <div className="itemListContainer">
        <h4 className="headers">Item List</h4>
        <div className="innerContainer">
          <div>
            {newItemList &&
              newItemList.map((item) => {
                return (
                  <div className="d-flex align-items-center itemList justify-content-between">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{
                          width: "45px",
                          height: "45px",
                          marginRight: 16,
                        }}
                        className="rounded-circle"
                      />
                      <p className="fw-bold mb-1">{item.name}</p>
                    </div>
                    <div className="col-2 ms-3">
                      <div>
                        <Button
                          onClick={() => selectItem(item)}
                          variant="outline-success"
                        >
                          ✓
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="button">
          <Button
            onClick={() => {
              selectHandler(newItemList);
            }}
          >
            Select All
          </Button>
        </div>
      </div>
    );
  }

  function SelectedItems() {
    console.log("SelectedItemList", selectedItemList);
    return (
      <div className="selectedItemsContainer">
        <h4 className="headers">Selected Items</h4>
        <div className="innerContainer">
          {selectedItemList &&
            selectedItemList.map((item) => {
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
                      <Button
                        onClick={() => deleteItem(item)}
                        variant="outline-danger"
                      >
                        ✕
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          <div className="button">
            <Button
              onClick={() => {
                clearHandler(selectedItemList);
              }}
            >
              Clear{" "}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ flexDirection: "column", flex: "1", columns: "2" }}>
      <ItemList />
      <SelectedItems />
    </div>
  );
}

export default App;
