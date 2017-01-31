import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const colors = {
  primaryColor: '#0984A0',
  accentColor: '#0A2E36',
  textColor: '#004549',
};

const UUmuiTheme = getMuiTheme({
  fontFamily: 'Raleway, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
  palette: {
    primary1Color: colors.primaryColor,
    accent1Color: colors.accentColor,
    textColor: colors.textColor,
  },
});

export default function MuiApp(props) {
  return (
    <MuiThemeProvider muiTheme={UUmuiTheme}>
      <div className="mui-app">
        {props.children}
      </div>
    </MuiThemeProvider>
  );
}

MuiApp.propTypes = {
  children: PropTypes.node.isRequired,
};
