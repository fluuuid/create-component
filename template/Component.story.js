import React from 'react';
import { storiesOf } from '@storybook/react';

import <%= componentName %> from './<%= fileName %>';

storiesOf('<%= componentName %>', module)
  .add('default', () => (
    <<%= componentName %> />
  ));
