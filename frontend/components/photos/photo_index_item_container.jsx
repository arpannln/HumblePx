import {connect} from 'react-redux';
import {createLike, deleteLike} from '../../actions/likes_actions';
import PhotoIndexItem from './photo_index_item';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  currentUserLikes: state.session.currentUser.liked_photos.includes(ownProps.photo.id)
});


const mapDispatchToProps = dispatch => ({
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (id) => dispatch(deleteLike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndexItem);
