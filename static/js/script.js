var data1 = [
  {
    values: [100],
    labels: [
      "Liquidity"
    ],
    type: "pie",
    textinfo: "label+percent",
    color: 'rgb(16, 32, 77)'
  },
];

var layout = {
  //   height: 400,
  //   width: 500,
};

Plotly.newPlot("myPie", data1, layout);

// var data = [
//   {
//     values: [40, 60],
//     labels: ["Mining output", "Pledge Output"],
//     type: "pie",
//     textinfo: "label+percent",
//   },
// ];

// var layout = {
//   //   height: 400,
//   //   width: 500,
// };

// Plotly.newPlot("myTokenPie", data, layout);
