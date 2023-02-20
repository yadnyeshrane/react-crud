import React from "react";

function Header() {
    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>
                            Manage <b>Product</b>
                        </h2>
                    </div>
                    <div className="col-sm-6">
                        <a
                            href="#addEmployeeModal"
                            className="btn btn-success"
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModal"
                        >
                            <i className="material-icons"></i>{" "}
                            <span>Add New Product</span>
                        </a>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
