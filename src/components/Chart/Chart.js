import React from "react";
import "./Chart.css";
import "./ChartBar";
import ChartBar from "./ChartBar";
const Chart = (props) => {
	const dataPointValues = props.dataPoints.map((dataPointValue) => {
		return dataPointValue.value;
	});

    const totalMaxium = Math.max(...dataPointValues);
    
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaxium}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};
export default Chart;
