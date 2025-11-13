  
  import Title  from "./Title/Title";
  import Pagination from "./Pagination/Pagination";
  import FilterBar from "./FillterBar/FillterBar"
  import ProductGrid from './ProductGrid/ProductGrid'


const Shop = () => {
     return (
        <>
       
           < hr className="m-0"/>
           <Title/> 
           <FilterBar/>
           <ProductGrid/>
           <Pagination/>
        </>
     )
}
export default Shop;