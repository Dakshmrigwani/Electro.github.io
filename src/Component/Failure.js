import React from "react"
import {RxCross2} from "react-icons/rx"

export default function Failure(){
    return(
        <>
        <div className="container">
            <div className="card" style={{width: "18rem"}}>
                <div className="d-flecx justify-content-center">
                   <RxCross2 className="text-danger"/>
                </div>
                <div className="card-body">
                    <p className="card-text">Payment UnSuccessful</p>
                </div>
            </div>
        </div>
    </>
    )
}