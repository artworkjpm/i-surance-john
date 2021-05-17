import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import { postsReducer } from "./redux/reducers";
import reportWebVitals from "./reportWebVitals";
import logger from "redux-logger";

const myLogger = (store) => (next) => (action) => {
	if (store.getState() >= 10) {
		return next({ type: "DEC" });
	}
	return next(action);
};

const store = createStore(postsReducer, applyMiddleware(myLogger, logger));
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
