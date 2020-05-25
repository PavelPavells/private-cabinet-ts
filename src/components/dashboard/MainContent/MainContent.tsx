import React, { Component } from "react";
import "./MainContent.scss";
//import { connect } from "react-redux";
//import Modal from "./Modal/Modal";
class Tasks extends Component {
  state = {
    modal: false
  };
  // @ts-ignore
  toggleModal = e => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    //const { projects } = this.props.projects;
    return (
      <div className="main-content">
        <h1 className="header">Your Tasks</h1>
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   projects: state.projects
// });

// export default connect(
//   mapStateToProps,
//   {}
// )(Tasks);
export default Tasks;