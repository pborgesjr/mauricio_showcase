export const formatFileName = (fileName: string) => {
  const SEPARATOR = ".";

  return fileName.split(SEPARATOR)[0];
};
