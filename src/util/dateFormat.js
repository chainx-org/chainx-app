import dayjs from 'dayjs';

/**
 * option: defaultValue：空值时，默认返回。
 */
export default function dateFormat(value, { defaultValue = '' }) {
  if (value === undefined || value === null) {
    return defaultValue;
  }

  return dayjs(value).toISOString();
}
