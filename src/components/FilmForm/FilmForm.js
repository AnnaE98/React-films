import React, { Component } from 'react';
import uniqId from 'uniqid';
import getSlug from '../../slug/slug';
import styles from '../FilmForm/Form.module.css'
import { Input } from './FormFields/Input';
import { Textarea } from './FormFields/TextArea';

import Select from './FormFields/Select';

import ImageForm from './FormFields/ImageForm';



export class FilmForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.film ? props.film.name : '',
      directions: props.film ? props.film.directions : '',
      category: props.film ? props.film.category : '',
      image: props.film ? props.film.image : '',
      error: '',
      errors: {
        name: false,
        directions: false,
        category: false,
      },
    };
  }

  onInputChange = (e, type) => {
    const { value } = e.target;
    this.setState(() => ({ [type]: value }));
  }

  setImage = image => {
    this.setState(() => ({ image }));
  }

  







  validateFields = (field) => {
   
    if (!this.state[field]) {
      this.setState(prevState => ({ errors: { ...prevState.errors, [field]: true } }));
      return false;
    } else {
      this.setState(prevState => ({ errors: { ...prevState.errors, [field]: false } }));
      return true;
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const requiredFields = ['name', 'directions', 'category' ];

    if (!requiredFields.every(field => this.validateFields(field))) {
      this.setState(() => ({ error: '(Заполните обязательные поля*)' }));
    } else {
     //сохранить фильм
      this.setState(() => ({ error: '' }));
      const { name, directions, category, image } = this.state;
      const { film, films } = this.props;
      const id = film ? film.id : uniqId();
      const slug = getSlug(film, name, films);
      this.props.onSubmit({ id, slug, name, directions, category, image });
    }
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <div>
          <Input 
            name="name" 
            value={this.state.name} 
            handleInputChange={this.onInputChange} 
            error={this.state.errors.name}
            isRequired={true}
          />
          <Select 
            category={this.state.category} 
            handleInputChange={this.onInputChange} 
            error={this.state.errors.category}
          />
          <Textarea 
            name="directions" 
            value={this.state.directions} 
            handleInputChange={this.onInputChange} 
            error={this.state.errors.directions}
            isRequired={true}
          />
        </div>
        <div>
          <ImageForm 
            image={this.state.image} 
            setImage={this.setImage} 
          />
       
          
          <div className={styles.row}>
          <input type="button" className = {styles.butcancel}  onClick={this.props.onCancel} value="Отмена"/>
            <input type="submit" className = {styles.butsave} value="Сохранить"/>
           </div>
           <div className={styles.error}>{this.state.error}</div> 

        </div>
      </form>
    );
  }
}

export default FilmForm;
