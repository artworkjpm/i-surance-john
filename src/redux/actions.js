import { ajax } from "rxjs/ajax";

export const searchText = (text) => (dispatch) => {
	dispatch({
		type: "SEARCHTEXT_UPDATED",
		text,
	});
};

export const updateAmount = (amount) => (dispatch) => {
	dispatch({
		type: "UPDATE_TWEETS_AMOUNT",
		amount: amount + 10,
	});
};

export const fetchPosts = (text, amount) => async (dispatch) => {
	//Try https://private-cors-server.herokuapp.com/ if https://cors-john.herokuapp.com is failing
	const SEARCH_TWITTER_URL = `${process.env.REACT_APP_PROXY}https://api.twitter.com/1.1/search/tweets.json`;
	const headers = {
		Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAHU1PwEAAAAAxgvrRIVbcemkJwZF%2FtWayPMIWj4%3DSad7myAf9I3JD62X6I4I8tO8Q2nGE6qhg7C5ORDq6tKKJ4WNlE`,
	};
	dispatch({
		type: "FETCH_TWEETS_REQUEST",
	});

	ajax({
		url: `${SEARCH_TWITTER_URL}?q=%23${text}&lang=es&count=${amount}`,
		method: "GET",
		headers,
	}).subscribe({
		next: (res) => {
			dispatch({
				type: "FETCH_TWEETS_SUCCESS",
				payload: res.response.statuses,
			});
		},
		error: (error) => {
			dispatch({
				type: "FETCH_TWEETS_FAILURE",
				error,
			});
		},
	});
};
