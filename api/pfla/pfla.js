import {PFLA_API_URL} from 'config';

export const analyseImage = (type, imageUrl) => {
  return new Promise((resolve) => {
    const apiBaseUrl = PFLA_API_URL;
    const unsignedUploadPreset = CLOUDINARY_UPLOAD_PRESET_NAME;

    var url = `${apiBaseUrl}/analyse`;
    var xhr = new XMLHttpRequest();


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


        const {image_base_64, blah} = response;

        const blah = response.blah;
        const image_base_64 = response.image_base_64;



        resolve({success: true, image_base_64, blah});
      } else if (xhr.readyState == 4) {
        resolve({success: false});
      }
    }

    xhr.send(fd);
  });
}
