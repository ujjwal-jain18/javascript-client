/* eslint-disable no-console */
import React from 'react';
import * as yup from 'yup';

import { selectOptions, RadioOptionsFootball, RadioOptionsCricket } from '../../configs/constants';

import {
  TextField, SelectField, RadioGroup, ButtonField,
} from '../../components/index';


class InputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sport: '',
      cricket: '',
      football: '',
      nameError: '',
      sportError: '',
      WhatYouDoError: '',
      error: '',
    };
  }

  geterror = async (key, value) => {
    console.log('2');
    const schema = yup.object().shape({
      Name: yup.string().required('Name is required').min(3),
      Sport: yup.string().required('sport is required'),
      Radio: yup.string().required('What you do is required'),
    });
    try {
      await schema.validateAt(key, value);
      console.log('7');
      this.setState({ error: '' });
    } catch (err) {
      console.log('8');
      this.setState({ error: err.errors });
    }
  }

  isTouched = (key, value) => (this.geterror(key, value));

  hasErrors = () => {
    let error;
    const { nameError, sportError, WhatYouDoError } = this.state;
    if (nameError === '' || sportError === '' || WhatYouDoError === '') {
      error = false;
    } else {
      error = true;
    }
    return error;
  }

    isTouchedName = () => {
      console.log('1');
      const { name, error } = this.state;
      this.isTouched('Name', name);
      console.log('6');
      this.setState({ nameError: error });
    }

    isTouchedSport = () => {
      const { error, sport } = this.state;
      this.isTouched('Sport', sport);
      this.setState({ sportError: error });
    }

    isTouchedPosition = () => {
      const {
        cricket, football,
      } = this.state;
      if (cricket === '' && football === '') {
        this.setState({ WatchError: 'What You Do is required' });
      } else {
        this.setState({ WatchError: '' });
      }
    }

    handleNameChange = (e) => {
      this.setState({ name: e.target.value },
        () => console.log(this.state), this.isTouchedName());
    }

    handleSportChange = (e) => {
      this.setState({ sport: e.target.value },
        () => console.log(this.state), this.isTouchedSport());
      if (e.target.value === 'cricket') {
        this.setState({ football: '' });
      } else if (e.target.value === 'football') {
        this.setState({ cricket: '' });
      } else {
        this.setState({ cricket: '', football: '' });
      }
    }

    handlePositionChange = (e) => {
      const {
        sport, cricket, football, WhatYouDoError,
      } = this.state;
      if (sport === 'cricket') {
        this.isTouched('Radio', cricket, WhatYouDoError);
        this.setState({ cricket: e.target.value },
          () => console.log(this.state), this.isTouchedPosition());
      } else if (sport === 'football') {
        this.isTouched('Radio', football, WhatYouDoError);
        this.setState({ football: e.target.value },
          () => console.log(this.state), this.isTouchedPosition());
      }
    }

    RadioOption = () => {
      let { radioValue } = this.state;
      const { sport } = this.state;
      if (sport === 'cricket') {
        radioValue = RadioOptionsCricket;
      } else if (sport === 'football') {
        radioValue = RadioOptionsFootball;
      }
      return (radioValue);
    };

    render() {
      const {
        sport, nameError, sportError, WhatYouDoError,
      } = this.state;
      const dis = this.hasErrors();
      return (
        <>
          <TextField
            input="Name"
            error={nameError}
            onChange={this.handleNameChange}
            onBlur={this.isTouchedName}
          />
          <SelectField
            input="Select the game you play ?"
            error={sportError}
            onChange={this.handleSportChange}
            options={selectOptions}
            onBlur={this.isTouchedSport}
          />
          <div>
            {
              (sport === '' || sport === 'Select') ? ''
                : (
                  <RadioGroup
                    input="What you do ?"
                    error={WhatYouDoError}
                    options={this.RadioOption()}
                    onChange={this.handlePositionChange}
                    onBlur={this.isTouchedPosition}
                  />
                )
            }
          </div>
          <ButtonField disabled={dis} />
        </>
      );
    }
}
export default InputDemo;
