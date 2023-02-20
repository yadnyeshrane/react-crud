import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    clearAllValues,
    getProductData,
    onaddNewProduct,
    onDeletProduct,
    onProductUpdate,
    onUpdateProduct,
    updateCatgeory,
    updateDescription,
    updatePrice,
    updateTittle,
} from "./Productslcie";



export default function TableList() {
    const dispatch: any = useDispatch();
    const [modalFlag, setmodalFlag] = useState(false);
    useEffect(() => {
        dispatch(getProductData());
    }, [dispatch]);
    const productData = useSelector((state: any) => state.productList);
    console.log("productData", productData);
    return (
        <div>
          {
            productData.loading? <div className="spinner-border text-primary spinner" role="status">
            <span className="sr-only">Loading...</span>
          </div>:<></>
          }
         

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Sr.no</th>
                        <th scope="col">Category</th>
                        <th scope="col">Tittle</th>
                        <th scope="col">Price</th>
                        <th scope="col" >Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.productDetils != undefined &&
                        productData.productDetils.length > 0 &&
                        productData.productDetils.map(
                            (data: any, index: any) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{data.category}</td>
                                            <td>{data.title}</td>
                                            <td>{data.price}</td>
                                            <td>{data.description}</td>
                                            <td> 
                                                <a
                                                    href="#editEmployeeModal"
                                                    className="edit"
                                                    type="button"
                                                    data-toggle="modal"
                                                    data-target="#exampleModal"
                                                >
                                                    <i
                                                        className="material-icons"
                                                        data-toggle="tooltip"
                                                        title="Edit"
                                                        style={{
                                                            color: "yellow",
                                                        }}
                                                        onClick={() => {
                                                            dispatch(
                                                                onProductUpdate(
                                                                    index
                                                                )
                                                            );
                                                            dispatch(
                                                                updateCatgeory(
                                                                    data.category
                                                                )
                                                            );
                                                            dispatch(
                                                                updateDescription(
                                                                    data.description
                                                                )
                                                            );
                                                            dispatch(
                                                                updatePrice(
                                                                    data.price
                                                                )
                                                            );
                                                            dispatch(
                                                                updateTittle(
                                                                    data.title
                                                                )
                                                            );
                                                        }}
                                                    >
                                                        
                                                    </i>
                                                </a>
                                                <a
                                                    href="#deleteEmployeeModal"
                                                    className="delete"
                                                    data-toggle="modal"
                                                >
                                                    <i
                                                        className="material-icons"
                                                        data-toggle="tooltip"
                                                        title="Delete"
                                                        style={{ color: "red" }}
                                                        onClick={() =>
                                                            dispatch(
                                                                onDeletProduct(
                                                                    data.id
                                                                )
                                                            )
                                                        }
                                                    >
                                                        
                                                    </i>
                                                </a>
                                            </td>
                                        </tr>
                                    </>
                                );
                            }
                        )}
                </tbody>
            </table>
            <div
                className={"modal fade" + (modalFlag ? "show" : "")}
                id="exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ display: modalFlag ? "block" : "none" }}
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {productData.isUpdate
                                    ? "Update The Product"
                                    : "Add New Product"}
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => {
                                    dispatch(clearAllValues());
                                }}
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        onChange={(e: any) => {
                                            //  console.log("value",e.target.value)
                                            dispatch(
                                                updateCatgeory(e.target.value)
                                            );
                                        }}
                                        value={productData.category}
                                        placeholder="Enter category"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">
                                        Tittle
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter Tittle"
                                        value={productData.Tittle}
                                        onChange={(e: any) => {
                                            //  console.log("value",e.target.value)
                                            dispatch(
                                                updateTittle(e.target.value)
                                            );
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Price"
                                        value={productData.Price}
                                        onChange={(e: any) => {
                                            //  console.log("value",e.target.value)
                                            dispatch(
                                                updatePrice(e.target.value)
                                            );
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Description
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows={3}
                                        placeholder="Description.."
                                        value={productData.Description}
                                        onChange={(e: any) => {
                                            //  console.log("value",e.target.value)
                                            dispatch(
                                                updateDescription(
                                                    e.target.value
                                                )
                                            );
                                        }}
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={() => {
                                    dispatch(clearAllValues());
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={async() => {
                                    productData.isUpdate
                                        ? await dispatch(onUpdateProduct())
                                        : await dispatch(onaddNewProduct());
                                        setmodalFlag(false);
                                        await dispatch(clearAllValues())
                                }
                              
                              }
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
