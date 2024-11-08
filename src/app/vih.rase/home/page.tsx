'use client';
import { useState, useEffect } from 'react';
import Footer from '../../component/vih_Component/Footer'
import HomePage from '../../component/vih_Component/HomePage'

export default function Home() {
  return (
   <div className = "min-h-screen">
<HomePage/>
<Footer/>
   </div>
  );
}
