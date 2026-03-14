/**
 * Generates a random chaotic position for an element
 * 
 * @param {number} seed Optional seed to vary displacement
 * @returns {object} { top, left, transform } CSS values
 */
export const randomPosition = () => {
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  
  const randomY = Math.floor(Math.random() * (vh - 100)); // Keep slightly inside bounds
  const randomX = Math.floor(Math.random() * (vw - 100));
  
  // Randomly select position type to mess with layout
  const positionOptions = ['fixed', 'absolute', 'relative'];
  const posSelect = positionOptions[Math.floor(Math.random() * positionOptions.length)];

  // Random rotation for maximum chaos
  const rotation = Math.floor(Math.random() * 360);

  return {
    top: `${randomY}px`,
    left: `${randomX}px`,
    position: posSelect, /* Sometimes it flows with doc, sometimes absolute */
    transform: `rotate(${rotation}deg)`,
    zIndex: Math.floor(Math.random() * 1000)
  };
};
