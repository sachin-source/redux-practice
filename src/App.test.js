import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

afterEach(cleanup);

test('Existance of submit buttons', () => {
  render(<Provider store={store} >
    <App />
  </Provider>);
  const linkElement = screen.getByText(/to ad inventory/i);
  expect(linkElement).toBeInTheDocument();
});

test('presence of all the filters', () => {
  render(<Provider store={store} >
    <App />
  </Provider>);

  const videoElement = screen.getByTestId('video')
  expect(videoElement).toBeInTheDocument();
  const InsightsCategory = screen.getByTestId('insightsCategory');
  expect(InsightsCategory).toHaveTextContent('Insights Category');
  const filter0 = screen.getByTestId('filter-0')
  expect(filter0).toHaveTextContent('VPP')
  const filter1 = screen.getByTestId('filter-1')
  expect(filter1).toHaveTextContent('Object')
  const filter2 = screen.getByTestId('filter-2')
  expect(filter2).toHaveTextContent('Activity')
  const filter3 = screen.getByTestId('filter-3')
  expect(filter3).toHaveTextContent('Emotion')
  const filter4 = screen.getByTestId('filter-4')
  expect(filter4).toHaveTextContent('Celebrity')
  const filter5 = screen.getByTestId('filter-5')
  expect(filter5).toHaveTextContent('Scenes')
})

test('Presence of dropdowns with default values', () => {
  render(<Provider store={store} >
    <App />
  </Provider>);
  
  const categoryDropdown = screen.getByTestId('category-dropdown');
  const productDropdown = screen.getByTestId('product-dropdown');
  const episodeDropdown = screen.getByTestId('episode-dropdown');
  // expect(categoryDropdown).toContainHTML('<select>')
  expect(categoryDropdown).toBeInTheDocument()
  expect(productDropdown).toBeInTheDocument()
  expect(episodeDropdown).toBeInTheDocument()
})

test('Presence of video timeline', () => {
  render(<Provider store={store} >
    <App />
  </Provider>);

  const timeline = screen.getByTestId('video-timeline');
  expect(timeline).toBeInTheDocument();
})

test('Play button availablity of video', () => {
  render(<Provider store={store} >
    <App />
  </Provider>);

  const playButton = screen.getByTestId('PlayArrowIcon');
  expect(playButton).toBeInTheDocument();
})

test('Check accordians', () => {
  render(<Provider store={store} >
    <App />
  </Provider>);

  const accordian0 = screen.getByTestId('accordian-0');
  expect(accordian0).toBeInTheDocument();
  const accordian1 = screen.getByTestId('accordian-1');
  expect(accordian1).toBeInTheDocument();
  const accordian2 = screen.getByTestId('accordian-2');
  expect(accordian2).toBeInTheDocument();
  const accordian3 = screen.getByTestId('accordian-3');
  expect(accordian3).toBeInTheDocument();
  const accordian4 = screen.getByTestId('accordian-4');
  expect(accordian4).toBeInTheDocument();
  const accordian5 = screen.getByTestId('accordian-5');
  expect(accordian5).toBeInTheDocument();
})

test('Check accordian titles', () => {
  render(<Provider store={store} >
    <App />
  </Provider>);

  const accordian0 = screen.getByTestId('accordian-title-0');
  expect(accordian0).toBeInTheDocument();
  const accordian1 = screen.getByTestId('accordian-title-1');
  expect(accordian1).toBeInTheDocument();
  const accordian2 = screen.getByTestId('accordian-title-2');
  expect(accordian2).toBeInTheDocument();
  const accordian3 = screen.getByTestId('accordian-title-3');
  expect(accordian3).toBeInTheDocument();
  const accordian4 = screen.getByTestId('accordian-title-4');
  expect(accordian4).toBeInTheDocument();
  const accordian5 = screen.getByTestId('accordian-title-5');
  expect(accordian5).toBeInTheDocument();
})

test('Check accordian body content', () => {
  render(<Provider store={store} >
    <App />
  </Provider>);

  const accordian0 = screen.getByTestId('accordian-body-0');
  expect(accordian0).toBeInTheDocument();
  const accordian1 = screen.getByTestId('accordian-body-1');
  expect(accordian1).toBeInTheDocument();
  const accordian2 = screen.getByTestId('accordian-body-2');
  expect(accordian2).toBeInTheDocument();
  const accordian3 = screen.getByTestId('accordian-body-3');
  expect(accordian3).toBeInTheDocument();
  const accordian4 = screen.getByTestId('accordian-body-4');
  expect(accordian4).toBeInTheDocument();
  const accordian5 = screen.getByTestId('accordian-body-5');
  expect(accordian5).toBeInTheDocument();
})