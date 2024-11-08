'use client';
import { useState, useEffect } from 'react';
import Footer from '../../component/vbh_Component/Footer'
import HomePage from '../../component/vbh_Component/HomePage'

export default function Home() {
  return (
   <div className = "min-h-screen">
<HomePage/>
<Footer/>
   </div>
  );
}
