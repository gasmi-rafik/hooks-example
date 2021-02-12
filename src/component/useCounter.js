import {useEffect} from 'react'

export default function useCounter(count) {
    useEffect (()=>{
        document.title= `vous avez cliqué ${count} fois `
      })
    
}
