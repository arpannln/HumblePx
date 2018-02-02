import React from 'react';
import { Link, Route } from 'react-router-dom'; //withRouter? why
import PhotoShowContainer from './photo_show_container';

class PhotosHomepage extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllPhotos();
  }
  render() {
    const photos = this.props.photos;
    //can add some loading feature here using loading ?
    return (
      <div className="photos-all">
        {
          photos.map( photo => (
            <ul key={photo.id} className="single-home-photo-container">
              <Link to={`/photos/${photo.id}`}>
                <img className="single-home-photo" src={photo.img_url} alt={photo.title}/>
              </Link>
            </ul>
          ))
        }
        <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
      </div>
    );
  }
}



export default PhotosHomepage;
