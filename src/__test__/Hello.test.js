import React from 'react';
import Hello from '../components/Hello';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Añadiendo pruebas a React', () => {
  test('Comprobamos el texto que recibe como prop', () => {
    const data = { title: 'Hola Jest' };
    const wrapper = mount(
      <Hello title={data.title} />
    );
    const p = wrapper.find('h1');
    expect(p.text()).toBe('Hola Jest');
  });

  test('Creamos un snapshot en React', () => {
      const data = { title: 'Hola Jest' };
      const wrapper = shallow(
        <Hello title={data.title} />
      );
      expect(wrapper).toMatchSnapshot();
  });

});

