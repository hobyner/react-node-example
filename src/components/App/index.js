import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import 'src/assets/stylesheets/base.scss';

function packageQuery(name, owner) {
	return gql`
    query {
      repository(name: "${name}", owner: "${owner}") {
        object(expression: "master:package.json") {
          ... on Blob {
            text
          }
        }
      }
    }
  `;
}

	const API = 'http://localhost:8080/api/todos/';

	class TodoD extends Component {
		constructor(props) {
    	super(props);

				this.state = {
      		hits: [],
    		};
			}

				componentDidMount() {
					fetch('API')
						.then(response => response.json())
				    .then(data => this.setState({ hits: data.hits }));
				   }

	render() {
		const { hits } = this.state;

		return (
			<div className="todoListMain">
				<form onSubmit={this.handleSubmit}>
				<input ref={(a) => this._inputElement = a}
								placeholder="Enter Task">
				</input>
						<button type="submit">Add</button>
				</form>
				<ul>
			     {hits.map(hit =>
			       <li key={hit.id}>
	             <a href={hit.title}>{hit.description}</a>
		         </li>
			      )}
			   </ul>
			</div>
		);
	}
}


export default withApollo(TodoD);
