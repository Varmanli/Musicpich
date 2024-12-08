export const scrollToSection = () => {
  const target = document.getElementById("target-section");
  const yOffset = target.getBoundingClientRect().top;
  let currentPosition = 0;
  const step = yOffset / 50;
  const interval = setInterval(() => {
    if (Math.abs(currentPosition) >= Math.abs(yOffset)) {
      clearInterval(interval);
    } else {
      window.scrollBy(0, step);
      currentPosition += step;
    }
  }, 10); 
};
