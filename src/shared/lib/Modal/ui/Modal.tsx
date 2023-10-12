import { createPortal } from 'react-dom';
import { FC, ReactNode } from 'react';

const Modal:FC<{children : ReactNode}> = ({ children }) => createPortal(
    <div>
        {children}
    </div>,
    document.getElementById('portal'),
);

export default Modal;
