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
      uploadedFileCloudinaryUrl: ''
    };
    this.goBackToProfile = this.goBackToProfile.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
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
          uploadedFileCloudinaryUrl: response.body.secure_url
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
        <div className="photo-form">
        <Dropzone className="photo-dropzone"
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
        <div className="uploaded-img">
        {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
          <p>{this.state.uploadedFile.name}</p>
          <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>}
        </div>
      </div>
      </div>
    );
  }
}

export default PhotoUploadForm;
