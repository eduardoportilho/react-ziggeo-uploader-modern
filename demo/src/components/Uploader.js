import React, { useState, useEffect } from "react";
import { ZiggeoRecorder } from "react-ziggeo";
import { API_KEY, VIDEO_TOKEN } from "../constants";

export const Uploader = ({ file }) => {
  const [recorder, setRecorder] = useState(null);

  useEffect(() => {
    if (recorder) {
      recorder.upload_video(file);
    }
  }, [file, recorder]);

  const handleProcessed = (embedding) => {
    console.log(`>>>`, {
      token: embedding.video_data.token,
      embed_image_url: embedding.video_data.embed_image_url,
      embed_video_url: embedding.video_data.embed_video_url,
    });
  };

  return (
    <ZiggeoRecorder
      apiKey={API_KEY}
      video={VIDEO_TOKEN}
      height={180}
      width={320}
      allowrecord={false}
      allowupload={false}
      // Comment the line below to fix the app
      theme="modern"
      onProcessed={handleProcessed}
      onRef={(ref) => setRecorder(ref)}
      timelimit={120}
    />
  );
};
