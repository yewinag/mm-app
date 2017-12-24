import React from 'react';
import update from 'immutability-helper';
import {connect} from 'react-redux';
import {FormattedMessage, FormattedNumber} from 'react-intl';


// import {setOptions} from '../actions/navBarActions';
// import {getTotalCarCount} from '../constants/endpoints';
// import RecentCarsList from './RecentCarsList';
// import {fetchCarsIfNeeded, fetchPremiumDealerCarsIfNeeded, fetchPremiumCarsIfNeeded} from '../actions/carsActions';

const Carousel = require('nuka-carousel');


const stateModel = {
  carCount: 10000,
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = stateModel;
  }

  componentDidMount() {
    this.props.dispatch(setOptions({ title: 'Home', menu: 'search' }));
  }

  render() {
    return (
      <div style={{backgroundColor:"#ebebeb"}}>
          <div>
              Home Page
          </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({ cars: state.cars.cars });

// export default connect(mapStateToProps)(HomePage);
export default HomePage;
