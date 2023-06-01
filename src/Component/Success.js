import React from "react"
import {TiTick} from "react-icons/ti"

export default function Success(){
    return(
        <>
        <div className="modal fade" id="exampleModalsuccess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="d-flex flex-column modal-header border-0">
                    <div className="d-flex justify-content-center display-5 mb-2" >
                       <TiTick className="text-success"/>
                    </div>
                    <h1 className="modal-title fs-2" id="exampleModalLabel">SUCCESSFUL!</h1>
                    
                </div>
                <div className="modal-body d-flex flex-column justify-content-center align-items-center w-100">
                    <b>Payment Successful</b>
                    <p>Thank you for buying our product</p>
                </div>
                <div className="modal-footer border-0 d-flex justify-content-center w-100">
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary w-100">Close</button>
                </div>
                
                </div>
            </div>
        </div>
        </>
    )
}