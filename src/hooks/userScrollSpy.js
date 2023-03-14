import React from "react";

export const useScrollspy = elements => {
  const observer = React.useRef<IntersectionObserver>(
    new IntersectionObserver((entries) => {
      // find the index of the section that is currently intersecting
      const indexOfElementIntersecting = entries.findIndex((entry) => {
        // if intersection > 0 it means entry is intersecting with the view port
        return entry.intersectionRatio > 0;
      });

      // TODO store the value of indexOfElementIntersecting
    })
  );

  React.useEffect(() => {
    // observe all the elements passed as argument of the hook
    elements.forEach((element) => observer.current.observe(element));

    // disconnect the observer once the component unmounts;
    return () => observer.current.disconnect();
  }, [elements]);

  // TODO return the index of the element in the elements array that is currently intersecting
  return [0];
};