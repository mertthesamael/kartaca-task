const { render, screen } = require("@testing-library/react");
import { UserContextWrapper } from "@/store/userContext";
import BidForm from "./index";
import userEvent from "@testing-library/user-event";

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
        <BidForm mock item={mockData}/>
      </UserContextWrapper>
    );
    let element = screen.getByTestId("bidForm");
    expect(element).toBeInTheDocument();
  });

  it('should update input values', async() => {

    render(
    <UserContextWrapper>
      <BidForm mock item={mockData}/>
    </UserContextWrapper>)
    const bidInput = screen.getByPlaceholderText(/Your Bid/i)


    await userEvent.type(bidInput, "23")
    expect(bidInput).toHaveValue(23)

})
});
