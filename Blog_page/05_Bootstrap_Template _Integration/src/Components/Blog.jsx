  
  import TextLinkExample from "./TopHeader/TopHeader";
  import Header from "./Header/Header";
  import Title  from "./Title/Title";
  import Multiple_Blog from "./Blogs/blogs";
  import Pagination from "./Pagination/Pagination";
  import Footer from "./Footer/Footer";
  import Topbtn from "./Top_btn/Top_btn";


const Blog = () => {
     return (
        <>
           <TextLinkExample/>
           < hr className="m-0"/>
           <Header/>
           <Title/> 
           <Multiple_Blog/>
           <Pagination/>
           <Footer/>
           <Topbtn/>

        </>
     )
}
export default Blog;