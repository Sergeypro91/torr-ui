import { IconNames } from '../../../Icon';

export const useLogic = () => {
  const filterIcon = (search?: string) => (value: IconNames) => {
    if (!search) return value;

    const regex = new RegExp(search, 'i');

    return regex.test(value);
  };

  return { filterIcon };
};
