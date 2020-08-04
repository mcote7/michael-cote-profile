import React from 'react';
import PuffLoader from "react-spinners/PuffLoader";

const MessageLoading = ({loading}) => {
  return (
    <div className="messageLoaderWrapper">
      <PuffLoader size={250} color={"#ffffff"} loading={loading}/>
    </div>
  );
};

export default MessageLoading;