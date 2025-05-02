import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavScrollExample from './header-comp/header';
import Head from './services-head/service-head';
import ServicesCard from './service-card/services-card';
import servie1 from "../assets/image/service-card-img-1.jpg";
import servie2 from "../assets/image/service-card-img-2.jpg";
import servie3 from "../assets/image/service-card-img-3.jpg";
import SaleComp from './sale-comp/sale-comp';


function OurService() {

  return (
    <>
    <NavScrollExample/>
    <Head/>
    <ServicesCard title="Fashion Design" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspici" image={servie1}/>
    <ServicesCard  title="Furniture Design" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspici" image={servie2}/>
    <ServicesCard title="Handmade Craft" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspici" image={servie3}/>
    <SaleComp/>
    </>
  )
}

export default OurService;
