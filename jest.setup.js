// jest.setup.js

// Add other global setup tasks here if needed

// Example: Mocking useRouter for component testing
import {server} from './mock/server';

beforeAll(() => {
  // Establish API mocking before all tests.
  server.listen();
});
afterEach(() => {
  // Reset any request handlers that are declared as a part of tests
  // so they don't affect other tests.
  server.resetHandlers();
}
);
afterAll(() => {
  // Clean up after the tests are finished.
  server.close();
}
);
// jest.mock('next/router', () => ({
//   useRouter() {
//     return {
//       route: '/',
//       pathname: '/',
//       query: {},
//       push: jest.fn(),
//       replace: jest.fn(),
//       reload: jest.fn(),
//       prefetch: jest.fn(),
//       beforePopState: jest.fn(),
//       events: {
//         on: jest.fn(),
//         off: jest.fn(),
//         emit: jest.fn(),
//       },
//       isReady: true,
//     };
//   },
// }));

// Example: Mocking next/image (if you're not using the moduleNameMapper for it)
jest.mock('next/image', () => (props) => <img {...props} alt={props.alt} />);

// Example: Mocking modules or functions you use globally in tests
// jest.mock('your-global-module');