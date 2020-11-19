import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize";
import { updateLog } from "../../actions/logActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const EditLogModal = ({ log: { current }, updateLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const newLog = { ...current, message, tech, attention };
      console.log(newLog);
      updateLog(newLog);
      //clear fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                {" "}
                Select Technician
              </option>
              <option value="John Doe"> John Doe</option>
              <option value="Sam Smith"> Sam Smith</option>
              <option value="Sara Wilson"> Sara Wilson</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};
const modalStyle = {
  width: "75%",
  height: "75%"
};
EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  log: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  log: state.log
});
export default connect(mapStateToProps, { updateLog })(EditLogModal);
