
export const setResepie = (res) => {
    localStorage.setItem('res', JSON.stringify(res));
}

export const getResepie = () => {
  try {
    const data = localStorage.getItem("res"); 
    const parsed = data ? JSON.parse(data) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Error reading localStorage:", error);
    return [];
  }
};


