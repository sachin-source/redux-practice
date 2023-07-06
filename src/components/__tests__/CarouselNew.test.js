import { cleanup, render, screen } from "@testing-library/react"
import CarouselContainer from "../CarouselNew"
import { Provider } from "react-redux"
import store from "../../store"

test('test', () => {
    expect(true).toBe(true)
})

test('should render carousel component', () => {
    render(
        <Provider store={store} >
            <CarouselContainer />
        </Provider>
    )
    // const testelement = screen.getByTestId('carousel')
})