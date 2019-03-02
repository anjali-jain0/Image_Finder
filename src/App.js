import React from 'react';
import {Navbar} from './navbar';
import {Search} from './search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class App extends React.Component {

  render() {
    return (
     <MuiThemeProvider>
     <div>
     <Navbar />
     <Search />
     </div>
     </MuiThemeProvider>
    );
  }
};

