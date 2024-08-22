import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
const LoadingOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M12 22c5.4 0 10-4.6 10-10h-2c0 4.3-3.7 8-8 8s-8-3.7-8-8 3.7-8 8-8V2C6.6 2 2 6.6 2 12s4.6 10 10 10z" />
  </SvgIcon>
);
export default LoadingOutlineMd;
