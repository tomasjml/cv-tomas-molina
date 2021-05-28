import { render, screen } from "@testing-library/react";
import App from "./App";
import { name } from "./data/DataCV";

// Resources

describe("Testing for App component", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(new RegExp(name, "i"));
    expect(linkElement).toBeInTheDocument();
  });

  test("Check if document title is Tomas' CV", () => {
    expect(document.title).toEqual("Tomas' CV");
  });

  // test("Check if logo is logo192 or logo512", () => {
  //   const logoName = document.querySelector("head #favicon");
  //   console.log(logoName);
  // });
});
