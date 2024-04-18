import React, { useEffect, useRef, useState } from 'react';

const Blob = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: any) => {
    const { clientX, clientY } = event;

    if (blobRef.current) {
      const blobStyle = blobRef.current.style;
      blobStyle.left = `${clientX}px`;
      blobStyle.top = `${clientY}px`;

      blobRef.current.animate?.(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 3000, fill: 'forwards' }
      );
    }
  };
  useEffect(() => {
    document.body.addEventListener('pointermove', handlePointerMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);
  return (
    <>
      <div id="blob" ref={blobRef} style={{ position: 'fixed' }}></div>
      {/* <div id="blur"></div>; */}
    </>
  );
};

export default Blob;
