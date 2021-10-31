import {React,useContext} from 'react'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import {ShopContext} from './Context'
import Rating from '@mui/material/Rating'
import axios from "axios"
import uniqid from 'uniqid'

function Item(props) {
    const [cart,setCart,user,setUser,shop,setShop,itemID,setItemID,itemData,setItemData,total,setTotal,ratings,setRatings]= useContext(ShopContext)
    const itemDataID = (e)=>{
        let target= e.target
        setItemID(target.className)
    }

    const addToCart = (ID)=>{
        axios.post("/api/item-information",{ID}).then(res=>{
            let temp = cart
            let item = res.data
            temp.push({
                id: uniqid(),
                images: item.images,
                name: item.name,
                price: item.price,
                description: item.description
            })

            setCart(temp)
            setTotal(total + item.price)
        })
    }
    return (
        <Card className={props.c} >
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text><strong>{props.price}$</strong></Card.Text>
            <Link className={props.id} onClick={itemDataID} to='/api/item-info'>Read More</Link>
            <i onClick={()=>addToCart(props.id)} className="fas fa-cart-plus"></i>
            <Rating name="size-medium" defaultValue={props.rating}  precision={0.1}  readOnly/>
        </Card.Body>
    </Card>
    )
}

export default Item;
