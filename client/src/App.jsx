
import './App.css'
import Navbar from "./component/Navbar"
import Main from "./component/Main.jsx"
import Card from "./component/Card.jsx"
import Footer from "./component/Footer.jsx"
// import img1 from "./assets/banner.avif";
import Blogs from './component/Blogs';
// import Abc from './component/abc';
import Banner from './component/banner';
import BestSeller from "./component/BestSeller.jsx"
import Hard from './component/hard.jsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Main/>
   
   <h1 className="text-center mt-5">Featured item</h1>
   <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur!</p>
   <Card/>
   <Banner/>
   {/* <img className="img-fluid"  src={img1}></img> */}

   <h1 className="text-center mt-5">Best Seller</h1>
   <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur!</p>
   <BestSeller/>
   <Hard/>

   <div className='container'>
        
       
         </div>
         <h1 className='text-center mt-5'>Latest Blogs</h1>
         <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, quasi.</p>
         <Blogs/>
   <Footer/>

    
 
   </>
  )
}

export default App
