import React, { useState,useEffect, useRef } from "react";
import { Card } from 'primereact/card';

const Login=()=>{
    return(
        <div>
           <div className="p-grid">
    <div className="p-col" style={{backgroundColor:'var(--blue-500)'}} >1</div>
    <div className="p-col"><Card>
    Content
</Card></div>
</div>
        </div>
    )
}

export default Login;