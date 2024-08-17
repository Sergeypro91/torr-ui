import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
const FolderOutlineMd: React.FunctionComponent<SvgIconProps> = ({
  ...props
}) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M20 5h-8.6L9.7 3.3A1 1 0 0 0 9 3H4a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM4 19V7h16v12H4z" />
  </SvgIcon>
);
export default FolderOutlineMd;
