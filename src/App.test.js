import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import HomePage from './components/HomePage';
import LandingSection from './components/LandingSection';

test('renders learn react link', () => {
  render(<Router><LandingSection /></Router>);
  const linkElement = screen.getByText('Little Lemon');
  expect(linkElement).toBeInTheDocument();
});
