import { useEffect, useState } from "react";


export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(
  JSON.parse(localStorage.getItem(key)) ?? defaultValue
  )
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); 
  }, [key, value])
  
   
  return [value, setValue]; 
}
