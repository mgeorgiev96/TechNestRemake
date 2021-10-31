import {React,useContext} from 'react'
import {ShopContext} from './Context'
import Item from './Item'
import FilterSearch from './FilterSearch'


function Shop() {
    const [cart,setCart,user,setUser,shop,setShop,itemID,setItemID,itemData,setItemData,total,setTotal,ratings,setRatings] = useContext(ShopContext)

    const filterSearch = ()=>{
        let criteria = document.querySelector(".filterSearch")
        let shop = document.querySelector('.shop_container')
        let reg = new RegExp(`^${criteria.value}`,"i")
        if(shop.children){
            for(let child of shop.children){
                if(reg.test(child.classList[0].replace(/[?]/g," "))){
                    child.style.display = "flex"
                }else child.style.display = "none"
            }
        }
    }
    return (
        <div style={{display:"flex",flexFlow:"column"}}>
            <FilterSearch filter={filterSearch}/>
            <div className='shop_container'>
                {shop!==''? shop.map((item,i)=><Item c={item.name.replace(/ /g,"?")} key={item.id} id={item.id} price={item.price} title={item.name} image={item.images[0]} rating={ratings[i]}/>) : ''}
            </div>
        </div>
    )
}

export default Shop;
