import React from "react"
import {TiTick} from "react-icons/ti"

export default function Success(){
    return(
        <>
        <div className="container">
            <div className="card" style={{width: "18rem"}}>
                <div className="d-flecx justify-content-center">
                   <TiTick className="text-success"/>
                </div>
                <div className="card-body">
                    <p className="card-text">Payment Successful</p>
                </div>
            </div>
        </div>
        </>
    )
}