import React from "react";
import { Table as AntdTable } from "antd";
import PropTypes from "prop-types";

// Mockdata
import data from "../../mockData/users";
import columns from "../../mockData/columns";

function Table(props) {
  const { data, columns } = props;
  return <AntdTable columns={columns} dataSource={data} />;
}

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};

Table.defaultProps = {
  columns: columns,
  data: data,
};

export default Table;
