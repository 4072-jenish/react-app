import Container from 'react-bootstrap/Container';
import Commoncomp from '../Commoncomp/Commoncomp';
import line from "../../../../assets/image/separator.png"
import Castronews_card from './Castronews_card';
import image1 from "../../../../assets/image/news-1.jpg"
import image2 from "../../../../assets/image/news-2.jpg"
import image3 from "../../../../assets/image/news-3.jpg"
import Castronews_services from './Castronews_services';
import icon1 from "../../../../assets/image/icon-1.jpg"
import icon2 from "../../../../assets/image/icon-2.jpg"
import icon3 from "../../../../assets/image/icon-3.jpg"
import icon4 from "../../../../assets/image/icon-4.png"

function Castronews(props) {
    return (
        <>
            <Container>
                <div className="castronews text-center align-items-center">
                    <Commoncomp title={"Castro News"} text={"There are some product that we featured for choose your best"} img={line} />
                </div>
                <div className="castronews d-flex justify-content-center my-5 flex-wrap">
                    <div className="col-md-4 col-sm-12 mb-4">
                        <Castronews_card img={image1} date="— May 05, 2020" title="Why is a ticket to lagos so expensive?" Comments="by admin | 03 Comments" description="Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris." />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-4">
                        <Castronews_card img={image2} date="— May 04, 2020" title="But i must explain to you how all this mistaken idea." Comments="by admin | 07 Comments" description="Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris." />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-4">
                        <Castronews_card img={image3} date="— May 03, 2020" title="The Biebers Just Switched Up Their Couple Style" Comments="by admin | 05 Comments" description="Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris." />
                    </div>
                </div>
                <div className="Castronews_services container border-top border-bottom py-4">
                    <div className="row text-center">
                        <div className="col-12 col-sm-6 col-md-3">
                            <Castronews_services img={icon1} title="Free Shipping" text="Free shipping on orders over $100" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 ">
                            <Castronews_services img={icon3} title="Secure Payment" text="We ensure secure payment with PEV" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <Castronews_services img={icon2} title="Support 24/7" text="Contact us 24 hours a day, 7 days a week" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <Castronews_services img={icon4} title="30 Days Return" text="Simply return it within 30 days for an exchange." />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Castronews;