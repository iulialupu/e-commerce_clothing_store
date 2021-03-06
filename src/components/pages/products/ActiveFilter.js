import React from "react";
import { connect } from "react-redux";

import { removeFilter } from "../../../actions";
import RemoveBtn from "../../DeleteBtn";

const ActiveFilter = props => {
  return (
    <div className="active-filter">
      {props.filter.content}
      <RemoveBtn handleClick={() => props.removeFilter(props.filter.key)} />
    </div>
  );
};

export default connect(
  null,
  { removeFilter }
)(ActiveFilter);
