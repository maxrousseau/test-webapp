import {PFLA_API_URL} from 'config';

 export const analyseImage = (type, imageUrl) => {
  return new Promise((resolve) => {
    const apiBaseUrl = PFLA_API_URL;

    var url = `${apiBaseUrl}/analyse`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();

     xhr.open('POST', url, true);

     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

     // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", (e) => {
        console.log(`fileuploadprogress data.loaded: ${e.loaded}, data.total: ${e.total}`);
    });

     xhr.onreadystatechange = (e) => {
      if (xhr.readyState !== 4) return;

       if (xhr.status == 200) {
        // File uploaded successfully
        const response = JSON.parse(xhr.responseText);

         const result = response.result;
        const image_base_64 = response.b64_img;

         resolve({success: true, image_base_64, result});
      } else if (xhr.readyState == 4) {
        resolve({success: false});
      }
    }

     xhr.send(fd);
  });
}