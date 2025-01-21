import { createContext, useContext, useState } from "react";
import { Ichildren } from "../Container";
import { Category } from "../../data";

interface ICarts {
  id : number;
  image : string;
  name : string;
  value : number;
  spent : number;
}

export interface IAccountContext {
  Totalvalue: number;
  setTotalvalue: React.Dispatch<React.SetStateAction<number>>;
  TotalValueResie : (value : number , Spent : number) => void;
  Carts : ICarts[];
  setCarts : React.Dispatch<React.SetStateAction<ICarts[]>>;
  updateCartsValue : (num : number , id : number) => void;
  updateCartsSpent : (num : number , id : number) => void;
}

const AccountContext = createContext({} as IAccountContext);

export const useAccountContext = ()=>{
    return useContext(AccountContext)
};


export function AccountContextProvider({children} : Ichildren){

      const [Totalvalue, setTotalvalue] = useState(0);
      const [Carts , setCarts] = useState<ICarts[]>(Category);

      const updateCartsValue = (num : number , id : number)=> {
        setCarts(carts => carts.map(cart=> cart.id == id ? {...cart, value: num } : cart))
      };
      const updateCartsSpent = (num : number , id : number)=> {
        setCarts(carts => carts.map(cart=> cart.id == id ? {...cart, spent: num } : cart))
      };

      const TotalValueResie = (value : number , Spent : number) => {
        if(Totalvalue != 0)
            setTotalvalue(Totalvalue - (value - Spent))
      }
    

    return(
        <AccountContext.Provider value={{
            Totalvalue,
            setTotalvalue,
            TotalValueResie,
            Carts,
            setCarts,
            updateCartsValue,
            updateCartsSpent
        }}>
        {children}
        </AccountContext.Provider>
    )
}