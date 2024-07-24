import Card from 'react-bootstrap/Card';

const Cradekstra = (props) =>{
    return (
    <>
        <Card id="ekstra">
        <Card.Img variant="top" src= {props.image}/>
        <Card.Body>
          <Card.Text>
          {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
    )
}
export default Cradekstra;