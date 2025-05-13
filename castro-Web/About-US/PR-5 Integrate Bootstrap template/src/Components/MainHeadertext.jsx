const Maintitlebar = (props) => {
    return (
      <div className="Catagory-header-content mb-5">
        <h2 style={{ fontFamily: "Josefin Sans", fontSize: "40px" }}>{props.title}</h2>
        <p style={{ fontSize: "15px" }}>{props.description}</p>
        <span>
          <img src={props.seperator} alt="separator" />
        </span>
      </div>
    );
  };

  export default Maintitlebar;