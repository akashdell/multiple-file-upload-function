onFileChanged = async (event: any, files: any) => {
  console.log('files--->', files);
  const filePromises = Array.from(event.target.files).map((file: any) => {
    var selectedFile = file;
    console.log('selectedfile ---->', selectedFile);
    selectedFile['uploading'] = false;
    if (selectedFile.type === 'image/png') {
      console.log('if block enters');
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        console.log('reader--->', reader);
        reader.onload = async () => {
          try {
            const response = (await reader.result) as string; // Resolve the promise with the response value
            console.log('response----->', response);
            selectedFile['url'] = response;
            resolve(selectedFile);
          } catch (err) {
            reject(err);
          }
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    }
    return selectedFile;
    // console.log("selectedFile", selectedFile);
  });
  // Wait for all promises to be resolved
  const fileInfos = await Promise.all(filePromises);
  this.fileList = fileInfos;
  console.log('fileInfos----->', fileInfos);
  console.log('COMPLETED');
};
