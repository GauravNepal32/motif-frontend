import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./About";
import Partner from "./Partner";
import Services from "./Services";
import Contact from "./Contact";
import Courses from "./Courses";
import Blogs from "./CompanyPages/Blogs";
import Gallery from "./CompanyPages/Gallery";
import { GlobalProvider } from "./global/baseURL";


function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <BrowserRouter>
      <>
       <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/:id" element={<Courses />} />
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
        <Footer />
      </>
      </BrowserRouter>
    </div>
    </GlobalProvider>

  );
}

export default App;
