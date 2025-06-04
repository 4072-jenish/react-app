import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";

const HomeComp = () => {
  return (
    <>
                <div className="d-flex justify-content-between align-items-center p-3">
                <h1>Avalable Anime</h1><Link to="/addAnime">AddAnime</Link>
                </div>
                  <div className="container">
                     <div className="row  gap-3">
                        <div className="col-4">
                        <div className="card">
                     <div className="card-content">
                          <div className="card-img"><img   className="img-fluid" alt="" /></div>
                          <div className="card-data">
                               <h3 className="card-title"></h3>
                               <p className="card-desc"></p>
                               <button  className="bg-warning text-white ">Edit <FaEdit/></button>
                               <button className="bg-danger text-white ">Delete <FaTrash/></button>
                          </div>
                     </div>
                </div>
                        </div>
                     </div>
                  </div>
    </>
  );
}

export default HomeComp;