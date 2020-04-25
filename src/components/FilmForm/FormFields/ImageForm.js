import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../styled/Input';
import styles from './Field.module.css'
import globstyles from '../../../components/style.module.css'







class ImageForm extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    setImage: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      showImage: this.props.image !== ''
    };
  }

  handleImageChange = e => {
    const image = e.target.value;
    this.setState(() => ({ image }));
  }

  setImage = () => {
    const { image } = this.state;
    this.props.setImage(image);
    this.setState(() => ({ showImage: true }));
  }

  render() {
    if (this.state.showImage) {
      return (
        <div>
          <div className = {styles.imgcont}>
            <img src={this.state.image} alt="" />
          </div>  
          <div className={styles.imglinks} onClick={() => this.setState({ showImage: false })}>Изменить фото</div>
        </div>
      );
    }
    return (
      <div className={styles.ImageForm}>
          <div className = {styles.imgcont}>
          {this.state.image && <img  src={this.state.image} alt="" />}
        </div>
        <div className={globstyles.label} htmlFor="image">Постер</div>
        <div className={styles.imdisp}>
          <Input
            type="text"
            id="image"
            placeholder="https://image.jpg"
            onChange={this.handleImageChange}
            value={this.state.image}
          />
          <span className = {styles.imgspan} onClick={this.setImage}>Добавить</span>
        </div>
      </div>
    );
  }
}

export default ImageForm;
