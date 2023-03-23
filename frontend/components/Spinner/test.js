const { render, screen } = require("@testing-library/react")
import Spinner from "./index"
describe('Spinner', () =>{
    it('should render successfuly', () => {
        render(<Spinner />)
        let element = screen.getByTestId('spinner')
        expect(element).toBeInTheDocument() 
    })
})