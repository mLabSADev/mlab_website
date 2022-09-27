 const generatePath = (title) => {
  const lowerCase = title ;
  const remove_invalid_1 = lowerCase.replaceAll(":", "");
  const remove_invalid_2 = remove_invalid_1.replaceAll("|", "");
  const remove_invalid_3 = remove_invalid_2.replaceAll("#", "");
  const remove_invalid_4 = remove_invalid_3.replaceAll("&", "");
  const remove_invalid_5 = remove_invalid_4.replaceAll('"', "");
  const remove_invalid_6 = remove_invalid_5.replaceAll('"', "");
  const _path = remove_invalid_6.replaceAll(" ", "-");
  return _path;
};
export default generatePath