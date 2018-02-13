import React from 'react';
import renderer from 'react-test-renderer';

import <%= name.componentName %> from './<%= name.componentName %>';

describe('<%= name.componentName %>', () => {
  it('renders <%= name.componentName %>', () => {
    const component = renderer.create(<<%= name.componentName %> />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
