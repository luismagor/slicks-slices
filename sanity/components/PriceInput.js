import React from 'react';
import FormField from 'part:@sanity/components/formfields/default';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <FormField
      label={`${type.title} - ${value ? formatMoney(value / 100) : ''}`}
      description={type.description}
    >
      <input
        type={type.name}
        value={value}
        onChange={event => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      />
    </FormField>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};

export default PriceInput;
