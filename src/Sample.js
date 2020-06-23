import React,{Component} from 'react';

class Sample extends Component{
	constructor(){
		super();
		this.state={
			name:"Aksha",
			age:"20",
			count:0
		}
	}
	increment=()=>{
		this.setState({
			count:this.state.count+1

		})
	}
	render(){
		return (
			<div style={{textAlign:"center"}}>
			    {/*JSX-->Javascript eXtension */}
			    <h2> {this.props.key} </h2>
			    <button onClick={this.increment}> Increment </button>
	        </div>
	    )
    }
}



export default Sample;