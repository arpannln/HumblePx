import React from 'react';
import { Link, Route } from 'react-router-dom'; //withRouter? why
import PhotoShowContainer from './photo_show_container';
import PhotoIndexItemContainer from './photo_index_item_container';
class PhotosHomepage extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllPhotos();
  }


  render() {
    const photos = this.props.photos;
    return (
      <div className="photos-all">
        {
          photos.map( photo => (
            <PhotoIndexItemContainer key={photo.id} id={photo.id}/>
          ))
        }
        <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
      </div>
    );
  }
}



export default PhotosHomepage;
