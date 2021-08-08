import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../root-redux/sagas/rootSaga';
import reducers from '../root-redux/reducers/rootReducers'
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

function storeConfig() {
    return createStore(
        reducers,
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    )
}
const store = storeConfig();
sagaMiddleware.run(rootSaga)

export default store;