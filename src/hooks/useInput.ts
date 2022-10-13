import { useState, useCallback, ChangeEvent } from 'react';

export type UseInputReturnType = [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>
];

export const useInput = (initialState = ''): UseInputReturnType => {
  const [value, setValue] = useState(initialState);
  const handler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);
  return [value, handler, setValue];
};
