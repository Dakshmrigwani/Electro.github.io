import React from "react"
import {TiTick} from "react-icons/ti"

export default function Failure(){
    return(
        <>
        <div className="modal fade" id="exampleModalunsucess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="d-flex flex-column modal-header border-0">
                    <div className="d-flex justify-content-center display-5 mb-2" >
                       <TiTick className="text-warning"/>
                    </div>
                    <h1 className="modal-title fs-2" id="exampleModalLabel">SUCCESSFUL!</h1>
                    
                </div>
                <div className="modal-body d-flex flex-column justify-content-center align-items-center w-100">
                    <b>Item added to wishlist</b>
                    <p>Thank you for buying our product and visit again</p>
                </div>
                <div className="modal-footer border-0 d-flex justify-content-center w-100">
                    <button type="button" data-bs-dismiss="modal" class="btn btn-primary w-100">Close</button>
                </div>
                
                </div>
            </div>
        </div>
    </>
    )
}