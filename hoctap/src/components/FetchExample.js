//Các thao tác: GET, PUT, POST, DELETE
import { useEffect, useState } from "react";
import React {useState,useEffect} from "react";


function fetchExample(){
    const [data,setData] = useState(null)
    useEffect(() =>{},null);
    return(
        <div>
            {data ? <pre>{JSON.stringify(data,null,2)}</pre> :'Data loading...'  }
        </div>
    );
}
