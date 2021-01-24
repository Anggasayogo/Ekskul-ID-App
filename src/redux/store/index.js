import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from 'redux-thunk'
import reducer from '../reducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
    let store = createStore(
        persistedReducer,
        applyMiddleware(ReduxThunk)
    )

    let persistor = persistStore(store)
    return { store, persistor }
}