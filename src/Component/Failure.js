import React from "react"
import {RxCross2} from "react-icons/rx"

export default function Failure(){
    return(
        <>
        <div className="modal fade" id="exampleModalunsucess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header border-0">
                    <div className="d-flex justify-content-center">
                       <RxCross2 className="text-danger"/>
                    </div>
                    <h1 className="modal-title fs-5" id="exampleModalLabel">UNSUCCESSFUL!</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h1>Payment UnSuceessful</h1>
                </div>
                
                </div>
            </div>
        </div>
    </>
    )
}