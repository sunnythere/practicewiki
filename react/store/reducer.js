import {SELECTED_PAGE, NEW_PAGE} from '../actions/';


const initialState = {
	currentArticle: {},
	articles: [],

}

export default (state = initialState, action) => {

	const newState = Object.assign({}, state);

	switch (action.type) {

		case SELECTED_PAGE:
			newState.currentArticle = action.page;
			break;

		case NEW_PAGE:
			newState.articles = newState.articles.concat(action.page);
			break;

		default:
			return state;
	}

	return newState;
}
