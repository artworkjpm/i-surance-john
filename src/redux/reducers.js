const initState = [];

export const postsReducer = (state = initState, action) => {
	console.log("ACTION");
	switch (action.type) {
		case "INC":
			return state + 1;
		case "DEC":
			return state - 1;
		default:
			return state;
	}
};
