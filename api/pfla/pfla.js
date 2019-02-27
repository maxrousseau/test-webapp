import {PFLA_API_URL} from 'config';

 export const analyseImage = (type, imageUrl) => {
  return new Promise((resolve) => {
    const apiBaseUrl = PFLA_API_URL;

    var url = `${apiBaseUrl}/api/v0.0/jobs/new`;
    const stringifiedData = JSON.stringify({ analysis: type, image: imageUrl });
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // type of request json
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

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

     xhr.send(stringifiedData);
  });
}