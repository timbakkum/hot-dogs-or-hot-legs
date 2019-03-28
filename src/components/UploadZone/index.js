import React from "react";
import { Upload, Icon } from "antd";

const Dragger = Upload.Dragger;

const UploadZone = props => {
  return (
    <div>
      <h2>Upload your photo</h2>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  );
};

export default UploadZone;
