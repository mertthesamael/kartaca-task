const { render, screen } = require("@testing-library/react");
import { UserContextWrapper } from "@/store/userContext";
import BidForm from "./index";
import userEvent from "@testing-library/user-event";
import { ItemContextWrapper } from "@/store/itemContext";

describe("BidForm", () => {

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
        <ItemContextWrapper>
        <BidForm item={mockData}/>
        </ItemContextWrapper>
      </UserContextWrapper>
    );
    let element = screen.getByTestId("bidForm");
    expect(element).toBeInTheDocument();
  });

});
