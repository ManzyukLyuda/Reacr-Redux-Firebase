import React, { ReactChild, ReactChildren, ReactElement } from "react";
import { useSelector } from "react-redux";
import './Spinner.css'

interface Props{
    children: React.ReactNode
}


const Spinner = ({children}: Props) => {
    const isLoading = useSelector((state: any) =>  state.firebaseLoading.isLoading);

    if(isLoading){
        return    (
            <div className="preloader-wrapper">
                <div className="spinner-layer">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
) 
    }
    return <>{children}</>
    
}

export default Spinner;