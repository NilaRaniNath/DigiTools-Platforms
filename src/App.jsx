
import './App.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Rating from './Rating'
import Getstarted from './Getstarted'
import Cards from './Cards'
import Workflow from './Workflow'
import Footer from './Footer'
import Products from './Products'
import { Suspense, useState } from 'react'
import Cart from './Cart'



const getProducts = async() => {
  const res = await fetch('/products.json')
  return res.json()
}

const productPromise =getProducts()

function App() {
   const [activeTab, setActiveTab ] =useState("product")
  console.log(activeTab)
  return (
    
      <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Rating></Rating>



      <div className="tabs tabs-box justify-center bg-transparent">
 
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" onClick={() => setActiveTab("product")}defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart" onClick={() => setActiveTab("Cart")} />
</div>

    {activeTab === "model" && <Suspense fallback=<span className="loading loading-infinity loading-xl"></span>>
        <Products productPromise={productPromise} ></Products>
    </Suspense>}

    {activeTab === "cart" && <Cart></Cart>}

      <Getstarted></Getstarted>
      <Cards></Cards>
      <Workflow></Workflow>
      <Footer></Footer>
      </>
  )
}

export default App
