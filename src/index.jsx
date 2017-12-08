import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Template from './components/Template';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/musiclist.scss';

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};

renderApp(Template);

if (module && module.hot) {
  module.hot.accept('./components/Template', () => {
    renderApp(Template);
  });
}
