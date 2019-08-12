import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
} from '@rmwc/dialog';
import '@material/dialog/dist/mdc.dialog.css';

/**
 * Renders a modal dialog with custom content.
*/
const Modal = ({
  children, title, onClose, open, preventDismissalOnOutsideClick, className,
}) => (
  <Dialog
    open={open}
    preventOutsideDismiss={preventDismissalOnOutsideClick}
    className={className}
  >
    <DialogTitle>
      Test
    </DialogTitle>

    <DialogContent>
      {children}
    </DialogContent>
  </Dialog>
);

Modal.propTypes = {
  /** Modal body content  */
  children: PropTypes.node.isRequired,
  /** Modal title  */
  title: PropTypes.string,
  /** Whether or not the Dialog is showing */
  open: PropTypes.bool.isRequired,
  /** Callback for when the Dialog closes  */
  onClose: PropTypes.func.isRequired,
  /** Prevent the dialog from closing when clicked outside of modal */
  preventDismissalOnOutsideClick: PropTypes.bool,
  /** classname to add custom styles */
  className: PropTypes.string,
};

export default Modal;
