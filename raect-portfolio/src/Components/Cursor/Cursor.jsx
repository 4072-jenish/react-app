import { useEffect } from "react";
import "./Cursor.css"

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-outline");
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const lerp = (start, end, amount) => start + (end - start) * amount;

    const animate = () => {
      currentX = lerp(currentX, mouseX, 0.2);
      currentY = lerp(currentY, mouseY, 0.2);
      cursor.style.top = `${currentY}px`;
      cursor.style.left = `${currentX}px`;
      requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onHover = () => {
      cursor.classList.add("cursor-hover");
    };

    const onUnhover = () => {
      cursor.classList.remove("cursor-hover");
    };

    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll("a, button, .hover-target");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", onHover);
        el.addEventListener("mouseleave", onUnhover);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    addHoverListeners();
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div className="cursor-outline"></div>;
};

export default CustomCursor;
