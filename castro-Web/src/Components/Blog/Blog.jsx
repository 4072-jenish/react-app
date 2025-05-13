  import Title  from "./Title/Title";
  import Multiple_Blog from "./Blogs/blogs";
  import Pagination from "./Pagination/Pagination";


const Blog = () => {
     return (
        <>
           < hr className="m-0"/>
           <Title/> 
           <Multiple_Blog/>
           <Pagination/>

        </>
     )
}
export default Blog;