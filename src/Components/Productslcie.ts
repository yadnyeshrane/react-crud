import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { AppThunk } from "./store/store";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface ProductData {
   productDetils:Object[];
   loading:boolean,
   errors:string,
   category:string,
   Tittle:string,
   Price:String,
   Description:String
   isUpdate:boolean,
   updateId:string

  }
 
  const initialState: ProductData = {
    productDetils: [],
    loading: false,
    errors: "",
    category:"",
    Tittle:"",
    Price:"0",
    Description:"",
    isUpdate:false,
    updateId:""
  }
  const productDataslice = createSlice({
    name: "product",
    initialState,
    reducers: {
      setLoading: (state, { payload }: PayloadAction<boolean>) => {
        state.loading = payload
      },
      storeProductData:(state,payload:any)=>{
        console.log("payloads",payload)
        state.productDetils=payload.payload
      },
      updateCatgeory:(state,payload:any)=>{
       return {...state,"category":payload.payload}
      },
      updateTittle:(state,payload:any)=>{
        return {...state,"Tittle":payload.payload}
       },
       updatePrice:(state,payload:any)=>{
        return {...state,"Price":payload.payload}
       },
       updateDescription:(state,payload:any)=>{
        return {...state,"Description":payload.payload}
       },
       clearAllValues:(state)=>{
       return{...state,"category":"","Tittle":"","Price":"","Description":"","isUpdate":false,"updateId":""}
       },
       onaddNewProduct:(state)=>{
        const tempObject={
            "title":state.Tittle,
            "category":state.category,
            "price":state.Price,
            "description":state.Description,
        
        }
         state.productDetils.push(tempObject)
         toast.success('Product added succesfully',{position: toast.POSITION.TOP_RIGHT,autoClose:500})

       },

       onDeletProduct:(state,payload:any)=>{
state.productDetils=state.productDetils.filter((data:any)=>data.id!=payload.payload)
toast.info('Product deleted succesfully',{position: toast.POSITION.TOP_RIGHT,autoClose:500})
       },
       onProductUpdate:(state,payload:any)=>{
state.isUpdate=true;
state.updateId=payload.payload
       },
       onUpdateProduct:(state:any)=>{
       state.productDetils=state.productDetils.map((data:any,index:any)=>{
     if(index==state.updateId)
     {
        return{...data,"title":state.Tittle,
        "category":state.category,
        "price":state.Price,
        "description":state.Description}
     }
     return data
       })
       
       toast.success('Product updated succesfully',{position: toast.POSITION.TOP_RIGHT,autoClose:500})
       }

  
    },
  })

  export const getProductData = (): AppThunk => {
    return async dispatch => {
      dispatch(setLoading(true))
      try {
        const
        
        baseURL: string = "https://fakestoreapi.com/products"
        // your apiKey should ideally be in a .env file
      //  const apiKey = "AIzaSyBDipCJKnoTuhByJP2pB4A7Fx4SAOXoy-k"
  
        const res = await axios.get(
          `${baseURL}`
        )
  //console.log("Response",res);
       dispatch(setLoading(false));
        dispatch(storeProductData(res.data))

       // dispatch(setPhotos(res.data))
      } catch (error) {
      //  dispatch(setErrors(error))
        dispatch(setLoading(false))
      }
    }
  }
  export const { setLoading,storeProductData ,updateCatgeory,updateTittle,updatePrice,updateDescription,clearAllValues,onaddNewProduct,onDeletProduct,onProductUpdate,onUpdateProduct} = productDataslice.actions

  export default productDataslice.reducer
