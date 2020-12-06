import React, { useEffect, useState } from 'react';
import { getBankDataColumns, getBankDataValues } from '../services/bankAPI';

function BankCards() {
    const [ bankDataColumns ,setBankDataColumns] = useState([]);
    
    useEffect(() => {
        getBankDataColumns().then(data => setBankDataColumns(data));
    }, []);

    const [ bankDataValues, setBankDataValues] = useState({})
    useEffect(() => {
        getBankDataValues().then(data => setBankDataValues(data));
    }, []);

    const keys=[{bankDataColumns}];
    var commonKeys=[{bankDataValues}];

    let output = keys.map(function(obj,index){
    let myobj = {};
     myobj[commonKeys[index]] = obj;
      return myobj;
    });

     console.log(output);


    
    return (
        <div className="main">
         <h1>  </h1>
         <div className="cardscontainer">
            <article className="card">
               <p> {bankDataColumns[2]} </p> 
            </article>
         </div>
        </div>
    )
}

export default BankCards