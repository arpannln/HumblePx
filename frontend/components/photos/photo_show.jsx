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
    const color = this.props.photo.currentUserLikes ? <div className="red-heart" onClick={ () => this.toggleLike() }><i className="material-icons" style={{color:'red'}}>favorite</i></div> :
                                                      <div className="gray-heart" onClick={ () => this.toggleLike() }><i className="material-icons" style={{color:'gray'}}>favorite</i></div>


    if (photo) {
    return (
    <div className="show-photo-back" onClick={this.goBackToPhotos}>
        <div className="show-photo-holder">
          <img className="show-photo-image" src={photo.img_url} alt={photo.title}></img>
          <div className="show-photo-caption" >
             <h1 className="caption"> <h3> {photo.caption} </h3> {color} </h1>
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
