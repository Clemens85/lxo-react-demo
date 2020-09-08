import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import React from "react";
import ExampleApp from "./ExampleApp";

test('Complete Example App should be successfully mounted and Navigation is rendered', () => {

  render(<ExampleApp />);
  expect(screen.queryByRole('link', {name: /Redux/i})).toBeInTheDocument();
  expect(screen.queryByRole('link', {name: /Basic/i})).toBeInTheDocument();
  expect(screen.queryByRole('link', {name: /i18n/i})).toBeInTheDocument();
  expect(screen.queryByRole('link', {name: /Form/i})).toBeInTheDocument();
});
