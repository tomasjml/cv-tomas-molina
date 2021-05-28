import { render, screen } from '@testing-library/react';
import App from './App';
import {
  name
} from "./data/DataCV";

describe("Testing for App component", () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(new RegExp(name, "i"));
    expect(linkElement).toBeInTheDocument();
  });
})

