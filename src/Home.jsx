import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>

            <div className="home__row">
                 <Product id="12321341" title="The Unspoken: An Ashe Cayne Novel Kindle Edition" price={11.96} image="https://images-na.ssl-images-amazon.com/images/I/810kGvYXy7L.__BG0,0,0,0_FMpng_AC_SY220_.jpg" rating={5} />
                 <Product id="12421341" title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red" price={64.99} image="https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg" rating={4} />

            </div>

            <div className="home__row">
                 <Product id="12321342" title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)" price={275.98} image="https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg" rating={3} />
                 <Product id="12321331" title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR" price={199.99} image="https://m.media-amazon.com/images/I/41ehOZgmMML._AC_SL260_.jpg" rating={5} />
                 <Product id="12321321" title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Turquoise, Model Number: VSC-550BT-TQ" price={44.48} image="https://images-na.ssl-images-amazon.com/images/I/41yavwjp-8L._AC_SY200_.jpg" rating={2} />
            </div>
            
            <div className="home__row">
            <Product id="12331241" title="PlayStation 4 Slim 1TB Console" price={399.99} image="https://images-na.ssl-images-amazon.com/images/I/31qwualUaLL._AC_SY200_.jpg" rating={5} />
            </div>
        </div>
    )
}

export default Home
