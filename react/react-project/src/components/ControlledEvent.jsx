import React from 'react';
import CheckBox from './CheckBox';
import Select from './Select';
import TextArea from './TextArea';
import TextInput from './TextInput';
import UncontrolledTextInput from './UncontrolledTextInput';
import AddEvent from './AddEvent';

export default function ControlledEvent() {
  return (
    <div className="ControlledEvent">
      <div>
        <TextInput />
      </div>
      <div>
        <TextArea />
      </div>
      <div>
        <Select />
      </div>
      <div>
        <CheckBox />
      </div>
      <div>
        <UncontrolledTextInput />
    </div>
  </div>
  );
}
