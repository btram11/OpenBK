"use client";

import { useEffect } from "react";

export const ClientBackground: React.FC = () => {
  useEffect(() => {
    const article = document.querySelector("#content") as HTMLElement;
    const background = document.querySelector(
      "#background-content"
    ) as HTMLElement;

    const updateHeight = () => {
      if (article && background) {
        const height = article.getBoundingClientRect().height;
        background.style.height = `${height}px`;
      }
    };

    updateHeight(); // Gọi ngay khi component render

    // Lắng nghe thay đổi DOM
    const observer = new MutationObserver(updateHeight);
    if (article) {
      observer.observe(article, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);

  return null; // Component này chỉ để thao tác với DOM
};
