import { createContext, useContext, useEffect, useState } from "react";
import { Ichildren } from "../Container";
import { Category } from "../../data";
import useLocalStorage from "../../useLocalStorage";

interface ICarts {
  id : number;
  image : string;
  name : string;
  value : number;
  spent : number;
  color : string;
  TotalValue : number;
}

export interface IAccountContext {
  Totalvalue: number;
  setTotalvalue: React.Dispatch<React.SetStateAction<number>>;
  Carts : ICarts[];
  setCarts : React.Dispatch<React.SetStateAction<ICarts[]>>;
  updateCartsValue : (num : number , id : number) => void;
  updateCartsSpent : (num : number , id : number) => void;
  SetCards : React.Dispatch<React.SetStateAction<ICarts[]>>;
  Cards : ICarts[];
  TotalvalueIncre : (id : number) => void;
}

const AccountContext = createContext({} as IAccountContext);

export const useAccountContext = ()=>{
    return useContext(AccountContext)
};


export function AccountContextProvider({children} : Ichildren){

    const [Totalvalue, setTotalvalue] = useState(() => {
        if (typeof window !== 'undefined') {
          const saved = localStorage.getItem('totalValue');
          const parsedValue = saved ? parseInt(saved, 10) : 0;
          return isNaN(parsedValue) ? 0 : parsedValue;
        }
        return 0;
      });

      useEffect(() => {
        localStorage.setItem('totalValue', Totalvalue.toString());
      }, [Totalvalue]);

      const [Carts , setCarts] = useState<ICarts[]>(Category);
      const [Cards , SetCards] = useLocalStorage<ICarts[]>("Carts" , []);

      const updateCartsValue = (num : number , id : number)=> {
        setCarts(carts => carts.map(cart=> cart.id == id ? {...cart, value: num} : cart))
        SetCards(cardItems => {
          const existingItemIndex = cardItems.findIndex(card => card.id === id);
          if (existingItemIndex !== -1) {
              return cardItems.map((card, index) =>
                  index === existingItemIndex ? { ...card, value: num  , TotalValue: num  } : card
              );
          } else {
              const newItem = Carts.find(cart => cart.id === id);
              if (newItem) {
                  return [...cardItems, { ...newItem, value: num  , TotalValue: num  }];
              } else {
                  return [...cardItems, { id, value: num, image: '', name: '', spent: 0, color: '', TotalValue: 0 }];
              }
          }
      });
      };
      const updateCartsSpent = (num : number , id : number)=> {
        setCarts(carts => carts.map(cart=> cart.id == id ? {...cart, spent: num } : cart))
        SetCards(cardItems => {
          const existingItemIndex = cardItems.findIndex(card => card.id === id);
          if (existingItemIndex !== -1) {
              return cardItems.map((card, index) =>
                  index === existingItemIndex ? { ...card, spent: num } : card
              );
          } else {
              const newItem = Carts.find(cart => cart.id === id);
              if (newItem) {
                  return [...cardItems, { ...newItem, spent: num }];
              } else {
                  return [...cardItems, { id, value: num, image: '', name: '', spent: 0, color: '', TotalValue: 0 }];
              }
          }
      });
      };

      const TotalvalueIncre = (id : number ) => {
        const Tvalue = Cards.find(card => card.id === id)
        if(Tvalue)
          setTotalvalue(Totalvalue + (Tvalue.TotalValue))  
       }
    
    return(
        <AccountContext.Provider value={{
            Totalvalue,
            setTotalvalue,
            Carts,
            setCarts,
            updateCartsValue,
            updateCartsSpent,
            Cards,
            SetCards,
            TotalvalueIncre
        }}>
        {children}
        </AccountContext.Provider>
    )
}