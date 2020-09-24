import React from 'react';
import { createPortal } from 'react-dom';
import '../tablePopover.scss';

const Portal = (props: any) => {
    return createPortal(
        <span style={{ top: props.top, left: props.left }} className="popover__message">{`${props.text}`}</span>,
        document.body
    );
};

export default Portal;
