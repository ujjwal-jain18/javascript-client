/* eslint-disable no-console */
import React from 'react';

import { selectOptions, RadioOptionsFootball, RadioOptionsCricket } from '../../configs/constants';

import { TextField, SelectField, RadioGroup } from '../../components/index';


class InputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sport: '',
      cricket: '',
      football: '',
    };
  }

    handleNameChange = (e) => {
      this.setState({ name: e.target.value }, () => console.log(this.state));
    }

    handleSportChange = (e) => {
      this.setState({ sport: e.target.value }, () => console.log(this.state));
      if (e.target.value === 'cricket') {
        this.setState({ football: '' });
      } else if (e.target.value === 'football') {
        this.setState({ cricket: '' });
      } else {
        this.setState({ cricket: '', football: '' });
      }
    }

    handlePositionChange = (e) => {
      const { sport } = this.state;
      if (sport === 'cricket') {
        this.setState({ cricket: e.target.value }, () => console.log(this.state));
      } else if (sport === 'football') {
        this.setState({ football: e.target.value }, () => console.log(this.state));
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
      const { sport } = this.state;
      return (
        <>
          <TextField input="Name" error="" onChange={this.handleNameChange} />
          <SelectField input="Select the game you play ?" error="" onChange={this.handleSportChange} options={selectOptions} />
          <div>
            {
              (sport === '' || sport === 'Select') ? '' : <RadioGroup input="What you do ?" error="" options={this.RadioOption()} onChange={this.handlePositionChange} />
            }
          </div>
        </>
      );
    }
}
export default InputDemo;
