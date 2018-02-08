import React from 'react';
import { Link } from 'react-router-dom';
class PhotoIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.chooseAHeart = this.chooseAHeart.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
  }

  chooseAHeart() {
    const {photo} = this.props;
    if (photo.currentUserLikes) {
      return (<div onClick={ () => this.toggleLike() }><i className="fas fa-heart fa-lg" style={{color:"Red"}} ></i></div>);
    } else {
      return (<div onClick={ () => this.toggleLike() }><i className="fas fa-heart fa-lg" style={{color:"Gray"}} ></i></div>);
    }
  }

  toggleLike() {
    const {photo} = this.props;
    const like = {photo_id: photo.id};

      this.props.createLike({like});

      // this.props.deleteLike()
  }


  render () {
    const {photo} = this.props;
    return (
    <ul key={photo.id} className="single-home-photo-container">
      <Link to={`/photos/${photo.id}`}>
        <img className="single-home-photo" src={photo.img_url} alt={photo.title}/>
        <br></br>
      </Link>
      <h3 className="photo-caption">What a cute picture! {this.chooseAHeart()}</h3>
    </ul> );
  }
}

export default PhotoIndexItem;
