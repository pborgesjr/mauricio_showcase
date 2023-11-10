export const imageSrcBuilder = (url: string) => ({
  srcSet: `${url}&w=480 480w, ${url}&w=768 768w, ${url}&w=1280 1280w, ${url}&w=1366 1366w`,
});
