function file(path) {
  let fileInfo = path.split(`\\`).pop();
  let lastDot = fileInfo.lastIndexOf(`.`);

  let fileName = fileInfo.slice(0, lastDot);
  let fileExt = fileInfo.slice(lastDot + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extention: ${fileExt}`);
}
file("C:\\Internal\\training-internal\\Template.pptx");
