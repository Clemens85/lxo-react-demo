import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { act } from "react-dom/test-utils";
import {Callout} from "./Callout";
import React from "react";

test('Passed content should be rendered in Callout with close button', () => {

  render(<Callout show={true} closeable={true}>Foo</Callout>);
  // This is a very cool feature: It shows how your component is rendered in the DOM:
  screen.debug(document);

  const result = screen.getByText('Foo');
  expect(result).toBeInTheDocument();

  // Note 1: If you specify a wrong role name, you get a nice list of all available roles in document (just try it out)
  // Note 2: Modern frameworks like Material or Bootstrap automatically setup very reasonable roles to all UI components
  const closeBtn = screen.getByRole('button');
  expect(closeBtn).toBeInTheDocument();
});

test('Callout should not be shown when condition is not met', () => {

  render(<Callout show={false} closeable={true}>Foo</Callout>);
  expect(screen.queryByText('Foo')).not.toBeInTheDocument();
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
});

test('Callout is closed when user manually closes it', () => {

  render(<Callout show={true} closeable={true}>Foo</Callout>);
  expect(screen.queryByText('Foo')).toBeInTheDocument();

  const closeBtn = screen.getByRole('button');
  fireEvent.click(closeBtn);
  // act(() => {}); // Typically you would let pass one cycle in the DOM

  expect(screen.queryByText('Foo')).not.toBeInTheDocument();
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
});