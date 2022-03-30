import React from "react";
import { Table, Button } from "react-bootstrap";
import { fromStateType } from "../type";
type propsType = {
  rowDto: fromStateType[];
  removeHandler: (index: number) => void;
};
function CustomTable({ rowDto, removeHandler }: propsType) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SL</th>
                <th>User Name</th>
                <th>Email Address</th>
                <th>Age</th>
                <th style={{ width: "50px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {rowDto.map((itm, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{itm.userName}</td>
                  <td>{itm.userEmail}</td>
                  <td>{itm.age}</td>
                  <td>
                    <Button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        removeHandler(index);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default CustomTable;
