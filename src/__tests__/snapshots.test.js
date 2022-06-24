import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import HomePage from '../components/home/HomePage';
import DetailsPage from '../components/details/DetailsPage';
import ErrorPage from '../components/error/ErrorPage';
import Navigation from '../components/navigation/Navigation';

describe('Snapshot test for Home page', () => {
  it('It should render an identical design', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Snapshot test for Details page', () => {
  it('It should render an identical design', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <DetailsPage />
        </Router>
      </Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Snapshot test for Error page', () => {
  it('It should render an identical design', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <ErrorPage />
        </Router>
      </Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Snapshot test for Navigaion page', () => {
  it('It should render an identical design', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Navigation />
        </Router>
      </Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
