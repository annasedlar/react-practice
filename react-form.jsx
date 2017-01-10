



var Form = React.createClass({
	getInitialState: function() {
		return{
			value: '2017'
		}
	},

	handleChange: function(event){
		this.setState({
			value: event.target.value
		});
	},

	render: function(){
		return(
			<div>
				<h1>How old are you?</h1>
				<form>
					<input type="text" textToDisplay="Type birthyear" />
					<input type="submit" value="click me!" onClick={this.handleChange} />
				</form>
			</div>
		)
	}
});

ReactDOM.render(
	<Form />, 
	document.getElementById('form')
)




