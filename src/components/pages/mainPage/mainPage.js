import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../buttons';
import { increment } from '../../../redux/actions';
class MainPage extends Component {
  constructor() {
    super();
    console.log(`constructor MainPage`);
  }
  onClick = e => {
    e.preventDefault();
    console.log(`onClick MainPage`);
    this.props.increment({ payload: 1 });
  };
  render = () => {
    console.log(`render MainPage`);
    return (
      <div>
        mainPage {this.props.counter.count}
        <br />
        <Button onClick={this.onClick} value={`increment`} />
      </div>
    );
  };
}
const mapStateToProps = ({ counter }) => {
  return {
    counter
  };
};
const mapDispatchToProps = {
  increment
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
