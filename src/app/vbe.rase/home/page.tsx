'use client';
import { useState, useEffect } from 'react';
import Footer from '../../component/vbe_Component/Footer'
import HomePage from '../../component/vbe_Component/HomePage'
import Notification from '../../component/vbe_Component/Notification'

export default function Home() {
  return (
   <div className = "min-h-screen">
  
<HomePage/>
<Footer/>
   </div>
  );
}
