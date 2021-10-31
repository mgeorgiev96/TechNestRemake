import {React,createContext,useState, useEffect} from 'react'
import axios from 'axios'


export const ShopContext = createContext()

export const ShopProvider = (props)=>{

    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    const [user,setUser] = useState('')
    const [shop,setShop] = useState('')
    const [itemID,setItemID] = useState('')
    const [itemData,setItemData] = useState('')
    const [ratings,setRatings] = useState([5,4.5,4.8,3,4,5,4.2,3.5,5,4.3,5,5,4.2,5,4,5,4.4,5,4.2,5,4.7,5,4,3.5,4.3,5,4.2,5,4,5])

    useEffect(()=>{
        axios.get('/api/storage').then(res=>{
           setShop(res.data.items)
           setUser(res.data.user)

       })
    },[])

    return (
        <ShopContext.Provider value={[cart,setCart,user,setUser,shop,setShop,itemID,setItemID,itemData,setItemData,total,setTotal,ratings,setRatings]}>
           {props.children}
        </ShopContext.Provider>
    )
}
