declare module '*.svg' {
  const image: string;

  export default image;
}

declare module '*.svg?no-inline' {
  const src: string;
  export default src;
}
