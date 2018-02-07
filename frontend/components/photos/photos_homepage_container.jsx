import { connect } from 'react-redux';
import {removeAllErrors} from '../../actions/session_actions';
import {fetchAllPhotos} from '../../actions/photos_actions';
import {createLike, deleteLike} from '../../actions/likes_actions';
import PhotosHomepage from './photos_homepage';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return {
    photos: Object.values(state.photos),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeAllErrors: () => dispatch(removeAllErrors()),
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId)),

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosHomepage));
