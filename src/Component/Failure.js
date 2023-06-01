import React from "react"
import {RxCross2} from "react-icons/rx"

export default function Failure(){
    return(
        <>
        <div className="modal fade" id="exampleModalunsucess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="d-flex flex-column modal-header border-0">
                    <div className="d-flex justify-content-center display-5 mb-2" >
                       <RxCross2 className="text-danger"/>
                    </div>
                    <h1 className="modal-title fs-2" id="exampleModalLabel">UNSUCCESSFUL!</h1>
                    
                </div>
                <div className="modal-body d-flex flex-column justify-content-center align-items-center w-100">
                    <b>Remove from cart</b>
                    <p>Please check it and try again</p>
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