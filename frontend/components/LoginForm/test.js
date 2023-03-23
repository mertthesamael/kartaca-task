const { render, screen } = require("@testing-library/react");
import LoginForm from "./index";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => {
  return {
    useRouter: () => {
      return {
        push: jest.fn,
      };
    },
  };
});

describe("LoginForm", () => {
  it("should render successfuly", () => {
    render(<LoginForm />);
    let element = screen.getByTestId("loginForm");
    expect(element).toBeInTheDocument();
  });

it("should update input values", async () => {
    render(<LoginForm />);
    const mailElement = screen.getByPlaceholderText(/Email/);
    await userEvent.type(mailElement, "Lorem ipsum");
    expect(mailElement).toHaveValue("Lorem ipsum");
  });
});
