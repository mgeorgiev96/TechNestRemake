import {React,useContext} from 'react'
import {ShopContext} from './Context'
import axios from 'axios'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CancelIcon from '@mui/icons-material/Cancel';

function Favourites() {
  const [cart,setCart,user,setUser,shop,setShop,itemID,setItemID,itemData,setItemData,total,setTotal,ratings,setRatings] = useContext(ShopContext)


  const removeFavourite = (id) =>{
      axios.post("/api/remove-favourite",{user:user.username,id}).then(user=>setUser(user))

  }
    return (
      
      <div className="cart_container" style={{display:"flex",alignItems:'center',flexFlow:"column"}}> 
      <div className="cart_header">
         <h1 style={{textAlign:"center",color:"black",display:"flex",alignItems:"center"}}>Favourites</h1> 
      </div>         
          <List className="cart_container_items" sx={{margin: "0 auto" }}>
       {user.favourites && user.favourites.length > 0 ? user.favourites.map((item) => {
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <CancelIcon onClick={()=> removeFavourite(item.id)} className="remove_cart_item"/>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <div className="img_holder" style={{backgroundImage: `url(${item.images})`}}></div>
              </ListItemAvatar>
              <span  className="item_text">{`${item.name} - ${item.price}$.`}</span>
            </ListItemButton>
          </ListItem>
        );
      }):<ListItem><span  className="item_text">No Results</span></ListItem>}
    </List>
      </div>
      
    )
}


export default Favourites;
