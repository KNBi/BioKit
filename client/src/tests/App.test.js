import { cleanup, findByText, getByText, render, screen} from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App';
import axios from 'axios';

jest.mock('axios');

describe('App', () => {
  describe('when the fetch operation failed', () => {
    it('shows error message', () => {
      const { getByText } = render(<App />);
      expect(getByText(/Could not connect to server/i)).toBeInTheDocument();
      cleanup();
    });
  });

  describe('when the fetch operation is done', () => {
    it('shows message from server', async () => {
      const getSpy = jest.spyOn(axios, 'get');
      const appInstance = shallow(<App />);
      expect(getSpy).toBeCalled();
      cleanup();
    })
  })
});