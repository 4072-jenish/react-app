import  "./Title.css";
import Container from 'react-bootstrap/Container';
import { IoIosArrowForward } from "react-icons/io";


const Title = () => {

    return ( 
        <>
        <div className="blog-title centred">
            <div className="blog-layer" >
                <Container>
                    <div className="content-box">
                        <h1  style={{fontFamily : "Josefin Sans"}}>Blog Details 02</h1>
                        <ul className="list-unstyled d-flex justify-content-center align-items-center">
                            <li><a className="text-decoration-none  pe-2" href="">Home</a></li>
                            <IoIosArrowForward className="fs-6" style={{color: "#848484"}} /> 
                            <li className="ps-2">Blog Details 02</li>
                        </ul>
                    </div>
                </Container>
            </div>
        </div>
        </>
    )

}

export default Title;