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

      if (xhr.status === 201) {
        // Got response from backend
        const response = JSON.parse(xhr.responseText);

        // Same as const job = response.job
        const {job} = response;

        // Same as
        // const b64_img = job.b64_img
        // const result = job.result
        const {b64_img, result} = job;


        console.log("Following is the encoded base_64 image");
        console.log("We should be able to copy/paste that on https://codebeautify.org/base64-to-image-converter and see an image")
        console.log("It doesn't seem to work for me right now")
        console.log("I don't think the base64 is supposed to start with b' and end with '   ")
        console.log(b64_img)

        resolve({success: true, image_base_64: b64_img, result});
      } else if (xhr.readyState == 4) {
        resolve({success: false});
      }
    }

     xhr.send(stringifiedData);
  });
}
