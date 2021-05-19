import axios from "axios";

export const fetchPosts = () => async (dispatch, getState) => {
	const API_KEY = "yoioBYllFiL5GpGelbK2RDSrm";
	const API_SECRET_KEY = "5jmzCwGXI3l2dJQ5o6pg9j0mZu9u4BZY0CIJwjjG0UT2ysAmPq";
	const TWITTER_BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAHU1PwEAAAAAxgvrRIVbcemkJwZF%2FtWayPMIWj4%3DSad7myAf9I3JD62X6I4I8tO8Q2nGE6qhg7C5ORDq6tKKJ4WNlE";
	const ACCESS_TOKEN = "69931513-ZlF6fnNTlFO1FXvEbR2Z9qhXoSVYfIOGBuwF0v8We";
	const ACCESS_TOKEN_SECRET = "kDF1NulKr3ZCWUYCDHnshT2ExVsfCzw5PJeL89YjeklhC";
	const SEARCH_TWITTER_URL = "https://cors-john.netlify.app/https://api.twitter.com/2/tweets/search/recent";

	const headers = {
		Authorization: 'OAuth oauth_consumer_key="yoioBYllFiL5GpGelbK2RDSrm",oauth_token="69931513-ZlF6fnNTlFO1FXvEbR2Z9qhXoSVYfIOGBuwF0v8We",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1621425786",oauth_nonce="6LdG6ElFKbh",oauth_version="1.0",oauth_signature="HnrS1FBvQTWUkAKz7HunrCIsscg%3D"',
	};

	dispatch({
		type: "FETCH_TWEETS_REQUEST",
	});

	try {
		const response = await axios.get(`${SEARCH_TWITTER_URL}?query=arsenal`, headers);
		console.log(response);

		dispatch({
			type: "FETCH_TWEETS_SUCCESS",
			payload: response.body,
		});
	} catch (error) {
		dispatch({
			type: "FETCH_TWEETS_FAILURE",
			error,
		});
	}
};
