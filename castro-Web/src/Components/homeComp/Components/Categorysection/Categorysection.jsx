import "../Categorysection/Categorysection.css"
import React from "react"
import Container from 'react-bootstrap/Container';
import Categorysection_card from "./Categorysection_card"
import line from "../../../../assets/image/separator.png"
import img1 from "../../../../assets/image/category-1.png"
import img2 from "../../../../assets/image/category-2.png"
import img3 from "../../../../assets/image/category-3.png"
import img4 from "../../../../assets/image/category-4.png"
import Commoncomp from "../Commoncomp/Commoncomp";


function Categorysection() {
    return (
        <>
            <Container>
                <div className="category">
                    <div className="category_title text-center">
                        <Commoncomp title={"Top Category"} text={"Follow the most popular trends and get exclusive items from castro shop"} img={line} />
                    </div>
                    <div className="d-flex justify-content-between flex-wrap align-items-center">
                        <Categorysection_card img={img1} name={"Women Collections"} />
                        <Categorysection_card img={img2} name={"Kids Collections"} />
                        <Categorysection_card img={img3} name={"Summer Collections"} />
                        <Categorysection_card img={img4} name={"Gents Collections"} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Categorysection;