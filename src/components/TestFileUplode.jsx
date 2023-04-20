
import React, { useState } from "react";
import axios from "axios";



const TestFileUplode = () => {
  const [file, setFile] = useState();


  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const url = "http://localhost:5000/admin//testuplodeimage";

    const formData = new FormData();

    formData.append("file", file);

    formData.append("fileName", file.name);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>

          <input type="file" onChange={handleChange} />

          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default TestFileUplode;
