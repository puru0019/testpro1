import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as RMWCButton } from '@rmwc/button';
import '@material/button/dist/mdc.button.css';
/**
 * Renders various types of buttons such as primary, secondary, tertiary and danger
 */
const Button = ({
  children, buttonType, disabled, dataTa, className, onClick, type,
}) => styled((
  <RMWCButton
    disabled={disabled}
    raised={buttonType === 'primary' || buttonType === 'danger'}
    outlined={buttonType === 'secondary'}
    dense={buttonType === 'tertiary'}
    data-ta={dataTa}
    type={type}
    className={className}
    onClick={onClick}
  >
    {children}
  </RMWCButton>
))`
  text-transform: capitalize;
  background-color: red;
  color: white;
`;

Button.defaultProps = {
  disabled: false,
  buttonType: 'primary',
  type: 'button',
};

Button.propTypes = {
  /** variant of the button. for example primary secondary tertiary and danger */
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger']),
  /** Content specified as children */
  children: PropTypes.node.isRequired,
  /** Whether the button is disabled. */
  disabled: PropTypes.bool.isRequired,
  /** attribute value of the custom data-ta attribute that can be used to locate a specific element for testing purposes */
  dataTa: PropTypes.string,
  /** Callback for when clicked on button */
  onClick: PropTypes.func,
  /** Optional class name to add extra styles */
  className: PropTypes.string,
  /** The type attribute specifies the type of the button for example button, submit and reset */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
