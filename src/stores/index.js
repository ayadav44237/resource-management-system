import axios from 'axios';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const resourcesListUrl = "https://media-content.ccbp.in/website/react-assignment/resources.json";

// Action types
const FETCH_RESOURCES_SUCCESS = 'FETCH_RESOURCES_SUCCESS';
const FETCH_RESOURCES_ERROR = 'FETCH_RESOURCES_ERROR';

// Action creators
const fetchResourcesSuccess = resources => ({
  type: FETCH_RESOURCES_SUCCESS,
  resources
});

const fetchResourcesError = error => ({
  type: FETCH_RESOURCES_ERROR,
  error
});

// Reducer
const reducer = (state = { 
  resources: [], 
  error: null 
}, action) => {
  switch (action.type) {
    case FETCH_RESOURCES_SUCCESS:
      return {
        ...state,
        resources: action.resources
      };
    case FETCH_RESOURCES_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer, applyMiddleware(thunk));

// Async action
const fetchResources = () => {
  return async dispatch => {
    try {
      const response = await axios.get(resourcesListUrl);
      dispatch(fetchResourcesSuccess(response.data));
    } catch (error) {
      dispatch(fetchResourcesError(error));
    }
  };
};

export { fetchResources, store };
