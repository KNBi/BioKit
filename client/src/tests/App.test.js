import { cleanup } from '@testing-library/react';
import axios from 'axios';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  describe('when server is called', () => {
    it('shows server response', async () => {
      jest.spyOn(axios, 'get').mockReturnValue({ data: { response: "Hello World!" } });

      let wrapper = shallow(<App />);
      await wrapper.instance().busy;
      expect(wrapper.state().data).toEqual("Hello World!");
      cleanup();
    })

    it('shows error message', async () => {
      let wrapper = shallow(<App />);
      await wrapper.instance().busy;
      expect(wrapper.state().data).toEqual("Could not connect to server");
      cleanup();
    })
  })
});