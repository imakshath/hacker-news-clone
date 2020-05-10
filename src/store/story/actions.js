import newsApiService from '../../services/news-api-service';

export const actionTypes = {
    SET_MESSAGE: 'SET_MESSAGE',
    FETCH_STORIES_STARTED: 'FETCH_STORIES_STARTED',
    FETCH_STORIES_SUCCESS: 'FETCH_STORIES_SUCCESS',
    FETCH_STORIES_FAILURE: 'FETCH_STORIES_FAILURE',
    VOTE_UP: 'VOTE_UP',
    VOTE_UP_SUCCESS: 'VOTE_UP_SUCCESS',
    VOTE_UP_FAILURE: 'VOTE_UP_FAILURE',

    HIDE_STORY_SUCCESS: 'HIDE_STORY_SUCCESS',
    HIDE_STORY_FAILURE: 'HIDE_STORY_FAILURE',
}

/**
 * Action to fetch the stories.
 * @param {pageNum} param0 
 */
const fetchStories = (pageNum = 1) => {
    return dispatch => {
      dispatch(fetchStoriesStarted());
  
      newsApiService.fetchStories(pageNum)
        .then(res => {
            dispatch(fetchStoriesSuccess({ stories: res.hits, page: res.page, totalPages: res.nbPages }));
        })
        .catch(err => {
            dispatch(fetchStoriesFailure(err.message));
        });
    };
};

const fetchStoriesStarted = () => ({ type: actionTypes.FETCH_STORIES_STARTED });
const fetchStoriesSuccess = payload => ({ type: actionTypes.FETCH_STORIES_SUCCESS, payload });
const fetchStoriesFailure = error => ({ type: actionTypes.FETCH_STORIES_FAILURE, error });

const voteUpStory = (storyId) => {
    return (dispatch) => {
        newsApiService
        .upVoteStory(storyId)
        .then((res) => {
            dispatch(voteUpSuccess(storyId));
        })
        .catch((err) => {
            dispatch(voteUpFailure(err.message));
        });
    };
};

// const fetchStoriesStarted = () => ({ type: actionTypes.FETCH_STORIES_STARTED });
const voteUpSuccess = storyId => ({ type: actionTypes.VOTE_UP_SUCCESS, storyId });
const voteUpFailure = error => ({ type: actionTypes.VOTE_UP_FAILURE, error });


const hideStory = (storyId) => {
    return (dispatch) => {
        newsApiService
        .hideStory(storyId)
        .then((res) => {
            dispatch(hideStorySuccess(storyId));
        })
        .catch((err) => {
            dispatch(hideStoryFailure(err.message));
        });
    };
};

const hideStorySuccess = storyId => ({ type: actionTypes.HIDE_STORY_SUCCESS, storyId });
const hideStoryFailure = error => ({ type: actionTypes.HIDE_STORY_FAILURE, error });


const actions = {
    setMessage: messageText => ({ type: actionTypes.SET_MESSAGE, message: messageText }),
    fetchStories,
    voteUpStory,
    hideStory
};

export default actions;