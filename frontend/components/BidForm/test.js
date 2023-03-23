const { render, screen } = require("@testing-library/react");
import { UserContextWrapper } from "@/store/userContext";
import BidForm from "./index";
import userEvent from "@testing-library/user-event";

describe("BidForm", () => {
  it("should render successfuly", () => {
    render(
    <UserContextWrapper>
    <BidForm />
    </UserContextWrapper>
    );
    let element = screen.getByTestId("bidForm");
    expect(element).toBeInTheDocument();
  });

});
