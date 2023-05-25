import React from "react"
import {TiTick} from "react-icons/ti"

export default function Success(){
    return(
        <>
        <div className="modal fade" id="exampleModalsuccess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header border-0">
                    <div className="d-flex justify-content-center">
                       <TiTick className="text-success"/>
                    </div>
                    <h1 className="modal-title fs-5" id="exampleModalLabel">SUCCESSFUL!</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h1>Payment Suceessful</h1>
                </div>
                
                </div>
            </div>
        </div>
        </>
    )
}