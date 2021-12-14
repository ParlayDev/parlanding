import React from "react";
import Plot from "react-plotly.js";

const BetStats = () => (
  <Plot
    data={[
      {
        x: [1, 2, 4, 6],
        y: [2, 60, 3, 4, 6, 5],
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "purple" },
      },
    ]}
    layout={{
      autosize: true,
      width: 500,
      title: "Win Streak",
      plot_bgcolor: "transparent",
      paper_bgcolor: "transparent",
      margin: {
        l: 50,

        r: 0,

        b: 25,

        t: 40,

        pad: 0,
      },
      xaxis: {
        showgrid: false,
        color: "#FFC0CB",
      },
      yaxis: {
        showgrid: false,
        showline: true,
        color: "#FFC0CB",
      },
    }}
  />
);
export default BetStats;
