import { render, screen } from "@testing-library/react";
import { contactData } from "../../data/DataCV";
import ContactInfo from "./ContactInfo";

describe("Testing for IdentificationInfo component", () => {
  test("True test", () => {
    expect(true).toBe(true);
  });

  test("Check if contact list values are right", () => {
    render(<ContactInfo contactData={contactData} />);
    Object.keys(contactData).forEach((dataKey) => {
      const listValue = screen.getByTestId(dataKey);
      expect(listValue).toHaveTextContent(contactData[dataKey]);
    });
  });
});
