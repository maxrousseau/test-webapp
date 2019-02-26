import React from 'react'
import {uploadFile} from 'api/cloudinary'
import {analyseImage} from 'api/pfla'

class AnalysisForm extends React.Component {
  // On met comme valeur par défaut le premier élément du select pour le type
  state = {
    file: null,
    type: 'asym',
    image_64: null,
    result: null
  }

  // On doit ajouter un handler pour le changement de type
  handleTypeChange = (event) => {
    event.preventDefault();
    this.setState({type: event.target.value});
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

    const { image_base_64 } = await analyseImage(type, imageUrl);
    this.setState({ image_64: image_base_64 });
  }

  render() {

      const { file, imageUrl, type, image_64, result } = this.state;
      const base_64_string = "data:image/png;base64," + image_64;

      console.log(type);

      return (
        <form onSubmit={this.handleAnalysis}>

          <select id="lang" onChange={this.handleTypeChange} value={type}>
            <option value="asym">Asymmetry</option>
            <option value="lfh">Lower Face Height</option>
            <option value="ratio1">Ratio 1</option>
            <option value="ratio1">Ratio 2</option>
            <option value="ratio1">Ratio 3</option>
          </select>

          <div>
            <label>Select image to analyse</label>
            <input type="file" onChange={this.handleImageChange} />
          </div>


          {file && (
            <button type="submit">Analyse</button>
          )}

          {imageUrl && (
            <a href={imageUrl}>{imageUrl}</a>
          )}

          {image_64 && (
            <img href={base_64_string} />
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
