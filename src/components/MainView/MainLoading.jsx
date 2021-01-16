import React from 'react';

const Loading = ({loading}) => {
  return (<>
      {/* gravity */}
      <div name={loading.toString()} className="my-loader">_GREETINGS_EARTHLING_</div>
  </>);
};
export default Loading;