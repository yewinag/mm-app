import {teal500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const CdbTheme = getMuiTheme({
  palette: {
    primary1Color: '#5ec2b1',
  },
  tabs: {
    backgroundColor: 'transparent',
    selectedTextColor: '#5ec2b1',
    textColor: '#4d4d4d'
  },
  inkBar: {
    backgroundColor: '#5ec2b1'
  }
});

export default CdbTheme;
