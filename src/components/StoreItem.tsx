import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id:Number,
    name:String,
    price:Number,
    imgUrl:String
}

export const StoreItem = ({id,name,price,imgUrl}:StoreItemProps)=>{
    const [quantity,setQuantity] = useState(0)
    return(
       <Card className="h-100%">
       <Card.Img variant = "top" height="200px" src= {imgUrl}  style = {{objectFit:"cover"}}/>
       <Card.Body className="d-flex flex-column">

        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
           <span  className="fs-5">{name}</span>
           <span  className="fs-5 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div>
        { quantity ===0 ?( <div>
            <Button size = "sm" className="w-100">+ Add To Card</Button>
            </div>):<div style={{gap:"0.5rem"}} className="d-flex align-items-center flex-column">
                 <div style={{gap:"0.5rem"}} className="d-flex align-items-center justify-content-center"> 
                 <Button  size = "sm">-</Button>
                <div> <span>{quantity}</span> <span>in Card</span></div>
                 <Button  size = "sm">+</Button>
                 
                 </div>
                 <Button size = "sm"  variant="danger" className="w-100">Remove</Button>
                </div>}

        </div>
       </Card.Body>

        
       </Card>
    )
}