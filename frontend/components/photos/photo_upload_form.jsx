import React from 'react';
import { Link, Route } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'arpannln';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/arpannln/upload';

class PhotoUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: '',
      title: '',
      caption: '',
    };
    this.goBackToProfile = this.goBackToProfile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this);
    delete this.state["uploadedFile"];
    let submit = {photo: this.state};
    this.props.createPhoto(submit);
    this.render();
    this.props.history.push('/');

  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          img_url: response.body.secure_url
        });
      }
    });
  }

  goBackToProfile(e) {
    if (e.target.className === "photo-form-back") {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="photo-form-back" onClick={this.goBackToProfile}>
        <form className="photo-form" onSubmit={this.handleSubmit}>
          <div className="top-half">
            <h1 className="photo-form-title">Upload your own experience!</h1>
            <Dropzone className="photo-dropzone"
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>

            {this.state.img_url === '' ? null :

              <img className="uploaded-img" src={this.state.img_url} />
              }
          </div>
          <div className="bottom-half">
              <input
                className="title-input"
                type="text"
                value={this.state.title}
                placeholder="Title"
                onChange={this.update('title')}
              />
              <input
                className="caption-input"
                type="text"
                value={this.state.caption}
                placeholder="Caption"
                onChange={this.update('caption')}
              />
             <button className="post-button">Post Photo</button>
          </div>
      </form>
      </div>
    );
  }
}

export default PhotoUploadForm;
