'use client';
import { useState, useEffect } from 'react';
import Footer from '../../component/Component/Footer'
import HomePage from '../../component/Component/HomePage'
import Notification from '../../component/Component/Notification'

export default function Home() {
  return (
   <div className = "min-h-screen">
  
<HomePage/>
<Footer/>
   </div>
  );
}
