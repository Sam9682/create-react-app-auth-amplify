import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">

		<script>
			function myFunction() {
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
					document.getElementById("my-demo").innerHTML = this.responseText;
					}
				};
				xhttp.open("GET", "https://mxzaxnlhe9.execute-api.eu-west-1.amazonaws.com/default/MyLambda2", true);
				xhttp.send();

			}
		</script>


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Application Web pour la gestion de mairies Amplify / Reac / API / Lambda / DynamoDB / Aurora / Cognito / SNS
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
		<h1>Mairie de Pont Scorff <span id="my-demo">Saisie des temps de travail !</span></h1>
		<button onclick="myFunction()">Cliquez ici pour enregistrer une arrivée</button>
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
