import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
const SearchOutlineMd: React.FunctionComponent<SvgIconProps> = ({
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
    <path d="M10 18a8 8 0 0 0 4.9-1.7l4.4 4.4 1.4-1.4-4.4-4.4A8 8 0 0 0 18 10a8 8 0 1 0-8 8zm0-14a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" />
  </SvgIcon>
);
export default SearchOutlineMd;
