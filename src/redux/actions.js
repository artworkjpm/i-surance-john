import axios from "axios";

export const searchText = (text) => (dispatch) => {
	dispatch({
		type: "SEARCHTEXT_UPDATED",
		text,
	});
};

export const fetchPosts = () => async (dispatch, getState) => {
	let { searchText } = getState();
	//https://private-cors-server.herokuapp.com/
	const SEARCH_TWITTER_URL = "https://cors-john.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json";
	const headers = {
		Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`,
	};
	dispatch({
		type: "FETCH_TWEETS_REQUEST",
	});

	try {
		const response = await axios.get(`${SEARCH_TWITTER_URL}?q=%23${searchText}&lang=es&count=100`, { headers: headers });
		console.log(response.data.statuses);
		dispatch({
			type: "FETCH_TWEETS_SUCCESS",
			payload: response.data.statuses,
		});
	} catch (error) {
		dispatch({
			type: "FETCH_TWEETS_FAILURE",
			error,
		});
	}
};
