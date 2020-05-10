import { connect } from 'react-redux';
import actions from '../store/story/actions';
import ListItem from '../components/ListItem';

const mapDispatchToProps = (dispatch) => {
    return {
        voteUpStory: (storyId) => {
            console.log(storyId, 'storyId');
            dispatch(actions.voteUpStory(storyId));
        },
        hideStory: (storyId) => {
            dispatch(actions.hideStory(storyId));
        }
    };
};

const mapStateToProps = ({ story }) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
