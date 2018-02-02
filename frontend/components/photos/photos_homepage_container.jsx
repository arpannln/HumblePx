import { connect } from 'react-redux';
import {removeAllErrors} from '../../actions/session_actions';
import {fetchAllPhotos} from '../../actions/photos_actions';
import PhotosHomepage from './photos_homepage';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  photos: Object.values(state.photos),
});

const mapDispatchToProps = (dispatch) => ({
  removeAllErrors: () => dispatch(removeAllErrors()),
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosHomepage));
