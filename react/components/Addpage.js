import React from 'react';
import {addNewPage} from '../actions';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
	return {
		addNewPage({name, email, title, content}) {
			console.log("mapdispatch: dispatching!")
			dispatch(addNewPage({name, email, title, content}));
		}
	}

}

export default connect(null, mapDispatchToProps)(class Addpage extends React.Component {


constructor(props){
	super(props);
console.log("THESE ARE THE Addpage PROPS: ", props)
	this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(evt) {
	const name = evt.target.authorName.value,
			email = evt.target.authorEmail.value,
			title = evt.target.pageTitle.value,
			content = evt.target.pageContent.value;

	evt.preventDefault();
	console.log("Here is the form data: ", {name, email, title, content})
	this.props.addNewPage({name, email, title, content});
}

render() {
	return(
	  <div id='form'>
	  <h3>Add A Page</h3>
	   <form onSubmit={this.handleSubmit}>
	   	<div>
				<label htmlFor='author_name'> Author Name </label>
					<input name="authorName" className="text" type="text" id='author_name'/>

			</div>
			<div>

				<label htmlFor='author_email'> Author Email </label>
					<input name="authorEmail" className="text" type="text" id='author_email'/>

			</div>
			<div>

				<label htmlFor='page_name'> Page Title </label>
					<input name="pageTitle" className="text" type="text" id='page_name'/>


			</div>
			<div>

				<label htmlFor='content'> Content </label>
					<textarea name="pageContent" className="text" />

			</div>{
			// <div>

			// 	<label htmlFor='page_status_open' className="radio_label"> Open </label>
			// 		<input value={statusOpen} type="radio" id='page_status_open' checked={true} />

			// 	<label htmlFor='page_status_close' className="radio_label"> Close </label>
			// 		<input value={statusClosed} type="radio" id='page_status_close'/>

			// </div>
			}<div>
				<input type="submit" />
			</div>
		</form>
	</div>
	)
}

})
