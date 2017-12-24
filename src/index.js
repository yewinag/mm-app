import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './containers/Root';
import CdbTheme from './UI/CdbTheme';

require('./favicon.jpg');

injectTapEventPlugin();

(function () {
  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();

function runApp() {
  render(
    <MuiThemeProvider muiTheme={CdbTheme}>
      <Root />
    </MuiThemeProvider>,
    document.getElementById('root')
  );
}

if (!global.Intl) {
    require.ensure([
        'intl',
        'intl/locale-data/jsonp/en.js'
    ], function (require) {
        require('intl');
        require('intl/locale-data/jsonp/en.js');
        runApp()
    });
} else {
    runApp()
}
