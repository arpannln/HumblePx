import React from 'react';
import { Link, Route } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.goBackToPhotos = this.goBackToPhotos.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.photoId !== nextProps.match.params.photoId) {
      this.props.fetchPhoto(nextProps.match.params.photoId);
    }
  }

  goBackToPhotos(e) {
    if (e.target.className === "show-photo-back" || e.target.className === "show-photo-holder") {
      this.props.history.push('/');
    }
  }


  toggleLike() {
    const {photo} = this.props;
    const like = {photo_id: photo.id};
    if (this.props.photo.currentUserLikes) {
      this.props.deleteLike(photo.id);
    } else {
    this.props.createLike({like});
     }
      // this.props.deleteLike()
  }
  render() {
    const {photo} = this.props;
    let color;
    if (!this.props.photo) {
      color = null;
    } else if (this.props.photo.currentUserLikes) {
      color = <div className="red-heart" onClick={ () => this.toggleLike() }><i className="material-icons" style={{color:'red'}}>favorite</i></div>;
    } else {
      color = <div className="gray-heart" onClick={ () => this.toggleLike() }><i className="material-icons" style={{color:'gray'}}>favorite</i></div>;
    }

    if (photo) {
    return (
    <div className="show-photo-back" onClick={this.goBackToPhotos}>
        <div className="show-photo-holder animated zoomIn">
          <img className="show-photo-image" src={photo.img_url} alt={photo.title}></img>
          <div className="author-holder">
            <h1 className="author">{photo.author.username}</h1>
          </div>
          <div className="show-photo-caption" >
            <h1 className="caption"> <span> {photo.caption} </span> {color} </h1>
          </div>
        </div>
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

// <i className={`${color}-show`}></i>
