
import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import {MachineNameReduxForm} from "./Profile";
import { createMockStore } from "redux-test-utils";

test("react-testing-library works!", () => {
  const state = {};
  const store = createMockStore(state);
  const { container } = render(
    <Provider store={store}>
      <MachineNameReduxForm />
    </Provider>
  );
  expect(getByTestId(container, "machine_name")).toBeInTheDocument();
});

test("react-testing-library form onSubmit", () => {
  const state = {
    form: {
      machine_name: ""
    }
  };
  const store = createMockStore(state);
  const onSubmit = jest.fn();
  const { container, debug } = render(
    <Provider store={store}>
      <MachineNameReduxForm onSubmit={onSubmit} />
    </Provider>
  );
  const machineNameInput = getByTestId(container, "machine_name");
  
  const machine_name = "machine_name";
  
  fireEvent.change(machineNameInput, { target: { value: machine_name } });
    debug();

  const submitButton = getByTestId(container, "submitButton");
  fireEvent.click(submitButton);
  
  expect(onSubmit).toHaveBeenCalledTimes(1);
 // expect(onSubmit).toHaveBeenNthCalledWith(1, machine_name);
}); 
