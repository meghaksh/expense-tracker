import react from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // here we are getting dataPoints as a prop.
  // datapoints consists of objects but we need values.
  // So, We map only the values inside dataPoint object.
  // and pass this to dataPointValues array.
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  /**To calculate the total maximum, we find the
   * max from the above array with all the values.
   * This max method will receive 12 values for each month
   * and we are extracting the max value out of all.  */
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
