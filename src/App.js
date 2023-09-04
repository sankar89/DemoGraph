
import './App.css';
import Plot from 'react-plotly.js';


function App() {
  const pieChartData = [{
    type: "pie",
    values: [2, 3, 4, 4],
    labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
    textInfo: "label+percent",
    insideTextOrientation: "radial"
  }]
  const layout = [{
    height: 1000,
    width: 1000
  }];
  
  var trace1 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    name: 'SF Zoo',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [12, 18, 29],
    name: 'LA Zoo',
    type: 'bar'
  };
  const data = [trace1, trace2];
  const barLayout = {barmode: 'group'};

  return (
    <div className="App">
      <h1>Pie Chart</h1>
      <Plot
        data={pieChartData}
        layout={layout}
      />
      <h1>Bar Chart</h1>
      <Plot
        data={data}
        layout={barLayout}
      />
    </div>
  );
}

export default App;
