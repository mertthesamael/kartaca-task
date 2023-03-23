const { render, screen } = require("@testing-library/react");
import MainButton from "./index";
import userEvent from "@testing-library/user-event";


describe("MainButton", () => {
  it("should render successfuly", () => {
      render(
          <MainButton />
    );
    let element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
});

 it("should change value of element onClick", async() => {
    const testing = (e)=> {
    return e.target.value = "Test"
    }
    render(
        <MainButton onClick={testing}/>
    )
    let element = screen.getByRole("button");
    await userEvent.click(element)
    expect(element).toHaveValue('Test')
 })
 
});

