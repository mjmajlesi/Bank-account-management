import { createContext, useContext, useState } from "react";
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
  TotalvalueIncre : (value : number , spent : number , id : number) => void;
}

const AccountContext = createContext({} as IAccountContext);

export const useAccountContext = ()=>{
    return useContext(AccountContext)
};


export function AccountContextProvider({children} : Ichildren){

      const [Totalvalue, setTotalvalue] = useState(0);
      const [Carts , setCarts] = useState<ICarts[]>(Category);
      const [Cards , SetCards] = useLocalStorage<ICarts[]>("Carts" , []);

      const updateCartsValue = (num : number , id : number)=> {
        setCarts(carts => carts.map(cart=> cart.id == id ? {...cart, value: num } : cart))
        SetCards(cardItems => {
          const existingItemIndex = cardItems.findIndex(card => card.id === id);
          if (existingItemIndex !== -1) {
              return cardItems.map((card, index) =>
                  index === existingItemIndex ? { ...card, value: num } : card
              );
          } else {
              const newItem = Carts.find(cart => cart.id === id);
              if (newItem) {
                  return [...cardItems, { ...newItem, value: num }];
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

      const TotalvalueIncre = (value : number , spent : number , id : number ) => {
        const Tvalue = Cards.find(card => card.id === id)
        if(Tvalue)
          setTotalvalue(Totalvalue + (Tvalue.TotalValue + (value - spent)))  
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