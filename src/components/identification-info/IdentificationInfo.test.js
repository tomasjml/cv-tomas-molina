import { render, screen } from "@testing-library/react";
import { getByTestId } from "@testing-library/jest-dom";
import IdentificationInfo from "./IdentificationInfo";
// Resources
import tomasMolina from "../../images/jotate.jpg";

import { name, dedication } from "../../data/DataCV";

describe("Testing for IdentificationInfo component", () => {
  test("Checks if name is right name", () => {
    require("../../data/DataCV");
    render(
      <IdentificationInfo
        name={name}
        dedication={dedication}
        yourImage={tomasMolina}
      />
    );
    const linkElement = screen.getByTestId("name");
    expect(linkElement).toHaveTextContent(name);
  });

  test("Checks if dedication is right dedication", () => {
    require("../../data/DataCV");
    render(
      <IdentificationInfo
        name={name}
        dedication={dedication}
        yourImage={tomasMolina}
      />
    );
    const linkElement = screen.getByTestId("dedication");
    expect(linkElement).toHaveTextContent(dedication);
  });

  test("Image must have src and alt", () => {
    require("../../data/DataCV");
    render(
      <IdentificationInfo
        name={name}
        dedication={dedication}
        yourImage={tomasMolina}
      />
    );
    const linkElement = screen.getByTestId("image");
    expect(linkElement).toHaveAttribute("src", tomasMolina);
    expect(linkElement).toHaveAttribute("alt", "A picture of: " + name);
  });
});
