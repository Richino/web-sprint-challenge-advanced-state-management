import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index";

const SmurfList = props => {
	useEffect(() => {
		props.fetchSmurfs();
	}, []);

	if (props.isLoading === true) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className="listContainer">
			{props.data.map(list => {
				return <Smurf smurf={list} key={list.id} />;
			})}
		</div>
	);
};

const database = state => {
	return {
		data: state.smurfs,
	};
};

export default connect(database, { fetchSmurfs })(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
