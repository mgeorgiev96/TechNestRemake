import {React,useContext} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {ShopContext} from './Context'
import axios from 'axios'
import moment from 'moment'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button'

function Cart() {
  const [cart,setCart,user,setUser,shop,setShop,itemID,setItemID,itemData,setItemData,total,setTotal,ratings,setRatings] = useContext(ShopContext)

    const handleToken = (token)=>{
    axios.post('/api/payment',{
      username: user.username,
      email: token.email,
      price: total,
      token: token.id,
      description: `Transaction made on ${moment(Date.now()).format('LLLL')}.`
    }).then(res=>{
      setUser(res.data)
      setCart([])
      setTotal(0)
    })

  }

  const removeCartItem = (price,id) =>{
    let temp = cart.filter(i=>i.id!==id)
    setCart(temp)
    setTotal(total - price)

  }
    return (
      
      <div className="cart_container" style={{display:"flex",alignItems:'center',flexFlow:"column"}}> 
      <div className="cart_header">
        <Button variant="contained" className="checkout_button" >
          Checkout
          <StripeCheckout className="stripe_button"
                    token={handleToken}
                    stripeKey="pk_test_51GxXTwJWnlXzpGEmHhKz3nGdCrzRjY8QE4fuYMo6CNYAuJXIQCDMy2LXCAVyTbME9zrYK60HxAjBEaE9ulvYSRJ700jdk4z5x2"
                    billingAddress
                    shippingAddress
                    description={`Technest - ${total.toFixed(2)}$`}
                    image="https://stripe.com/img/documentation/checkout/marketplace.png"
                    amount={total * 100}
                    currency='USD'
            />
        </Button>
         <h1 style={{textAlign:"center",color:"black",display:"flex",alignItems:"center"}}>{total.toFixed(2)}$</h1> 
      </div>         
          <List className="cart_container_items" sx={{ width: '40%', margin: "0 auto" }}>
       {cart ? cart.map((item) => {
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <CancelIcon onClick={()=> removeCartItem(item.price,item.id)} className="remove_cart_item"/>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <div className="img_holder" style={{backgroundImage: `url(${item.images[0]})`}}></div>
              </ListItemAvatar>
              <span  className="item_text">{`${item.name} - ${item.price}$.`}</span>
            </ListItemButton>
          </ListItem>
        );
      }):""}
    </List>
      </div>
      
    )
}


export default Cart;
