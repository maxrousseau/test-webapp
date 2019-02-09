import React from 'react'
import {uploadFile} from 'api/cloudinary'
import {analyseImage} from 'api/pfla'

class AnalysisForm extends React.Component {
  state = {
    file: null
  }

  handleImageChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    this.setState({file});
  }

  handleAnalysis = async (event) => {
    event.preventDefault();
    const {file} = this.state;
    const {success: uploadSuccess, url: imageUrl} = await uploadFile(file);

    if (!uploadSuccess) return;

    this.setState({imageUrl});

    //const {success: analyseSuccess, result} = await analyseImage(type, imageUrl);
    //this.setState({result});
  }

  render() {
      const {file, imageUrl} = this.state;

      return (
        <form onSubmit={this.handleAnalysis}>
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
