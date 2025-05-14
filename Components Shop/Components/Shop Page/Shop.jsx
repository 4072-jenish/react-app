  
  import Title  from "./Title/Title";
  import Pagination from "./Pagination/Pagination";
  import FilterBar from "./FillterBar/FillterBar"
  import ProductGrid from './ProductGrid/ProductGrid'
  import Topbtn from "./Top_btn/Top_btn"


const Shop = () => {
     return (
        <>
       
           < hr className="m-0"/>
           <Title/> 
           <FilterBar/>
           <ProductGrid/>
           <Pagination/>
           <Topbtn/>
        </>
     )
}
export default Shop;