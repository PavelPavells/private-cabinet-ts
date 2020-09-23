import React, { useEffect, useState } from 'react';
import './Fade.scss';

const Fade = (props: any) => {
    // eslint-disable-next-line react/prop-types
    const [shouldRender, setRender] = useState(props.show);

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        if (props.show) setRender(true);
        // eslint-disable-next-line react/prop-types
    }, [props.show]);

    const onAnimationEnd = () => {
        // eslint-disable-next-line react/prop-types
        if (!props.show) setRender(false);
    };

    return (
        shouldRender && (
            // eslint-disable-next-line react/prop-types
            <div style={{ animation: `${props.show ? 'fadeIn' : 'fadeOut'} .5s` }} onAnimationEnd={onAnimationEnd}>
                {/* eslint-disable-next-line react/prop-types */}
                {props.children}
            </div>
        )
    );
};

export default Fade;
