import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const middlewareList = [];

middlewareList.push(thunk);

const middleware = compose(
    applyMiddleware([...middlewareList])
);

export default middleware;
