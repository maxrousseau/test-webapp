import {PFLA_API_URL} from 'config';

 export const analyseImage = (type, imageUrl) => {
  return new Promise((resolve) => {
    const apiBaseUrl = PFLA_API_URL;

    // =======================================================
    // Based on https://github.com/maxrousseau/densys.org/blob/c636ddb0dcce196c1bc3c5f651f788a3e23b03dd/app.py#L102
    // I think this should be the url to use
    // Also, request should contain a json object (not a FormData)
    // json object needs to be {analysis: 'something', image: "path_to_image"}
    // NOT SURE IF YOU NEED TO MODIFY SOMETHING ON THE BACKEND TO RECEIVE AN HTTP ADRESS INSTEAD OF A "/LOCAL/IMAGE/PATH"
    // =======================================================
    var url = `${apiBaseUrl}/api/v0.0/jobs/new`;
    const stringifiedData = JSON.stringify({ analysis: type, image: imageUrl});
    var xhr = new XMLHttpRequest();

    xhr.open('POST', url, true);

    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // =======================================================
    // https://stackoverflow.com/questions/39519246/make-xmlhttprequest-post-using-json
    // We need to tell XHR that we are send data as JSON content-type
    // =======================================================
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8"

    // Update progress (can be used to show progress indicator)
    // =======================================================
    // I don't think we need this here since we have nothing to "upload"
    // =======================================================
    //xhr.upload.addEventListener("progress", (e) => {
    //    console.log(`fileuploadprogress data.loaded: ${e.loaded}, data.total: ${e.total}`);
    //});

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
