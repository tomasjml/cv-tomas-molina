import { render, screen } from '@testing-library/react';
import { getByTestId } from '@testing-library/jest-dom';
import IdentificationInfo from './IdentificationInfo';
// Resources
import tomasMolina from "../../images/jotate.jpg";

import {
    name,
    dedication,
    contactData
} from "../../data/DataCV";

test('checks if name is right name', () => {
    require('../../data/DataCV');
    render(<IdentificationInfo name={name} dedication={dedication} yourImage={tomasMolina}/>);
    const linkElement = screen.getByTestId('name');
    expect(linkElement).toHaveTextContent(name);
});
  