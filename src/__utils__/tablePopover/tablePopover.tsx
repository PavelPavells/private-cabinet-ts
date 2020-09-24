import React, { useState, useCallback, SyntheticEvent } from 'react';
import _ from 'lodash';
// import PopoverProps from './popoverTypes';
import Portal from './Portal/Portal';

const Popover = (props: any) => {
    const [text, setText] = useState('');
    const [style, setStyle] = useState({ top: ``, left: `` });

    const delayed = useCallback(
        _.debounce((ev: any) => {
            if (ev.target.textContent.length === 0 || ev.target.textContent.length < 17) {
                setText('');
            }

            if (ev.target.id !== 'popover' && ev.target.textContent.length >= 18 && ev.target.textContent.length < 50) {
                setText(ev.target.textContent);
                setStyle({ ...style, top: `${ev.pageY + 20}px`, left: `${ev.pageX + 20}px` });
            }
        }, 1500),
        []
    );

    const mouseOverHandle = (ev: SyntheticEvent) => {
        ev.persist();
        delayed(ev);
        setText('');
    };

    return (
        <div id="popover" onMouseOver={mouseOverHandle} onMouseLeave={() => setText('')} onFocus={() => {}}>
            {props.children}
            {text && <Portal text={text} top={style.top} left={style.left} />}
        </div>
    );
};

export default Popover;
