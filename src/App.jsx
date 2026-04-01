
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
import { ToastContainer } from 'react-toastify'



const getProducts = async() => {
  const res = await fetch('/products.json')
  return res.json()
}

const productPromise =getProducts()

function App() {
   const [activeTab, setActiveTab ] =useState("product")
  const [carts, setCarts] =useState([]);
  // const [count, setCount] = useState([]);

  return (
    
      <>
      <Navbar count={carts.length} ></Navbar>
      <Banner></Banner>
      <Rating></Rating>



      <div className="tabs tabs-box justify-center bg-transparent m-10">
 
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" onClick={() => setActiveTab("product")}defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart(${carts.length})`} onClick={() => setActiveTab("Cart")} />
</div>

    {activeTab === "product" && <Suspense fallback= <span className="loading loading-infinity loading-xl"></span>>
        <Products productPromise={productPromise}  carts={carts} setCarts={setCarts} ></Products>
    </Suspense>}

    {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}

      <Getstarted></Getstarted>
      <Cards></Cards>
      <Workflow></Workflow>
      <Footer></Footer>
      <ToastContainer/>
      </>
  )
}

export default App
