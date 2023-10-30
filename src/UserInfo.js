import {useContext} from "react";
import {sharedData} from "./App";
import  './App.css'
function UserInfo(){
    const user = useContext(sharedData);
    return( <div>
        <fieldset>
        <h1>Welcome {user}!!!</h1>
        </fieldset>
    </div>
);
}
export default UserInfo;