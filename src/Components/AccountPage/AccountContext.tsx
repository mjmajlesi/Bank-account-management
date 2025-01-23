import { createContext, useContext } from "react";
import { Ichildren } from "../Container";
import useLocalStorage from "../../useLocalStorage";
import useLocalNumStorage from "./useLocalNumStorage";

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
  updateCartsValue : (num : number , id : number) => void;
  updateCartsSpent : (num : number , id : number) => void;
  SetCards : React.Dispatch<React.SetStateAction<ICarts[]>>;
  Cards : ICarts[];
  TotalvalueIncre : (id : number , spent : number ,value:number)=> void;
  TotalSpent : number;
}

const AccountContext = createContext({} as IAccountContext);

export const useAccountContext = ()=>{
    return useContext(AccountContext)
};


export function AccountContextProvider({children} : Ichildren){

    const [Totalvalue , setTotalvalue] = useLocalNumStorage("totalValue");
    const [TotalSpent , setTotalSpent] = useLocalNumStorage("totalSpent");

      const [Cards , SetCards] = useLocalStorage<ICarts[]>("Carts" , []);

      const updateCartsValue = (num: number, id: number) => {
        SetCards((prevCards) =>
          prevCards.map((card) =>
            card.id === id ? { ...card, value: num, TotalValue: num } : card
          )
        );
      };
      const updateCartsSpent = (num: number, id: number) => {
        SetCards((prevCards) =>
          prevCards.map((card) =>
            card.id === id ? { ...card, spent: num, TotalValue: num } : card
          )
        );
      };

      const TotalvalueIncre = (id : number , spent : number,value : number)=>{
        const Tvalue = Cards.find(card => card.id === id)
        if(Tvalue) {
          setTotalvalue(Totalvalue + value)
          setTotalSpent(TotalSpent + spent)  
       }
    }
    
    return(
        <AccountContext.Provider value={{
            Totalvalue,
            setTotalvalue,
            updateCartsValue,
            updateCartsSpent,
            Cards,
            SetCards,
            TotalvalueIncre,
            TotalSpent
        }}>
        {children}
        </AccountContext.Provider>
    )
}