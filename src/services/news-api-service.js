import ApiService from './api-service';

const apiClient = new ApiService({});

const getStoryLocalStorageCache = (storyId) => {
    const storyObj = JSON.parse(localStorage.getItem('story')) || {};
    return storyObj[storyId] ? storyObj : {
        ...storyObj,
        [storyId]: { upVoteCount: 0, hide: false }
    };
};

/**
 * This service method which is used to update the voteup count in the LocalStorage.
 * NOTE: Later, this can be replaced with actual service implementation.
 * @param {storyId} storyId 
 */
const upVoteStory = (storyId) => {
    return new Promise((resolve, reject) => {
        try {
            const story = getStoryLocalStorageCache(storyId);
            story[storyId].upVoteCount = story[storyId].upVoteCount + 1;
            localStorage.setItem('story', JSON.stringify(story));
            resolve(storyId);
        } catch (error) {
            reject(error);
        }
    });
};

/**
 * This service method which is used to update the hide status in the LocalStorage.
 * NOTE: Later, this can be replaced with actual service implementation.
 * @param {storyId} storyId 
 */
const hideStory = (storyId) => {
    return new Promise((resolve, reject) => {
        try {
            const story = getStoryLocalStorageCache(storyId);
            story[storyId].hide = true;
            localStorage.setItem('story', JSON.stringify(story));
            resolve(storyId);
        } catch (error) {
            reject(error);
        }
    });
};

const newsApiService = {
    fetchStories: ({ pageNum = 1, limit = 20 }) => apiClient.get(`search_by_date?tags=(story)&page=${pageNum}&hitsPerPage=${limit}`),
    upVoteStory,
    hideStory,
};

export default newsApiService;