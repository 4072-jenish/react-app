import React from "react";
import  "./user.css";
import '../assets/user-1.png'

class Profile extends React.Component {
    
   constructor(props) {
      super(props);
}
    render() {
        return(
            <div>

<div class="container">
      <section>
        <div class="items-inner">
          <div class="items">
            <div class="item">
              <div class="photo">
                    <img src={this.props.image}/>
                <div class="wish" div></div>
              </div>
              <div class="desc">
                <small>User name : {this.props.name}</small>
                <span> User Email : {this.props.email}</span>
                <h5> User phone : {this.props.phone}</h5>
                <em>User age : {this.props.age}</em>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
            </div>
        )
    }
}

export default Profile;