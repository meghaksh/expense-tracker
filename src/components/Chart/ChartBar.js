import react from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  /**Here the barFillHeight is given string value because \
   * it is going to be asssigned as a style in JSX. 
   * We calculate this barFillHeight dynamically based on the value.  */
  let barFillHeight = '0%';
  if(props.maxValue > 0){
      barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* Here the style is assigned dynamically. 
        Here style looks for dynamic values which are javascript object. 
        So outer curly braces is for dynamic values and inner braces are for javascript object with key-value pairs. 
        If the propertyname(key) has a dash, then put under quote or use camel case. Otherwise it won't work
        For ex, style={{'background-color':'red'}}, or style={{backgroundColor:'red'}}
        */}
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
