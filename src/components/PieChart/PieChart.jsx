import React from 'react';
import PropTypes from 'prop-types';

import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => (
  <div className="d-flex justify-content-center">
    <Pie data={data} />
  </div>
);

PieChart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default PieChart;
