import { useCallback, useState } from "react";

export function useArray(initialValue){

    const[array,setArray] = useState(initialValue)

    const push = useCallback(element => {
        setArray(a=> [...a, element])
    },[])

    const replace = useCallback((index, newElement) => {
        setArray(a=>{
            return[...a.slice(0,index),newElement, ...a.slice(index+1)]
        })
    },[])

    const filter = useCallback(callBack => {
        setArray(a=>{
            return a.filter(callBack)
        })
    },[])

    const remove = useCallback(index => {
            setArray(a=>{
                return[...a.slice(0,index), ...a.slice(index+1)]
            })
    },[])

    const clear = useCallback( ()=> {
        setArray([])
    },[])

    const reset = useCallback( ()=> {
        setArray([initialValue])
    },[])

    return {array, set: setArray, push, replace, filter, remove, clear, reset}

}