import React from 'react';
import { Link, Route } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.goBackToPhotos = this.goBackToPhotos.bind(this);
  }

  componentWillMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.photoId !== nextProps.match.params.photoId) {
      this.props.fetchPhoto(nextProps.match.params.photoId);
    }
  }

  goBackToPhotos(e) {
    if (e.target.className === "show-photo-back") {
      this.props.history.push('/');
    }
  }
  chooseAHeart() {
    const {photo} = this.props;
  
    if (photo.currentUserLikes) {
      return (<div className="show-like-button" onClick={ () => this.toggleLike() }><i className="fas fa-heart fa-lg" style={{color:"Red"}} ></i></div>);
    } else {
      return (<div className="show-like-button" onClick={ () => this.toggleLike() }><i className="fas fa-heart fa-lg" style={{color:"Gray"}} ></i></div>);
    }
  }

  toggleLike() {
    const {photo} = this.props;
    const like = {photo_id: photo.id};
    this.props.createLike({like});

      // this.props.deleteLike()
  }
  render() {
    const {photo} = this.props;
    if (photo) {
    return (
    <div className="show-photo-back" onClick={this.goBackToPhotos}>
        <img className="show-photo-image" src={photo.img_url} alt={photo.title}></img>
        <h1>{this.chooseAHeart()}</h1>
    </div>
    );} else {
    return (
      <div>
      </div>
    );
  }
  }
}

export default PhotoShow;
