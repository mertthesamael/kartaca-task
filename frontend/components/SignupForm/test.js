const { render, screen } = require("@testing-library/react")
import SignupForm from "./index"
import userEvent from '@testing-library/user-event'

jest.mock("next/navigation", () => {
    return{
        useRouter: ()=>{
            return{
                push:jest.fn
            }
        }
    }
})

describe('SignupForm', () =>{
    it('should render successfuly', () => {
        render(<SignupForm />)
        let element = screen.getByTestId('signupForm')
        expect(element).toBeInTheDocument() 
    })

    it('should update input values', async() => {

        render(<SignupForm />)
        const nameElement = screen.getByPlaceholderText(/Name/)
        const mailElement = screen.getByPlaceholderText(/E-mail/i)

        await userEvent.type(nameElement, "Lorem ipsum")
        await userEvent.type(mailElement, "Lorem ipsum")

        expect(nameElement).toHaveValue("Lorem ipsum")
        expect(mailElement).toHaveValue("Lorem ipsum")

    })
})