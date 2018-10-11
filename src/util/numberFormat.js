import BN from 'bn.js';

const NUMBER_REGEX = new RegExp('(\\d+?)(?=(\\d{3})+(?!\\d)|$)', 'g');

export default function numberFormat(value, { separator = true, defaultValue = '0' }) {
  if (value === undefined || value === null) {
    return defaultValue;
  }

  return (value.toString().match(NUMBER_REGEX) || []).join(
    typeof separator === 'string' ? separator : separator ? ',' : ''
  );
}
