export const addClassName = (id: string, style: string) => {
  document.getElementById(id)?.classList.add(style);
};
