import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const DataContext = createContext()

export const ContextProvider = ({ children }) => {
    const [data, setData] = useState({})

    function updateState(info, action){
        switch(action){
            case 'add_group': {
                const dataCopy = {...data}
                //assign unique id
                info["id"] = uuidv4()
                dataCopy[info.id] = info
                setData(dataCopy)
            }

        }
    }

    return (
        <DataContext.Provider value={{ data, updateState }}>
            { children } 
        </DataContext.Provider>
    )
}
/*
  {
    'id': {
        name: "group name",
        description: "group description",
        budget: 5,
        members:['member-list'],
        expenses: {
            id:
        }
    }
  }  
*/