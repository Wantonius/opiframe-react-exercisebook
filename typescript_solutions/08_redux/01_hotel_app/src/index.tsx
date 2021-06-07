import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, Store} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {HotelAction} from './actions/actionTypes';
import {HotelState} from './reducers/stateTypes';
import hotelReducer from './reducers/hotelReducer';
import {DispatchType} from './actions/actionTypes';


const store:Store<HotelState, HotelAction> & {dispatch:DispatchType} = createStore(hotelReducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
