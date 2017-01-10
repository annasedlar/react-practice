function Calculate(userYear){
	var d = new Date(); 
	var n = d.getFullYear();
	var userAge = (n - userYear); 
	return(userAge); 
}

function Year(props){
	return(
		<div>
			<p> Birthyear is {props.textToDisplay}. Therefore.... 
			</p>
			<p>You are {props.value} years old!</p>
		</div>	
		)
}

var Form = React.createClass({
	getInitialState: function() {
		return{
			value: ''
		}
	},

	handleChange: function(event){
		this.setState({
			value: event.target.value
		});
	},

	render: function(){
		var age = Calculate()
		return(
			<div>
				<h1>Let us find out how old you are!</h1>
				<form>
					<input type="text" defaultValue="Type birthyear" />
					<input type="submit" value="click me!" onClick={this.handleChange} />
					<Year textToDisplay={this.state.value} value={this.age}/>
				</form>
			</div>
		)
	}
});

ReactDOM.render(
	<Form />, 
	document.getElementById('form')
)




