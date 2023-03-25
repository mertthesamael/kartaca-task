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
  var mockData = {
    lastBid:{
      amount:50,
      from:"Merto"
    },
    id:'VkpV2N69P3MXVaJnKAiw',
    openTime:'2022-06-13'
  }  
  it("should render successfuly", () => {
    render(
    <UserContextWrapper>
        <Detail mock data={mockData}/>
    </UserContextWrapper>
    );

    let element = screen.getByTestId("detail");
    expect(element).toBeInTheDocument();
  });


});
