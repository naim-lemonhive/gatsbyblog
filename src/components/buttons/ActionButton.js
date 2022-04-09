import React, { Children } from 'react';
import ActionButtonStyles from '../../styles/buttons/ActionButtonStyles';

export const ActionButton = ({ children, ...rest }) => (
  <ActionButtonStyles role="button" tabIndex={0} {...rest}>
    {children}
  </ActionButtonStyles>
);
