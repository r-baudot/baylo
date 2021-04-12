import React from "react";
// https://devexpress.github.io/devextreme-reactive/react/chart/demos/pie/pie/
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

const PieChart = ({ producthuntPostsTopics }) => {
  //   console.log("producthuntPostsTopics", producthuntPostsTopics);

  //   producthuntPostsTopics.map((topics) => {
  //     console.log("Add key to array");
  //     console.log((topics.val = 1));
  //   });

  //   console.log("producthuntPostsTopics", producthuntPostsTopics);

  return (
    <Paper>
      <Chart data={producthuntPostsTopics}>
        <PieSeries valueField="val" argumentField="name" innerRadius={0.6} />
        <Title text="The Population of Continents and Regions" />
        <Animation />
        <Legend />
      </Chart>
    </Paper>
  );
};

export default PieChart;
