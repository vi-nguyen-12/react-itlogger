import React, { useEffect, useState } from "react";
import LogItem from "./LogItem";
import PreLoader from "../layout/PreLoader";
import { connect } from "react-redux";
import { getLogs } from "../../actions/logActions";
import PropTypes from "prop-types";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};
// Logs.propTypes = {
//   log: propTypes.object.isRequired,
//   getLogs: propTypes.func.isRequired
// };
const mapStateToProps = state => ({
  log: state.log
});
export default connect(mapStateToProps, { getLogs })(Logs);
