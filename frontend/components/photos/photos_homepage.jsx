import React from 'react';
import { Link, Route } from 'react-router-dom'; //withRouter? why
import PhotoShowContainer from './photo_show_container';
import PhotoIndexItemContainer from './photo_index_item_container';


class PhotosHomepage extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      search: null
    };

  }
  componentDidMount() {
    this.props.fetchAllPhotos();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleChange(e) {
    this.setState( {search: this.refs.filterTextInput.value });
  }

  handleScroll() {
    console.log(window.scrollY);
    let navBar = document.querySelector('.nav-bar');
    if (window.scrollY === 0) {
      navBar.style.backgroundColor = 'rgba(0, 0, 0, 1)';

    } else {
      navBar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
  }

  render() {
    // var myNav = document.getElementById('mynav');
    // var body = document.getElementById('photos')
    // window.onscroll = function () {
    //   "use strict";
    //   console.log(body.scrollTop);
    //   if (document.scrollTop > 100) {
    //     myNav.classList.add("nav-transparent");
    //   }
    //   else {
    //
    //     myNav.classList.remove("nav-transparent");
    //   }
    // };
    var photos = this.props.photos;

    if (this.state.search) {
      photos = photos.filter( photo => photo.caption.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
    }
    return (
      <div className="discover">
        <form className="search">
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            ref="filterTextInput"
            onChange={this.handleChange}
          />
        </form>

        <div className="photos-all" id="photos">
          {
            photos.map( photo => (
              <PhotoIndexItemContainer key={photo.id} id={photo.id}/>
            ))
          }
          <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
        </div>
      </div>
    );
  }
}



export default PhotosHomepage;
