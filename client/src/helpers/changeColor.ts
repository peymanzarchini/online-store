export const changeColor = (theme: string) => {
  document.querySelector("html")?.setAttribute("data-theme", theme);
};
