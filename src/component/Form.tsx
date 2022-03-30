import { Form, Button } from "react-bootstrap";
import { fromStateType } from "../type";
type propsType = {
  fromState: fromStateType;
  setFromSate: Function;
  addClickEventHandler: () => void;
};

function FormControl({
  fromState,
  setFromSate,
  addClickEventHandler,
}: propsType) {
  return (
    <div>
      <Form>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={fromState?.userName}
                  onChange={(e) => {
                    setFromSate((prv: any) => {
                      return { ...prv, userName: e.target.value };
                    });
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={fromState.userEmail}
                  onChange={(e) => {
                    setFromSate((prv: any) => {
                      return { ...prv, userEmail: e.target.value };
                    });
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Age"
                  value={fromState.age}
                  onChange={(e) => {
                    setFromSate((prv: any) => {
                      return { ...prv, age: e.target.value };
                    });
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-3 d-flex align-items-center">
              <Button
                type="button"
                className="mt-3"
                onClick={() => {
                  addClickEventHandler();
                }}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default FormControl;
