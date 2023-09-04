
import './App.css';
import Plot from 'react-plotly.js';


function App() {
  const data = [{
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
  
  return (
    <div className="App">
      <Plot
        data={data}
        layout={layout}
      />
    </div>
  );
}

export default App;
