const { render, screen } = require("@testing-library/react");
import { UserContextWrapper } from "@/store/userContext";
import Detail from "./index";

jest.mock("next/navigation", () => {
  return {
    useRouter: () => {
      return {
        push: jest.fn,
      };
    },
  };
}); 

describe("Detail", () => {
  it("should render successfuly", () => {
    render(
    <UserContextWrapper>
        <Detail />
    </UserContextWrapper>
    );
    let element = screen.getByTestId("detail");
    expect(element).toBeInTheDocument();
  });


});
