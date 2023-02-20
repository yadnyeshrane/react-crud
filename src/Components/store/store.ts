import { configureStore,Action  } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk"

import productDataslice from '../Productslcie';
export type RootState=ReturnType<typeof store.getState>
 export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const store = configureStore({
    reducer: {
      // the convention is to name this photos rather than photosStore but photosStore is clearer to me.
    //  photosStore: photosSliceReducer,
  productList:productDataslice
      // anyOtherStore: anyOtherSlice,
  // middleware: ['array of middlewares'],
    
    },
  })
  export default store;