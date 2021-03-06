import React from 'react';
import Switch from 'switch';
import omit from 'lodash/omit';

import getControlGroup from '../getControlGroup';
import unknownProps from '../unknownProps';

const SwitchWrap = props => {
  const passableProps = omit(props, unknownProps);
  return <Switch {...passableProps} size="small" checked={props.value} />;
};
const SwitchField = getControlGroup(SwitchWrap);

export default SwitchField;
