import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk'
import { storyReducer } from './story/reducer';

// if you're using redux-thunk or other middlewares, add them here
const createStoreWithMiddleware = compose(applyMiddleware(
    ReduxThunk,
))(createStore);

const lastAction = (state = null, action) => {
    return action;
}

const rootReducer = combineReducers({
    story: storyReducer,
    lastAction,
});

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
};