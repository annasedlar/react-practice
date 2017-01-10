function calculate(userYear){
	var d = new Date(); 
	var n = d.getFullYear();
	var userAge = (n - userYear); 
	return(userAge); 
}

function Year(props){
	return(
		<div>
			<p> Birthyear is {props.value}. Therefore.... 
			</p>
			<p>You are {props.age} years old!</p>
		</div>	
		)
}

var Form = React.createClass({
	getInitialState: function() {
		return{
			value: "???"
		}
	},

	handleChange: function(event){
		this.setState({
			value: (2017 - event.target.value)
		});
	},

	render: function(){
		var age = calculate();
		return(
			<div>
				<h1>Let us find out how old you are!</h1>
				<form>
					<input type="text" placeholder="Type birthyear" onChange={this.handleChange}/>
					<input type="submit" value="click me!" onClick={this.handleChange} />
					<Year textToDisplay={this.state.value} value={this.age} age={this.state.value} />
				</form>
			</div>
		)
	}
});

ReactDOM.render(
	<Form />, 
	document.getElementById('form')
)




