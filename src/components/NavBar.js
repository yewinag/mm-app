import React from 'react';
import update from 'immutability-helper';
import {FormattedMessage} from 'react-intl';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem, makeSelectable} from 'material-ui/List';

class  NavBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div>
        nav bar
      </div>
    )
  }
}

export default NavBar;
