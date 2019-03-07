import React from 'react'
import {uploadFile} from 'api/cloudinary'
import {analyseImage} from 'api/pfla'

class AnalysisForm extends React.Component {
  state = {
    file: null,
    type: 'asym',
      image_64: null,
    result: null
  }

  // On doit ajouter un handler pour le changement de type
  handleTypeChange = (event) => {
    event.preventDefault();
    this.setState({ type: event.target.value });
  }

  handleImageChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    this.setState({file});
  }

  handleAnalysis = async (event) => {
    event.preventDefault();
    const {file, type} = this.state;
    const {success: uploadSuccess, url: imageUrl} = await uploadFile(file);

    if (!uploadSuccess) return;

    this.setState({imageUrl});

    const { image_base_64, result } = await analyseImage(type, imageUrl);
    this.setState({ image_64: image_base_64, result });
   }

  render() {

      const { file, imageUrl, type, image_64, result } = this.state;
      const base_64_string = "data:image/png;base64, " + image_64;

      return (
        <form onSubmit={this.handleAnalysis}>

          <select id="lang" onChange={this.handleTypeChange} value={type}>
            <option value="asym">Asymmetry</option>
            <option value="lfh">Lower Face Height</option>
            <option value="ratio1">Ratio 1</option>
            <option value="ratio2">Ratio 2</option>
            <option value="ratio3">Ratio 3</option>
          </select>

          <div>
            <label>Select image to analyse</label>
            <input type="file" onChange={this.handleImageChange} />
          </div>


          {file && (
            <button type="submit">Analyse</button>
          )}


          {imageUrl && (
            <div>
              <a href={imageUrl}>{imageUrl}</a>
            </div>
          )}

          {image_64 && (
            <div>
              <img src={base_64_string} alt="result_img" />
            </div>
          )}

          {result && (
            <div>
              <p> Result: {result} </p>
            </div>
          )}

          <style jsx>{`
            :global(body) {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
            }
            nav {
              text-align: center;
            }
            ul {
              display: flex;
              justify-content: flex-start;
            }
            nav > ul {
              padding: 4px 16px;
            }
            li {
              display: flex;
              padding: 6px 8px;
            }
            a {
              color: #067df7;
              text-decoration: none;
              font-size: 13px;
            }
        `}</style>
      </form>
    );
  }
};

export default AnalysisForm
