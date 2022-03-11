const dataset = [
  11, 22, 33, 44, 55, 66, 77, 80, 71, 62, 53, 44, 35, 26, 27, 19,
];

const width = window.innerWidth * 0.5,
  dimensions = {
    width: width,
    height: width - 100,
    margin: {
      top: 10,
      right: 10,
      bottom: 50,
      left: 40,
    },
  };

dimensions.boundedWidth =
  dimensions.width - dimensions.margin.right - dimensions.margin.left;
dimensions.boundedHeight =
  dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

const svg = d3.select("#wrapper").append("svg");
