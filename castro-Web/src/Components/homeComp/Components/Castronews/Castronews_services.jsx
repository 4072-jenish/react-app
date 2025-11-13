import Container from 'react-bootstrap/Container';

function Castronews_services(props) {
    return (
        <>
            <Container>
                <div className="services_card d-flex justify-content-center ">
                    <div className="col-6">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="col-6">
                        <a href="#" className='text-decoration-none fw-bold text-dark'>{props.title}</a>
                        <p className='fs-6'>{props.text}</p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Castronews_services;