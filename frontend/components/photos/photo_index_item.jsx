import React from 'react';
import { Link } from 'react-router-dom';
class PhotoIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
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
      // this.props.deleteLike()

      // https://openclipart.org/image/2400px/svg_to_png/275854/Red-Heart-4.png
      // http://physiciansimmediatecare.com/wp-content/uploads/2016/04/Gray-Heart.jpg



  render () {
    const {photo} = this.props;
    const color = this.props.photo.currentUserLikes ? "red" : "gray";
    return (
    <ul key={photo.id} className="single-home-photo-container">
      <Link to={`/photos/${photo.id}`}>
        <img className="single-home-photo" src={photo.img_url} alt={photo.title}/>
        <br></br>
      </Link>
      <h3 className="photo-caption">What a cute picture!
        <div onClick={ () => this.toggleLike() }>
          <i className={`${color}`}></i>
        </div>
      </h3>
    </ul> );
  }
}

export default PhotoIndexItem;
