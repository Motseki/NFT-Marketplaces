import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import { useMetaMask } from "metamask-react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import data from "./data"

import './App.css'


export default function App() {

  const cards = data.map(item => {
          return (
              <Card 
                  key={item.id}
                  {...item}
                
              />
          )
   })        
  

  const { status, connect, account, chainId, ethereum } = useMetaMask();

    if (status === "initializing") return <div>
      <Navbar />
      <Hero />
      Synchronisation with MetaMask ongoing...
      </div>

    if (status === "unavailable") return <div>
      <Navbar />
      <Hero />
      MetaMask not available :(</div>

    if (status === "notConnected") return <div>
        <Navbar />
        <Hero />
        <button onClick={connect}>Connect to MetaMask</button>
     </div>

    if (status === "connecting") return <div>
      <Navbar />
      <Hero />
      Connecting...</div>

    if (status === "connected") return <div>
        <Navbar />
        Connected account {account} on chain ID {chainId}

        <section className="cards-list">
        {cards}
        </section>
      </div>

    return null;

    // return (
    //  <BrowserRouter>
    //  <Routes>
    //    <Route path='/' element={<Home />} />
    //    {/* <Route path='/users' element={<Users />} /> */}
    //  </Routes>
    //  </BrowserRouter>
    // )
 }

