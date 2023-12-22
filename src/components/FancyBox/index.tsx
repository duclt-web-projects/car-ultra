'use client';

import { ReactNode, useEffect, useRef } from 'react';

import { Fancybox as NativeFancyBox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function FancyBox(props: {
  delegate?: string;
  options: {};
  children: ReactNode;
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || '[data-fancybox]';
    const options = props.options || {};

    NativeFancyBox.bind(container, delegate, options);

    return () => {
      NativeFancyBox.unbind(container);
      NativeFancyBox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}

export default FancyBox;
