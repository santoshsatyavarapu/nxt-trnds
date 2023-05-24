import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const items = cartList.length
      let totalPrice = 0

      for (let i = 0; i < cartList.length; i += 1) {
        totalPrice += cartList[i].quantity * cartList[i].price
      }

      return (
        <div className="bill-container">
          <h1 className="order-total">
            Order Total: <span className="total-price">Rs {totalPrice}/-</span>
          </h1>
          <p className="items-in-cart">{items} Items in cart</p>
          <button type="button" className="check-out-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
