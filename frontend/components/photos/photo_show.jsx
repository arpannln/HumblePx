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
      this.props.history.push('/photos');
    }
  }

  render() {
    const {photo} = this.props;
    if (photo) {
    return (
    <div className="show-photo-back" onClick={this.goBackToPhotos}>
      <div className="show-photo">
        <h3 className="show-photo-title">{photo.title}</h3>
        <img className="show-photo-image" src={photo.img_url} alt={photo.title}/>
        <h3 className="show-photo-author">{photo.author.username}</h3>
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
