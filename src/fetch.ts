const fetchData = async (url: string) => {
  try {
    const request = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    if (request.ok === true) {
      console.log("Succesfully got data");
      return data;
    }
  } catch (err) {
    console.error(err);
  }
};

export { fetchData };
