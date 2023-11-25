//Các thao tác: GET, PUT, POST, DELETE
import { useState } from "react";
import React {useState,useEffect} from "react";


function fetchExample(){
    const [data,setData] = useState(null)
    return(
        <div>
            {data ? {JSON.stringify(data,null,2)} :'Data loading...'  }
        </div>
    );
}
