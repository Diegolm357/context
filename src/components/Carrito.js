import { CardGroup, Container, Card, Col, Row, Button} from 'react-bootstrap';
import UserContext from '../context/UserContext';
import { useContext } from 'react';

function Carrito() {
  let {carrito} = useContext(UserContext)
 
 
    return (
      <>
        
            <Container className="mb-3" align="center" >
            <Row  >
    <Col sm={6} >
            <CardGroup>
            
                                    
      <Card border="secondary">
      <Card.Img variant="top" style={{ width: '150px' }}  />
     <Card.Body>
                    <Card.Title>
                      {carrito}
                     
       </Card.Title>
       <Card.Text>

         Some quick example text to build on the card title and make up the bulk of
         the card's content.
                   </Card.Text>

                 <Button  variant="warning">COMPRAR</Button>
                 <br/>            
            <Card.Text>
                                  
                 
       </Card.Text>
       </Card.Body>
       </Card>
          
                    
            </CardGroup>
            </Col>
            </Row>
            </Container>
            
                   </>
    );

}  export default Carrito; 