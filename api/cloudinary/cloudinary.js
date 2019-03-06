import {CLOUDINARY_API_BASE_URL, CLOUDINARY_UPLOAD_PRESET_NAME} from 'config';

// **************************************************************************************
// **************************************************************************************
// SEE
// https://cloudinary.com/documentation/javascript_image_and_video_upload
// https://codepen.io/team/Cloudinary/pen/QgpyOK
// https://cloudinary.com/documentation/upload_images#unsigned_upload
// **************************************************************************************
// **************************************************************************************

export const uploadFile = (file) => {
  return new Promise((resolve) => {
    const apiBaseUrl = CLOUDINARY_API_BASE_URL;
    const unsignedUploadPreset = CLOUDINARY_UPLOAD_PRESET_NAME;

    var url = `${apiBaseUrl}/upload`;
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

      if (xhr.status === 200) {
        // File uploaded successfully
        const response = JSON.parse(xhr.responseText);
        const {secure_url} = response;
        resolve({success: true, url: secure_url});
      } else if (xhr.readyState == 4) {
        resolve({success: false});
      }
    }

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);
  });
}
