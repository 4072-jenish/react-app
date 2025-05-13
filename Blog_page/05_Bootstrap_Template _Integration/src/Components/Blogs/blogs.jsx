import Single_blog from "./Single_blog";

import  "./blogs.css";
import card_1 from "../../assets/images/card_1.jpg";
import card_2 from "../../assets/images/card_2.jpg";
import card_3 from "../../assets/images/card_3.jpg";
import card_4 from "../../assets/images/card_4.jpg";
import card_5 from "../../assets/images/card_5.jpg";
import card_6 from "../../assets/images/card_6.jpg";
import card_7 from "../../assets/images/card_7.jpg";
import card_8 from "../../assets/images/card_8.jpg";
import card_9 from "../../assets/images/card_9.jpg";
import Container from 'react-bootstrap/Container';

const Multiple_Blog = () => {

return (
    <>
    <Container>
    <div className="Multiple_card d-flex flex-wrap  align-items-center justify-content-strat gap-4" >

     <Single_blog  img={card_1} date={"May 11, 2020"}  title={"The ultimate fall 2020 shoe guide line"}  comments={" 03 Comments"} />
     <Single_blog  img={card_2} date={"May 10, 2020"}  title={"These hair-color trends are going to be huge."}  comments={"07 Comments"} />
     <Single_blog  img={card_3} date={"May 09, 2020"}  title={"Inspiration from the pre-fall collection."}  comments={"05 Comments"} />
     <Single_blog  img={card_4} date={"May 08, 2020"}  title={"City of london wants to have it’s brexit cake."}  comments={"08 Comments"} />
     <Single_blog  img={card_5} date={"May 07, 2020"}  title={"On the other hand we provide with righteous."}  comments={"07 Comments"} />
     <Single_blog  img={card_6} date={"May 06, 2020"}  title={"The spectacle before us was indeed sublime."}  comments={"05 Comments"} />
     <Single_blog  img={card_7} date={"May 05, 2020"}  title={"Why is a ticket to lagos so expensive?"}  comments={"03 Comments"} />
     <Single_blog  img={card_8} date={"May 04, 2020"}  title={"But i must explain to you how all this mistaken idea."}  comments={"07 Comments"} />
     <Single_blog  img={card_9} date={"May 03, 2020"}  title={"The Biebers Just Switched Up Their Couple Style"}  comments={"05 Comments"} />
   
      </div>

    </Container>
    </>
)
}
export default Multiple_Blog;