const { render, screen } = require("@testing-library/react");
import { UserContextWrapper } from "@/store/userContext";
import { AuctionCard }from "./index";

jest.mock("next/navigation", () => {
    return {
      useRouter: () => {
        return {
          push: jest.fn,
        };
      },
    };
  }); 
  
describe("AuctionCard", () => {
  it("should render successfuly", () => {
    const data={
        lastBid:{
            amount:2,
            from:"Merto"
        },
        name:"Lorem Ipsum",
        id:"321321",
        img:""
    } 
    render(
        <UserContextWrapper>
            <AuctionCard data={data}/>
        </UserContextWrapper>
    );
    let element = screen.getByTestId("auctionCard");
    expect(element).toBeInTheDocument();
  });

});
