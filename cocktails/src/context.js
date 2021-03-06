import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('c');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () =>{
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json();
      const {drinks} = data;
      if(drinks) {
        const newCocktails = drinks.reduce((arr, item)=>{
          const {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strGlass: glass
          } = item;

          const obj ={id, name, image, info, glass};

          arr.push(obj)
          return arr
        }, []);
        setCocktails(newCocktails)
      } else{
        setCocktails([]);
      }
      setLoading(false)
    } catch(error) {
      setLoading(false)
    }
  }, [searchTerm])


  useEffect(()=>{
    fetchDrinks()
  }, [searchTerm, fetchDrinks])


  return <AppContext.Provider 
    value={{
      loading, 
      cocktails,
      setSearchTerm
    }}>
    {children}
  </AppContext.Provider>
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
