import {React,useContext,useState} from 'react'
import {Link} from 'react-router-dom'
import {ShopContext} from './Context'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import axios from 'axios'
import GradientOpenWithIcon from './GradientIcon';
import User from './User'


function Navigation() {
    const [cart,setCart,user,setUser,shop,setShop,itemID,setItemID,itemData,setItemData,total,setTotal] = useContext(ShopContext)
    const [value, setValue] = useState(0);

    const handleChange = (newValue) => {
      setValue(newValue);
    };


    return (
        <div className='navbar_container'>
            <h2 style={{marginLeft:"15px"}}>Technest</h2>
                <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                    <Link onClick={()=>handleChange(0)} className="nav_link_tab" to="/api/shop"><Tab icon={<GradientOpenWithIcon icon={<StorefrontRoundedIcon sx={{ fill: "url(#linearColors)" }} />}/>} label="SHOP" /></Link>
                    <Link onClick={()=>handleChange(1)} className="nav_link_tab" to="/api/cart"><Tab icon={<GradientOpenWithIcon icon={<ShoppingBasketRoundedIcon sx={{ fill: "url(#linearColors)" }} />}/>} label="BASKET" /></Link>
                    <Link onClick={()=>handleChange(2)} className="nav_link_tab" to="/api/favourites"><Tab icon={<GradientOpenWithIcon icon={<FavoriteRoundedIcon sx={{ fill: "url(#linearColors)" }} />}/>} label="FAVOURITES" /></Link>
                    <Link onClick={()=>handleChange(3)} className="nav_link_tab" to="/api/purchase-history"><Tab icon={<GradientOpenWithIcon icon={<RestoreRoundedIcon sx={{ fill: "url(#linearColors)" }} />}/>} label="HISTORY" /></Link>
                    <Link onClick={()=>axios.get('/api/logout').then(()=>window.location.reload())} className="nav_link_tab"><Tab icon={<GradientOpenWithIcon icon={<ExitToAppIcon sx={{ fill: "url(#linearColors)" }} />}/>} label="LOGOUT" /></Link>
                </Tabs>

                <User/>
        </div>
    )
}


export default Navigation;