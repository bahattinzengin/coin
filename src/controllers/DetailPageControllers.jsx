import React, { useEffect, useState } from 'react'
import DetailPageView from '../views/DetailPageView'
import { useParams } from 'react-router-dom';
import Model from '../models/DetailPageModel';
const DetailPageControllers = () => {

const [coin ,setCoin]=useState(null);

const {id} =useParams();
// console.log(coin);

useEffect(()=>{
Model.getCoinDetails(id).then((data)=>setCoin(data));

  
},[]);

const model =new Model(coin);


  return (
  <DetailPageView model ={model}/>
  )
}

export default DetailPageControllers