import axios from "axios";

export const fetchPosts = () => async (dispatch, getState) => {
	const SEARCH_TWITTER_URL = "https://cors-john.herokuapp.com/https://api.twitter.com/2/tweets/search/recent";

	const headers = {
		Authorization: `OAuth oauth_consumer_key=${process.env.REACT_APP_API_KEY},oauth_token=${process.env.REACT_APP_ACCESS_TOKEN},oauth_signature_method="HMAC-SHA1",oauth_timestamp="1621440571",oauth_nonce="iJGPl3Z1gZC",oauth_version="1.0",oauth_signature="ALQc4K%2FhPplpZEGXIaCwu2wEFWI%3D"`,
	};

	dispatch({
		type: "FETCH_TWEETS_REQUEST",
	});

	try {
		const response = await axios.get(`${SEARCH_TWITTER_URL}?query=arsenal`, { headers: headers });
		console.log(response.data.data);

		dispatch({
			type: "FETCH_TWEETS_SUCCESS",
			payload: response.data.data,
		});
	} catch (error) {
		dispatch({
			type: "FETCH_TWEETS_FAILURE",
			error,
		});
	}
};
