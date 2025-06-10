export const setResepie = (data) => {
  const safeData = Array.isArray(data) ? data : [];
  localStorage.setItem("recipes", JSON.stringify(safeData));
};

export const getResepie = () => {
  const data = localStorage.getItem("recipes");
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch (err) {
    console.error("Error parsing recipes:", err);
    return [];
  }
};
