import { useEffect, useState } from "react"

const useLoadAllInventory=()=>{
    const [inventories,setInventories]=useState([]);
    useEffect(()=>{
        fetch('https://inventory-management-assignmen.herokuapp.com/inventories')
        .then(res=>res.json())
        .then(data=>setInventories(data));
    },[]);
    return [inventories,setInventories];
}
export default useLoadAllInventory;