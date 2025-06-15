declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg?no-inline' {
  const src: string;
  export default src;
}
