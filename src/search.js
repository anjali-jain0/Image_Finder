import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Axios from 'axios';
import {ImageResults} from './imageresults';

export class Search extends React.Component {

	constructor(){
		super();
		this.state={
			searchText:'',
			amount:15,
			apiUrl:'https://pixabay.com/api',
			apiKey:'11222568-2ff6bbeab968ccd42a5d1c9ad',
			images:[]
		}
	  }
      
      onTextChange(e){
      	
      	const val=e.target.value;
      	this.setState({ [e.target.name] :val},function(){
      		if(val=== '')
      		{
      			this.setState({images:[]});
      		}
      		else{
      		Axios.get(this.state.apiUrl + '/?key=' +  this.state.apiKey + '&q=' + this.state.searchText + '&image_type=photo&per_page=' + this.state.amount + '&safesearch=true')
      		.then((response) => {
      			this.setState({images:response.data.hits});
      		})
      		.catch((err) => {
      			console.log(err);
      		});
      	}
  });
      }

      onAmountChange(e,index,value){
      	this.setState({amount:value});
      }

	  render() {
	    return (
	    	<div>
	    		<TextField name='searchText' value={this.state.searchText} onChange={this.onTextChange.bind(this)} floatingLabelText='Search For Images' fullWidth={true} />
	    		<br />
	    		<SelectField name='amount' floatingLabelText="Amount" value={this.state.amount} onChange={this.onAmountChange.bind(this)} >

	    		<MenuItem value={5}  primaryText="5" />
	    		<MenuItem value={10} primaryText="10" />
	    		<MenuItem value={15} primaryText="15" />
	    		<MenuItem value={30} primaryText="30" />
	    		<MenuItem value={35} primaryText="35" />

	    		</SelectField>
	    		<br />

	    		{this.state.images.length >0 ?  (<ImageResults images={this.state.images} />) : null }
	    	</div>
	     	
	    );
	  }
	};

