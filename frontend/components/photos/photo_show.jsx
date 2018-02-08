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
    if (this.props.currentUserLikes) {
      this.props.deleteLike(photo.id);
    } else {
    this.props.createLike({like});
     }
      // this.props.deleteLike()
  }
  render() {
    const {photo} = this.props;
    const color = this.props.photo.currentUserLikes ? "red" : "gray";
    if (photo) {
    return (
    <div className="show-photo-back" onClick={this.goBackToPhotos}>
        <img className="show-photo-image" src={photo.img_url} alt={photo.title}></img>
          <div onClick={ () => this.toggleLike() }>
            <i className={`${color}-show`}></i>
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
