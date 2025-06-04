const saveData= () => {
    localStorage.setItem("data", JSON.stringify(data));
  };
  const getData = () => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  };
