import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import TodoItems from "./TodoItems";
import 'src/assets/stylesheets/base.scss';

	const API = 'http://localhost:8080/api/todos/';

	class TodoD extends Component {
		constructor(props) {
    	super(props);

				this.state = {
      		items: [],
    		};

				this.addItem = this.addItem.bind(this);
		    this.deleteItem = this.deleteItem.bind(this);

			}

	componentDidMount() {
		fetch('API')
			.then(response => response.json())
		  .then(data => this.setState({ items: data.items }));
	 }

	 addItem(e) {
     if (this._inputElement.value !== "") {
       const newItem = {
         text: this._inputElement.value,
         key: Date.now()
       };

       this.setState((prevState) => {
         return {
           items: prevState.items.concat(newItem)
         };
       });
     }

     this._inputElement.value = "";

     console.log(this.state.items);

     e.preventDefault();
   }

   deleteItem(key) {
     console.log("Key in deleteItem: " + key);
     console.log("Items at delete: " + this.state.Items);
     const filteredItems = this.state.items.filter(function (item) {
       return (item.key !== key)
     });

     this.setState({
       items: filteredItems
     });
   }

	render() {
		const { items } = this.state;

		return (
			<div className="todoListMain">
				<div className="header">
				<form onSubmit={this.handleSubmit}>
				<input ref={(a) => this._inputElement = a}
								placeholder="Enter Task">
				</input>
						<button type="submit">Add</button>
				</form>
				</div>
				<TodoItems entries={this.state.items}
                  delete={this.deleteItem}/>
			</div>
		);
	}
}


export default withApollo(TodoD);
