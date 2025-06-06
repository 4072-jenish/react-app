export const setAnime = (animes) => {
    localStorage.setItem("animes", JSON.stringify(animes));
  };
  
  export const getAnime = () => {
    try {
      const data = localStorage.getItem("animes");
      const parsed = data ? JSON.parse(data) : [];
      return Array.isArray(parsed) ? parsed : []; // Always return an array
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return [];
    }
  };
  
  