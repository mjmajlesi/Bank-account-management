import { useEffect, useState } from "react"

export default function useLocalStorage<T>(kay: string , initialvalue: T){
        const [value , setValue] = useState<T>(()=>{
                const LocalStorage = localStorage.getItem(kay)
                return LocalStorage !== null ? JSON.parse(LocalStorage) : initialvalue
            }
        );

        useEffect(() => {
            localStorage.setItem(kay , JSON.stringify(value))
        }, [kay , value])

        return [value , setValue] as [typeof value , typeof setValue]
        
};