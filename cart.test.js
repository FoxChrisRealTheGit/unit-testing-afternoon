const cars = require('./data/cars.js')
const cart = require('./cart')
describe('cart property', () => {
    test('cart is empty', () => {
        expect(cart.cart).toBe([])
        expect(cart.cart.length).toBe(0)
    })
    test('total prop', () => {
        expect(cart.total).toBe(0)
    })
})

describe('cart methods', () => {
    afterEach(function () {

    })
    test('addtoCart', () => {
        expect(addToCart()).toBe()
    })
    test('addToCartAgain', () => {

    })
    test('remove from cart', () => {
        expect()
    })
    test('remove from cart', () => {
        expect(cart.total)

    })
    test('checkout', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])

        cart.checkout()
        expect(cart.cart.length).toEqual(0)
        expect(cart.total).toEqual(0)
    })


})