import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import StoreItems from "../data/items.json"
export function Store(){
  
    return (
       
          <Row className="g-3" xs = {1} lg={4} md= {2} >
            
            {StoreItems.map(item =>(
                <Col key = {item.id}>{<StoreItem {...item} />}</Col>
            ))}
          </Row>
       
       
       
    )
}