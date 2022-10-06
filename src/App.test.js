/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-query-by-disappearance */
import {
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import { makeServer } from './server'

let server;

beforeEach(() => {
  server = makeServer({ environment: "test" })
})

afterEach(() => {
  server.shutdown()
})

test('Page loads successfully', async () => {
  render(<App />);

  expect(screen.getByText("Loading...")).toBeInTheDocument()
  expect(screen.getByText("Todos")).toBeInTheDocument()

});
