import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function UploadZone({ className, storage }) {
  //const storageRef = storage.ref();

  const onDrop = useCallback(acceptedFiles => {
    var reader = new FileReader();
    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = r => {
      console.log(r.currentTarget.result);

      const removeDataTypeFromBase64String = b => {
        return b.split(",")[1];
      };

      if (r.currentTarget.result) {
        fetch(
          "https://us-central1-hotdogsnicelegsv2.cloudfunctions.net/predictImage",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            mode: "no-cors",
            body: JSON.stringify({
              dataURL: removeDataTypeFromBase64String(r.currentTarget.result)
            })
          }
        ).then(response => {
          console.log(response);
        });
      }
    };

    console.log(acceptedFiles);

    if (acceptedFiles[0]) {
      reader.readAsDataURL(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*"
  });

  return (
    <div {...getRootProps()} className={className}>
      <h2>Upload your photo</h2>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default UploadZone;
