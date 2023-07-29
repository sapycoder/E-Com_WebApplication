import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a"
                    alt=""
                />

                <div className="home_row">
                    {/*Product*/}
                    <Product
                        title="Boat Stone 250 5W Bluetooth Speaker(Black) "
                        price={1999.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/710tGD6oCBL._SL1500_.jpg" 
                        rating={4}
                    />
                    <Product
                        title="Dairy Milk Chocolate Gift Hamper With Nuts and Fruits To Celebrate With Your Family and Loved Ones"
                        price={299.00}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg" 
                        rating={3}
                    />
                    <Product
                        title="BLUEWUD Primax Engineered Wood TV Entertainment Wall Unit , Ideal for up to 42 Inch (Brown, Standard )"
                        price={2999.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/719gGgsuuVL._SL1500_.jpg" 
                        rating={5}
                    />

                </div>

                <div className="home_row">
                    <img
                        className="random_image1"
                        src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"></img>
                </div>
                <h2>PETS COMFY AND CUTE SLEEPING CUSHIONS</h2>
                <div className="home_row">
                    {/*Product*/}
                    <Product
                        title="Mellifluous Premium Waterproof Dog Cat Pet Bed (Small, Green-Black)"
                        price={899.00}
                        image="https://m.media-amazon.com/images/I/41ae7t+QE8L._AC_SY200_.jpg" 
                        rating={3}
                    />
                    <Product
                        title="Mellifluous Black Gold Color Bed for Cats & Dogs (Small, Black-Gold)"
                        price={1099.00}
                        image="https://m.media-amazon.com/images/I/51BDOSH36uL._AC_SY200_.jpg" 
                        rating={4}
                    />
                    <Product
                        title="Mellifluous Small Size Cat Ears Pet Bed, Brown-Cream"
                        price={799.00}
                        image="https://m.media-amazon.com/images/I/311u1ih-IKL._AC_SY200_.jpg" 
                        rating={4}
                    />
                </div>
                <h2>ELECTRONICS AND DIGITAL MEDIA ITEMS</h2>
                <div className="home_row">
                    {/*Product*/}
                    <Product
                        title="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa "
                        price={2500.00}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LLZ8Z8B03ghxLcQf3F6U_Eht3jsDcfOykw&usqp=CAU" 
                        rating={4}
                    />
                    <Product
                        title="Pigeon by Stovekraft Handy and Compact Chopper for effortlessly Chopping Vegetables and Fruits"
                        price={299.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/51o5S2KQA7L._SL1000_.jpg" 
                        rating={3}
                    />
                    <Product
                        title="Prestige 1.2 Litre Kettle 1200-watts, Maroon color (Super solid body with aluminium base)"
                        price={999.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/511wIb%2By8BL._SL1000_.jpg" 
                        rating={5}
                    />

                </div>


                <div className="home_row">
                    <img
                        className="random_image1"
                        src="https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/pcbanner._CB427862063_.jpg"></img>
                </div>

                <div className="home_row">
                    <img
                        className="random_image1"
                        src="https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/a._SY530_QL85_.jpg">
                    </img>
                    <img
                        className="random_image1"
                        src="https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/b._SY530_QL85_.jpg">
                    </img>
                    <img
                        className="random_image1"
                        src="https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/c._SY530_QL85_.jpg">
                    </img>
                    <img
                        className="random_image1"
                        src="https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/d._SY530_QL85_.jpg">
                    </img>
                    <img
                        className="random_image1"
                        src="https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/e._SY530_QL85_.jpg">
                    </img>
                    <img
                        className="random_image1"
                        src="https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/f._SY530_QL85_.jpg">
                    </img>
                    
                </div>
                <h2>WESTERN WEAR - A LINE DRESSES, TOPS AND TUNICS FOR WOMEN</h2>
                <div className="home_row">
                    {/*Product*/}
                    <Product
                        title="Max Rayon a-line Dress "
                        price={679.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/81w5sYZuivL._UL1500_.jpg" 
                        rating={4}
                    />
                    <Product
                        title="Max A-Line Dress "
                        price={799.00}
                        image="https://m.media-amazon.com/images/I/71X66zZPDkL._AC_UL320_.jpg" 
                        rating={3}
                    />
                    <Product
                        title="Cotton Pleated Dress"
                        price={559.00}
                        image="https://m.media-amazon.com/images/I/81krKP2INoL._AC_UL320_.jpg" 
                        rating={5}
                    />

                </div>
 
                <h2>DESIGNER SILK AND COTTON SAREE FOR WOMEN</h2>
                <div className="home_row">
                    {/*Product*/}
                    <Product
                        title="Anni Designer Art Silk Orange Saree With Blouse "
                        price={279.00}
                        image="https://m.media-amazon.com/images/I/91Nfpvp1yhL._AC_UL320_.jpg" 
                        rating={4}
                    />
                    <Product
                        title="Mahi Creation Women's Banarasi Silk Saree"
                        price={599.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/91AkaCx4QJL._UY606_.jpg" 
                        rating={5}
                    />
                    <Product
                        title="RIVANA Women's Banarasi Silk Saree With Blouse Piece"
                        price={799.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71H5yNzHxfL._UL1440_.jpg" 
                        rating={4}
                    />

                </div>
 

                <div className="home_row">
                    <img
                        className="random_image1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Homemain/XCM_Manual_1500x250_1209699_1077610_1209699_in_home_28_01_20_page_5d027374_166d_466f_9f22_5789bd5e69af_jpg._CB423636511_.jpg"></img>
                </div>

                <h2>HOME DECOR ITEMS - MATRESSES, FURNITURE AND DECORATIVES</h2>
                <div className="home_row">
                    {/*Product*/}
                    <Product
                        title="Status 5 x 7 Feet Multi Printed Vintage Persian Carpet Rug Runner  with Anti Slip Backing "
                        price={1500.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71YEzdDdsHL._SL1000_.jpg" 
                        rating={3}
                    />
                    <Product
                        title="Party Propz Rose Gold Metallic Tinsel Foil Fringe Curtains for Celebrations and Decorations ( 3 X 6 ft 10 inches ) - Set of 3"
                        price={799.00}
                        image="https://m.media-amazon.com/images/I/91r49kHmZvL._AC_UL320_.jpg" 
                        rating={5}
                    />
                    <Product
                        title="Gmall Wax Nugget Floating Candles (White) - Pack of 25"
                        price={399.00}
                        image="https://m.media-amazon.com/images/I/41cIqFdszvL._AC_UL320_.jpg" 
                        rating={4}
                    />

                </div>
        

                <div className="home_row">
                    {/*Product*/}
                    <Product
                        title="Rose Home Fashion RHF Multi-Size Sofa Cover for Extra-Wide Couch, Sofa Cover, Extra-Wide Couch Cover for Dogs, Extra-Wide Couch Covers for Pets, Couch Slipcover (Sofa-Extra Wide Set)"
                        price={34000.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/7161pZQeuSL._AC_SL1200_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <img
                        className="random_image2"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"></img>
                </div>
            </div>
            
        </div>
    )
}

export default Home
