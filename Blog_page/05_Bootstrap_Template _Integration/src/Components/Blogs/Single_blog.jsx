import Card from 'react-bootstrap/Card';
import { FaArrowRightLong } from "react-icons/fa6";
import  "./blogs.css";


function Single_blog(props) {
  return (
    <Card className=' card'>
      <Card.Img variant="top" src={props.img} />
      <Card.Body className='Lower-contact'>
       <div className="date-contact">
       <span> {props.date}</span>
       </div>
        <Card.Text>
          <a href="" style={{fontFamily : "Josefin Sans"}}>{props.title}</a>
        </Card.Text>
        <ul className='list-unstyled d-flex align-items-center flex-wrap'>
            <li><a href="" className='text-decoration-none  ' style={{color: "#848484"}}>By admin</a></li>
            <span className="line"></span>
            <li><a href=""  className='text-decoration-none '  style={{color: "#848484"}}>{props.comments}</a></li>
        </ul>
        <p   style={{color: "#848484" , lineHeight: "26px" , fontSize : "15px"}}>Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.</p>
         <a href="" className='text-decoration-none' style={{color: "#222"}}>Read More <FaArrowRightLong  className=' i'/></a>
      </Card.Body>
    </Card>
  );
}

export default Single_blog;