import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photos_actions';
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => ({
  photo: state.photos[ownProps.match.params.photoId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: (id) => dispatch(fetchPhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
