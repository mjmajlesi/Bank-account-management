import { useEffect, useState } from "react";

    
export default function useLocalNumStorage(kay: string){
    const [value, setValue] = useState(() => {
        if (typeof window !== 'undefined') {
          const saved = localStorage.getItem(kay);
          const parsedValue = saved ? parseInt(saved, 10) : 0
          return isNaN(parsedValue) ? 0: parsedValue;
        }
        return 0;
      });

      useEffect(() => {
        localStorage.setItem(kay, value.toString());
      }, [value , kay]);

      return [value , setValue] as [typeof value , typeof setValue]
}