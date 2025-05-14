  
  import TextLinkExample from "./TopHeader/TopHeader";
  import Header from "./Header/Header";
  import Title  from "./Title/Title";
  import Pagination from "./Pagination/Pagination";
  import Footer from "./Footer/Footer";
  import Topbtn from "./Top_btn/Top_btn"; 
  import FilterBar from "./FillterBar/FillterBar"
  import ProductGrid from './ProductGrid/ProductGrid'


const Shop = () => {
     return (
        <>
           <TextLinkExample/>
           < hr className="m-0"/>
           <Header/>
           <Title/> 
           <FilterBar/>
           <ProductGrid/>
           <Pagination/>
           <Footer/>
           <Topbtn/>

        </>
     )
}
export default Shop;