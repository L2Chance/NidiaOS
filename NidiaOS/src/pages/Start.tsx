import { useEffect, useState } from "react"
import loading from "../assets/loading.gif"


export default function Start() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 3000)
        return () => clearTimeout(timer);
    },[]);

    if(!isVisible){
        return null;
    }
    

  return (
    <div><img src={loading} alt="loading icon" /></div>
  )
}
