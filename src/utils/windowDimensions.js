// Pick Idea here : https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

import { useState, useEffect } from 'react';

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // return true if width < 768 i.e is mobile
  return windowWidth <= 768;
}