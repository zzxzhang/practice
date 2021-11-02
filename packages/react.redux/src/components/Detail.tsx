import React from "react";
import PropTypes from "prop-types";

interface Props {
  count: number;
}

const Detail = (props: Props) => {
  return <li>parent: {props.count}</li>;
};

Detail.propTypes = {
  count: PropTypes.number,
};

export default Detail;
