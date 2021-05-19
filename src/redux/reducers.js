const initState = {
	items: [],
	loading: false,
	error: null,
};

export const postsReducer = (state = initState, action) => {
	switch (action.type) {
		case "FETCH_TWEETS_REQUEST":
			return {
				...state,
				loading: true,
				error: null,
			};
		case "FETCH_TWEETS_SUCCESS":
			return {
				...state,
				loading: false,
				items: action.payload,
			};
		case "FETCH_TWEETS_FAILURE":
			return {
				...state,
				loading: action.error,
				items: [],
			};
		default:
			return state;
	}
};
