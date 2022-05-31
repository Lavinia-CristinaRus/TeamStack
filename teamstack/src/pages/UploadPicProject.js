import React, { Component } from 'react';
import './../components/UploadPic.css';
import profileImg from './../assets/project.png';

export class UploadPic extends Component {
  state={
    profileImg
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg} = this.state
		return (
			<div>
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
            <div className="label">
              <label className="image-upload" htmlFor="input">Upload</label>
            </div>
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					
			</div>
		);
	}
}
export default UploadPic;