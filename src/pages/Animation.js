import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function FadeInUpDiv({ children }) {
    const props = useSpring({
        opacity: 1,
        transform: 'translate3d(0,0,0)',
        from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
      });  
return <animated.div style={props}>{children}</animated.div>;
}
