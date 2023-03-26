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
  const data={
      lastBid:{
          amount:2,
          from:"Merto"
      },
      name:"Lorem Ipsum",
      id:"321321",
      img:""
  } 
  it("should render successfuly", () => {
    render(
        <UserContextWrapper>
            <AuctionCard data={data}/>
        </UserContextWrapper>
    );
    let element = screen.getByTestId("auctionCard");
    expect(element).toBeInTheDocument();
  });

  it("should render mock data info", () => {

    render(
      <UserContextWrapper>
        <AuctionCard data={data}/>
      </UserContextWrapper>
    )

    let element = screen.getByTestId('itemName')
    expect(element).toHaveTextContent(data.name)

  })


});
