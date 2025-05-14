export const getPatients = () => {
    const data = localStorage.getItem("patients");
    return data ? JSON.parse(data) : [];
  };
  
  export const savePatients = (patients) => {
    localStorage.setItem("patients", JSON.stringify(patients));
  };
  