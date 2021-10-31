import {React,useContext} from 'react'
import {ShopContext} from './Context'
import axios from 'axios'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import CancelIcon from '@mui/icons-material/Cancel';

function History() {
  const [cart,setCart,user,setUser,shop,setShop,itemID,setItemID,itemData,setItemData,total,setTotal,ratings,setRatings] = useContext(ShopContext)


  const removeItem = (id) =>{
      axios.post('/api/delete-payment',{username:user.username,id}).then(user=>setUser(user))

  }
    return (
      
      <div className="cart_container" style={{display:"flex",alignItems:'center',flexFlow:"column"}}> 
      <div className="cart_header">
         <h1 style={{textAlign:"center",color:"black",display:"flex",alignItems:"center"}}>History</h1> 
      </div>         
          <List className="cart_container_items" sx={{margin: "0 auto" }}>
       {user.history && user.history.length > 0 ? user.history.map((item) => {
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <CancelIcon onClick={()=> removeItem(item.id)} className="remove_cart_item"/>
            }
            disablePadding
          >
            <ListItemButton>
              <span  className="item_text">{`${item.description} - ${item.amount.toFixed(2)}$.`}</span>
            </ListItemButton>
          </ListItem>
        );
      }):<ListItem><span  className="item_text">No Results</span></ListItem>}
    </List>
      </div>
      
    )
}


export default History;