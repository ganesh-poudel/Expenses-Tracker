import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
	const enteredYearHandler = (e) => {
		const enteredYear = e.target.value;
		props.onYearSelected(enteredYear);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select value = {props.selected} onChange={enteredYearHandler}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;
