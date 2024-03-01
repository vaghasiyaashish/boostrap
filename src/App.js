import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from "react";
// import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";
import Search from "./components/Sass/Getting-started/Search";
import AddProduct from "./components/Sass/Getting-started/AddProduct";
import ListProducts from "./components/Sass/Getting-started/ListProducts";
import Navbars from './components/Navbars'
import SassVariables from '../src/components/Sass/Getting-started/SassVariables';
import Footer from './components/Footer'
import SassNested from "./components/Sass/Getting-started/SassNested";
import Sassimport from "./components/Sass/Getting-started/Sassimport";
import Sassmixin from "./components/Sass/Getting-started/Sassmixin";
import Sassextend from "./components/Sass/Getting-started/Sassextend";
import SassString from "./components/Sass/Sass-Functions/SassString";
import SassNumeric from "./components/Sass/Sass-Functions/SassNumeric";
import SassList from "./components/Sass/Sass-Functions/SassList";
import Sassmaps from "./components/Sass/Sass-Functions/Sassmaps";
import SassSelector from "./components/Sass/Sass-Functions/SassSelector";
import SassIntrospection from './components/Sass/Sass-Functions/SassIntrospection';
import SassColor from "./components/Sass/Sass-Functions/SassColor";
import Overview from "./components/Sass/Customize/Overview";
import Sass from "./components/Sass/Customize/Sass";
import Options from "./components/Sass/Customize/Options";
import Color from "./components/Sass/Customize/Color";
import Colormodes from "./components/Sass/Customize/Colormodes";
import Components from "./components/Sass/Customize/Components";
import CSSvariables from "./components/Sass/Customize/CSSvariables";
import Optimizes from "./components/Sass/Customize/Optimize";


function App() {
  return (
    <Router>
      <Navbars/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="sassvariables" element={<SassVariables/>} />
          <Route path="SassNested" element={<SassNested/>}/>
          <Route path="Sassimport" element={<Sassimport/>}/>
          <Route path="Sassmixin" element={<Sassmixin/>}/>
          <Route path="Sassextend" element={<Sassextend/>}/>
          <Route path="SassString" element={<SassString/>}/>
          <Route path="SassNumeric" element={<SassNumeric/>}/>
          <Route path="SassList" element={<SassList/>}/>
          <Route path="Sassmap" element={<Sassmaps/>}/>
          <Route path="SassSelector" element={<SassSelector/>}/>
          <Route path="SassIntrospection" element={<SassIntrospection/>}/>
          <Route path="SassColor" element={<SassColor/>}/>
          <Route path="Overview" element={<Overview/>}/>
          <Route path="Sass" element={<Sass/>}/>
          <Route path="Options" element={<Options/>}/>
          <Route path="Color" element={<Color/>}/>
          <Route path="Colormodes" element={<Colormodes/>}/>
          <Route path="Components" element={<Components/>}/>
          <Route path="CSSvariables" element={<CSSvariables/>}/>
          <Route path="Optimize" element={<Optimizes/>}/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
