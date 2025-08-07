"use client";
import { useEffect } from "react";

const sectionIds = ["about", "experience", "projects"];

export const useScrollHashUpdater = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return null;
};
