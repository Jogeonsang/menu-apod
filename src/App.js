import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import MenuNavigator from './components/MenuNavigator';

class App extends Component {
  render() {
    return (
      <ViewerTemplate
        menuNavigator={<MenuNavigator/>}
      />
    );
  }
}

export default App;