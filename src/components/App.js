import NavBar from '../components/NavBar';
import React from 'react';
import {IntlProvider, addLocaleData} from 'react-intl';
import {connect} from 'react-redux';

const App = props => {
  return (
      <div>
        <NavBar/>
        <div className="content">
          {props.children}
        </div>
      </div>
  );
};

// const mapStateToProps = state => ({ locales: state.locales });

// export default connect(mapStateToProps)(App);
export default App;
