export const setResepie = (recipes) => {
  localStorage.setItem("recipes", JSON.stringify(recipes));
};

export const getResepie = () => {
  const data = localStorage.getItem("recipes");
  return data ? JSON.parse(data) : [];
};
