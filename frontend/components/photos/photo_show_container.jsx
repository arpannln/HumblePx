import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photos_actions';
import PhotoShow from './photo_show';
import { withRouter } from 'react-router';
import { createLike, deleteLike } from '../../actions/likes_actions';

const mapStateToProps = (state, ownProps) => ({
  photo: state.photos[ownProps.match.params.photoId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (photoId) => dispatch(deleteLike(photoId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow));
