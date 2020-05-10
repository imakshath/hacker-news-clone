import { actionTypes } from './actions';

const initialState = {
    message: null,
};

/**
 * This method is to increment the count based on user vote up.
 * @param {items} items 
 * @param {storyId} storyId
 */
const incrementUpVoteByStoryId = (items, storyId) => {
    return items.map((story) => {
        if (story.objectID == storyId) {
            const ret =  {
                ...story,
                num_voteup: ++story.num_voteup || 1,
            }
            return ret;
        }
        return story;
    })
};

/**
 * This method will be responsible to synch up the vote up count with localStorage.
 * Note:: This should be removed based in vote up service implementation.
 * @param {items} items 
 */
const filterStories = (items) => {
    const storyLocalCache = JSON.parse(localStorage.getItem('story')) || {};
    return items.filter((story) => {
        const { upVoteCount = 0, hide = false } = storyLocalCache[story.objectID] || {};
        if (!hide) {
            story.num_voteup = story.num_voteup ? story.num_voteup + upVoteCount : upVoteCount;
            return true;
        };
        return false;
    })
}

/**
 * Reducer function to update the store based on the action.
 * @param {state} state 
 * @param {action} action 
 */
export const storyReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_MESSAGE:
            return {
                ...state,
                message: action.message,
            };
        case actionTypes.FETCH_STORIES_STARTED:
            return {
                ...state,
                isFetching: true
            };
        case actionTypes.FETCH_STORIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: filterStories(action.payload.stories),
                page: action.payload.page,
                totalPages: action.payload.totalPages,
                errorMessage: '',
            };
        case actionTypes.FETCH_STORIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.error,
            };
        case actionTypes.VOTE_UP_SUCCESS:
            return {
                ...state,
                items: incrementUpVoteByStoryId(state.items, action.storyId),
                errorMessage: ''
            };
        case actionTypes.VOTE_UP_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.error,
            };
        case actionTypes.HIDE_STORY_SUCCESS:
            return {
                ...state,
                items: filterStories(state.items),
                errorMessage: ''
            };
        case actionTypes.HIDE_STORY_FAILURE:
            return {
                ...state,
                errorMessage: action.error,
            };
        default:
            return state;
    }
};
