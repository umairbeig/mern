
import {configureStore} from '@reduxjs/toolkit'
import memoReducer from '../reducers/memoReducer'


 export const store=configureStore(
    {
        reducer:memoReducer
        
    }
)



