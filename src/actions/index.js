import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const ADD = "ADD";
export function fetchSmurfs() {
	return dispatch => {
		axios
			.get("http://localhost:3333/smurfs")
			.then(res => {
				dispatch({ type: FETCH_DATA, payload: res.data });
			})
			.catch(err => {
				console.log(err);
			});
	};
}

export function addSmurf(data) {
	return { type: ADD, payload: data };
}

export function errorMessage(err) {
	return { type: ERROR_MESSAGE, payload: err };
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
