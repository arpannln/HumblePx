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

  goBackToPhotos() {
    this.props.history.push('/photos');
  }

  render() {
    const {photo} = this.props;
    if (photo) {
    return (
    <div className="show-photo-back" onClick={() => this.goBackToPhotos()}>
      <div className="show-photo" onClick={null}>
        <h1 className="show-photo-title">{photo.title}</h1>
        <img className="show-photo-image" src={photo.img_url} alt={photo.title}/>
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
