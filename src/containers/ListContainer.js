import { connect } from 'react-redux';
import actions from '../store/story/actions';
import List from '../components/List';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStories: (pageNum) => {
            dispatch(actions.fetchStories({ pageNum, limit: 20 }));
        },
    };
};

const mapStateToProps = ({ story }) => ({ 
    stories: story.items,
    page: story.page,
    totalPages: story.totalPages,
    isFetching: story.isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
