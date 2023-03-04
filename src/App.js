import React from "react"
import {Context} from "./context/context"
import {Navigate, Route, Routes} from "react-router-dom"
import {HomePage} from "./pages/HomePage"
import {ProductOverView} from "./pages/ProductOverView"
import {Header} from "./components/header/Header"
import {Footer} from "./components/footer/Footer"
import {BtnScroll} from "./components/btn-scroll/BtnScroll"
import * as PropTypes from "prop-types";

function Redirect(props) {
    return null;
}

Redirect.propTypes = {
    from: PropTypes.string,
    to: PropTypes.string
};

export default function App() {
    const productId = {id: 0}

    return (
        <main>
            <Context.Provider value={productId}>
                <Header />
                <Routes>
                    <Route path='/home' element={ <HomePage /> }/>
                    <Route path='/products/:id' element={ <ProductOverView /> }/>
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
                <BtnScroll />
                <Footer/>
            </Context.Provider>
        </main>
    )
}
