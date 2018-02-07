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
    //can add some loading feature here using loading ?
    return (
      <div className="photos-all">
        {
          photos.map( photo => (
            <PhotoIndexItemContainer key={photo.id} photo={photo}/>
          ))
        }
        <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
      </div>
    );
  }
}



export default PhotosHomepage;
