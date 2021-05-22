const initState = {
	items: [],
	amount: 10,
	searchText: "hulk",
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
			if (state.items.length === action.payload.length) {
				alert("No more tweets available");
			}
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
		case "SEARCHTEXT_UPDATED":
			return {
				...state,
				searchText: action.text,
			};
		case "UPDATE_TWEETS_AMOUNT":
			return {
				...state,
				amount: action.amount,
			};
		default:
			return state;
	}
};
