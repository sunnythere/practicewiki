import axios from 'axios';


//constants
export const SELECTED_PAGE = 'SELECTED_PAGE';
export const NEW_PAGE = 'NEW_PAGE';



//action creators
const selectPage = (page) => {
	return {
		type: SELECTED_PAGE,
		currentArticle: page
	}
}

const newPage = (page) => {
	return {
		type: NEW_PAGE,
		page
	}
}


export const addNewPage = ({name, email, title, content}) => {
	return (dispatch, getState) => {
		console.log('hello')
		return axios.post('/wiki', {
			name, email, title, content
		})
		.then(res => {
			return res.data})
		.then((newArticle) => {
			//console.log("addNewPage: newArticle: ", newArticle)
			getState().articles.concat(newArticle);
			dispatch(newPage(newArticle));
		})

	}
}
