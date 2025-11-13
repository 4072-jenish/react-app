import Container from 'react-bootstrap/Container';

function Commoncomp(props) {
    return (
        <>
            <Container>
                <div className="Commoncomp">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    <img src={props.img} alt="line" />
                </div>
            </Container>
        </>
    )
}

export default Commoncomp;