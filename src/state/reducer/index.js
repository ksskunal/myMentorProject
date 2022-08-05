import { combineReducers } from "redux";
import adminreducer from "./adminStatusChange"

const reducers = combineReducers({
    admin : adminreducer
})

export default reducers