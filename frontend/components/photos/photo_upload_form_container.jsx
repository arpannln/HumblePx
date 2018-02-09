import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photos_actions';
import PhotoUploadForm from './photo_upload_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  createPhoto: (photo) => dispatch(createPhoto(photo))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUploadForm));
