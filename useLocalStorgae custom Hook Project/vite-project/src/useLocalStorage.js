import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const localValue = localStorage.getItem(key);
      if (localValue === null) {
        return typeof initialValue === "function" ? initialValue() : initialValue;
      } else {
        return JSON.parse(localValue);
      }
    } catch (error) {
      console.error(`Error retrieving or parsing localStorage item '${key}':`, error);
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
  });

  useEffect(() => {
    try {
      if (value === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`Error storing localStorage item '${key}':`, error);
    }
  }, [value, key]);

  return [value, setValue];
}
