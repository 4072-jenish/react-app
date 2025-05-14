  
  import TextLinkExample from "../Main/TopHeader/TopHeader";
  import Header from "../Main/Header/Header";
  import Title  from "./Title/Title";
  import Multiple_Blog from "./Blogs/blogs";
  import Pagination from "./Pagination/Pagination";
  import Footer from "../Main/Footer/Footer";
  import Topbtn from "../Main/Top_btn/Top_btn"; 
  import FilterBar from "../Shop Page/FillterBar/FillterBar"
  import ProductGrid from '../Shop Page/ProductGrid/ProductGrid'


const Blog = () => {
     return (
        <>
           < hr className="m-0"/>
           <Title/>
           <Multiple_Blog/>
           <Pagination/>
           {/* <Topbtn/> */}

        </>
     )
}
export default Blog;