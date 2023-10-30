import React, { useState } from "react";

import { Uploader } from "../../components/Uploader";

const RecorderPage = () => {
  const [selectedFile, setSelectedFile] = useState();

  function handleChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  if (selectedFile) {
    return <Uploader file={selectedFile} />;
  }

  return (
    <div className="App">
      <form>
        <h1>Select video file to upload</h1>
        <input type="file" onChange={handleChange} />
      </form>
    </div>
  );
};

export default RecorderPage;
