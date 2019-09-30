import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Styles
import './styles.css';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

const VoteDiagram = ({ pollId, votes }) => {
  // group votes by value
  const pollVotes = votes.filter((vote) => vote.poll === pollId);
  const groupedVotes = pollVotes.reduce((res, vote) => {
    if (!res[vote.voteValue]) res[vote.voteValue] = 0;
    res[vote.voteValue] += 1;
    return res;
  }, {});
  const chartData = Object.keys(groupedVotes).map(
    (key) => ({ vote: key, count: groupedVotes[key] }),
  );
  chartData.sort((a, b) => a.vote - b.vote);

  // initialize chart
  const setChart = (data) => {
    const chart = am4core.create(`chart${pollId}`, am4charts.XYChart);
    chart.data = data;
    chart.paddingLeft = 0;

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'vote';
    categoryAxis.title.text = 'Votes value';
    categoryAxis.fontSize = 13;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'Votes count';
    valueAxis.fontSize = 13;

    const series = chart.series.push(new am4charts.ColumnSeries());

    series.dataFields.valueY = 'count';
    series.dataFields.categoryX = 'vote';

    return chart;
  };

  useEffect(() => {
    setChart(chartData);
  }, [votes]);

  return (
    <div className="vote-diagram" id={`chart${pollId}`} />
  );
};

VoteDiagram.propTypes = {
  votes: PropTypes.arrayOf(PropTypes.any).isRequired,
  pollId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({ votes: state.votes });

export default connect(mapStateToProps)(VoteDiagram);
