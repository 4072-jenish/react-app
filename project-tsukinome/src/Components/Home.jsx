import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getAnime } from '../Services/storage';
import './home.css'
const Home = () => {
  const anime = getAnime() || [];
  console.log('Anime from localStorage:', anime);
  return (
    <div className="home">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1>List of Available Animes :-</h1>
          <Link to="/AddAnime" className="btn btn-primary">
            Add Anime
          </Link>
        </div>

        <div className="row">
          {
          anime.map((animeItem, index) => (
            <div className="col-4" key={animeItem.name || index}>
              <div className="anime-card">
                <div className="anime-image">
                  <img src={animeItem.img} alt={animeItem.name} className='anime-img' />
                </div>
                <div className="anime-content p-3">
                  <h2>{animeItem.name}</h2>
                  <p>{animeItem.desc}</p>
                  <p>{animeItem.rating}</p>
                  <div className="card-action d-flex justify-content-between align-items-center">
                    <button className="btn btn-warning">
                      Edit <FaEdit />
                    </button>
                    <button className="btn btn-danger">
                      Delete <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
