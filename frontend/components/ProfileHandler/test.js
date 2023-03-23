const { render, screen } = require("@testing-library/react");
import { UserContextWrapper } from "@/store/userContext";
import ProfileHandler from "./index";

jest.mock("next/navigation", () => {
  return {
    useRouter: () => {
      return {
        push: jest.fn,
      };
    },
  };
});

describe("ProfileHandler", () => {
  it("should render successfuly", () => {
    render(
        <UserContextWrapper>
            <ProfileHandler />
        </UserContextWrapper>
    );
    let element = screen.getByTestId("profileHandler");
    expect(element).toBeInTheDocument();
  });

});
