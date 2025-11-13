import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Castronews.css';
import { FiArrowUpRight } from 'react-icons/fi';


function Castronews_card(props) {
    return (
        <>
            <Container>
                <div className="Castronews_card">
                        <Card style={{ width: '370px' }}>
                            <img src={props.img} alt="" />
                            <Card.Body>
                                <Card.Text className="fs-6">{props.date}</Card.Text>
                                <Card.Title><a href="#" className="fs-5 text-decoration-none">{props.title}</a></Card.Title>
                                <Card.Text><p>{props.Comments}</p></Card.Text>
                                <Card.Text><p>{props.description}</p></Card.Text>
                                <Button variant="">Read More<FiArrowUpRight className="arrow-icon ms-2 fs-4" /></Button>
                            </Card.Body>
                        </Card>
                </div>
            </Container>
        </>
    )
}

export default Castronews_card