import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './components/app';
import '../assets/stylesheets/application.scss';
import citiesReducer from './reducers/cities_reducer';
import activeCityReducer from './reducers/active_city_reducer';

// State and reducers
 // const reducers = combineReducers({
 //   changeMe: (state = null, action) => state
 // });
const reducers = combineReducers({
	cities: citiesReducer,
	city: activeCityReducer,
	// this needs to be
	// the select city action

	//keys / reducers
});
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
