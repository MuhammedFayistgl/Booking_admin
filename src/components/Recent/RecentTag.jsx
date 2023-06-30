import React from "react";
import { Tag, Tooltip, Whisper } from "rsuite";

const RecentTag = () => {
  const tooltip = <Tooltip>{` paymentstatus: Completed`}</Tooltip>;
  return (
    <>
      <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={tooltip}>
        <Tag color="green">Completed</Tag>
      </Whisper>
    </>
  );
};

export default RecentTag;
