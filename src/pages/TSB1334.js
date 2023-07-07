import React, {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { THING_ROUTE } from '../utils/consts';
import {Context} from "../index";
import {fetchDevices} from "../http/deviceAPI";

function TSB () {

    const {device} = useContext(Context)

    useEffect(() => {
    
        fetchDevices( 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
            
        })
    }, [])
    useEffect(() => {
      fetchDevices( device.page,10).then(data => {
          device.setDevices(data.rows)
          device.setTotalCount(data.count)
      })
    }, [device.page])
 const navigate = useNavigate()
  return (

    
    <div id="app">
    
   <div class='nachalo_shop'>
<h6 class='text_bar_1'>Летний сезон</h6>
<h6 class='text_bar_2'>Your Privacy. Cookies and other similar technologies are an essential part of how our Platform works.<br/>
                           The main goal of cookies is to make your browsing experience easier and more efficient<br/> 
                                      and to improve our services and the Platform itself.</h6>
   </div>

    <section class="shop_grid_area section-padding-0">


            <div class="row">


                <div class="col-12 col-md-12 col-lg-12 gy-0">
                    <div class="shop_grid_product_area">


                        <div class="row gx-1 overflow-hidden ">

                        
      
                        
                        <div class="col-12 col-sm-6 col-lg-3 col-md-6   guk">
                                <div class="single-product-wrapper bg-transparent ">
                                    <div class="product-img  "onClick = {()=> navigate(THING_ROUTE)}  >
                                    <img src={process.env.REACT_APP_API_URL + device.img_1} alt=""/>
                                    <img class="hover-img" src={process.env.REACT_APP_API_URL + device.img_2} alt=""/>
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                                            <h6>Knot Front Mini Dress</h6>
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div class="col-12 col-sm-6 col-lg-3 col-md-6  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                
                              
                                    <div class="product-img  " >
                                    <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw4d04620b/original/90_1008565-1A06807_5B040_10_VersaceAlloverShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>
                                    
                                    <img class="hover-img" src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwfd2ee656/original/90_1008565-1A06807_5B040_15_VersaceAlloverShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>

                                    
                                   
                              
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                                    
                                            <h6>Knot Front Mini Dress</h6>
                                 
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                    
                                        
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>


                            <div class="col-12 col-sm-6 col-lg-3 col-md-6  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                   
                                    <div class="product-img  ">
                                    <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw289fa5ab/original/90_1008608-1A07717_2D850_10_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>
                                    
                                    <img class="hover-img" src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw240c1d9a/original/90_1008608-1A07717_2D850_15_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>

                                        {/* <div class="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div> */}
                                   
                                        
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                               
                                            <h6>Knot Front Mini Dress</h6>
                               
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                    
                                         
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>


                            <div class="col-12 col-sm-6 col-lg-3 col-md-6  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                   
                                    <div class="product-img  " >
                                    <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw23b6e440/original/90_1010681-1A07743_5P830_10_StripedSeashellBaroqueShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>
                                    
                                    <img class="hover-img" src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwbce26b21/original/90_1010681-1A07743_5P830_15_StripedSeashellBaroqueShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>

                                        {/* <div class="product-badge offer-badge">
                                            <span>-30%</span>
        
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                               
                                            <h6>Knot Front Mini Dress</h6>
                               
                                        <p class="product-price"><span class="old-price">$75.00</span> $55.00</p>
                                        <div class="hover-content">
                                    
                                         
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>
                            <div class="col-12 col-sm-4 col-lg-3  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                   
                                    <div class="product-img ramka " >
                                    <img src="https://static.fendi.com/dam/is/image/fendi/7VA582AMA3F1JS3_01?wid=526&hei=526&hash=5561e14990d58c38e80987f535b6c0c8-1869c5dfe45&sw=526&sh=526" alt=""/>
                                    
                                    <img class="hover-img" src="https://static.fendi.com/dam/is/image/fendi/7VA582AMA3F1JS3_99?wid=526" alt=""/>

                                        {/* <div class="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div> */}
                                   
                                        
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                               
                                            <h6>Knot Front Mini Dress</h6>
                               
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                    
                                         
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-3 col-md-6  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                   
                                    <div class="product-img  " >
                                    <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1230a808/original/90_1010681-1A07743_5V510_10_StripedSeashellBaroqueShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>
                                    
                                    <img class="hover-img" src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw013966bb/original/90_1010681-1A07743_5V510_15_StripedSeashellBaroqueShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>

                                        {/* <div class="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div> */}
                                   
                                        
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                               
                                            <h6>Knot Front Mini Dress</h6>
                               
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                    
                                         
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-3 col-md-6  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                   
                                    <div class="product-img  " >
                                    <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw6d5e0ab2/original/90_1003926-1A06140_5B950_10_BaroccoSilhouetteSilkShirt-Shirts-versace-online-store_0_2.jpg?sw=748&sh=1050&sm=fit" alt=""/>
                                    
                                    <img class="hover-img" src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw3db24492/original/90_1003926-1A06140_5B950_15_BaroccoSilhouetteSilkShirt-Shirts-versace-online-store_0_2.jpg?sw=748&sh=1050&sm=fit" alt=""/>

                                        {/* <div class="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div> */}
                                   
                                        
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                               
                                            <h6>Knot Front Mini Dress</h6>
                               
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                    
                                         
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>

                            <div class="col-12 col-sm-12 col-lg-6 col-md-12  guk ">
                                <div class="single-product-wrapper bg-transparent  ">                     
                                    <div class="product-img  " >
                                    <img class='' src="https://media.kenzo.com/b2cprd/content/default/PLP_SS23/SS23_T-SHIRTS_HOMME_RUPTURE_MERCH_DESKTOP_01.jpg?twic=v1/resize=1440" alt=""/>                               
                                    </div>       
                                </div>
                            </div>

                            <div class="col-12 col-sm-6 col-lg-3 col-md-6  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                   
                                    <div class="product-img  " >
                                    <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw289fa5ab/original/90_1008608-1A07717_2D850_10_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>
                                    
                                    <img class="hover-img" src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw240c1d9a/original/90_1008608-1A07717_2D850_15_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>

                                        {/* <div class="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div> */}
                                   
                                        
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                               
                                            <h6>Knot Front Mini Dress</h6>
                               
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                    
                                         
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>

                            <div class="col-12 col-sm-6 col-lg-3 col-md-6  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                   
                                    <div class="product-img  " >
                                    <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw289fa5ab/original/90_1008608-1A07717_2D850_10_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>
                                    
                                    <img class="hover-img" src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw240c1d9a/original/90_1008608-1A07717_2D850_15_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>

                                        {/* <div class="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div> */}
                                   
                                        
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                               
                                            <h6>Knot Front Mini Dress</h6>
                               
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                    
                                         
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>
                            




                            <div class="col-12 col-sm-6 col-lg-3 col-md-6  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                   
                                    <div class="product-img  " >
                                    <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw289fa5ab/original/90_1008608-1A07717_2D850_10_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>
                                    
                                    <img class="hover-img" src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw240c1d9a/original/90_1008608-1A07717_2D850_15_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>

                                        {/* <div class="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div> */}
                                   
                                        
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                               
                                            <h6>Knot Front Mini Dress</h6>
                               
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                    
                                         
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>


                            <div class="col-12 col-sm-6 col-lg-3 col-md-6  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                   
                                    <div class="product-img  " >
                                    <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw289fa5ab/original/90_1008608-1A07717_2D850_10_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>
                                    
                                    <img class="hover-img" src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw240c1d9a/original/90_1008608-1A07717_2D850_15_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>

                                        {/* <div class="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div> */}
                                   
                                        
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                               
                                            <h6>Knot Front Mini Dress</h6>
                               
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                    
                                         
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>

                            <div class="col-12 col-sm-12 col-lg-6 col-md-12  guk ">
                                <div class="single-product-wrapper bg-transparent gugu ">                     
                                    <div class="product-img  " >
                                    <img src="https://media.kenzo.com/b2cprd/content/default/PLP_SS23/SS23_T-SHIRTS_HOMME_RUPTURE_MERCH_DESKTOP_02.jpg?twic=v1/resize=1440" alt=""/>                               
                                    </div>       
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-3 col-md-6  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                   
                                    <div class="product-img  " >
                                    <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw289fa5ab/original/90_1008608-1A07717_2D850_10_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>
                                    
                                    <img class="hover-img" src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw240c1d9a/original/90_1008608-1A07717_2D850_15_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>

                                        {/* <div class="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div> */}
                                   
                                        
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                               
                                            <h6>Knot Front Mini Dress</h6>
                               
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                    
                                         
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>

                            <div class="col-12 col-sm-6 col-lg-3 col-md-6  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                   
                                    <div class="product-img  " >
                                    <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw289fa5ab/original/90_1008608-1A07717_2D850_10_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>
                                    
                                    <img class="hover-img" src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw240c1d9a/original/90_1008608-1A07717_2D850_15_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>

                                        {/* <div class="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div> */}
                                   
                                        
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                               
                                            <h6>Knot Front Mini Dress</h6>
                               
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                    
                                         
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-3 col-md-6  guk">
                                <div class="single-product-wrapper bg-transparent ">
                                   
                                    <div class="product-img  " >
                                    <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw289fa5ab/original/90_1008608-1A07717_2D850_10_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>
                                    
                                    <img class="hover-img" src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw240c1d9a/original/90_1008608-1A07717_2D850_15_BaroccoSilhouetteChambrayShirt-DenimShirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit" alt=""/>

                                        {/* <div class="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div> */}
                                   
                                        
                                        <div class="product-description bbb1">
                                        <span>topshop</span>
                               
                                            <h6>Knot Front Mini Dress</h6>
                               
                                        <p class="product-price"> $55.00</p>
                                        <div class="hover-content">
                                    
                                         
                                        </div>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>
                       



                        </div>
                    </div>
                
                    <nav aria-label="navigation">
                        <ul class="pagination mt-50 mb-70">
                            <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">...</a></li>
                            <li class="page-item"><a class="page-link" href="#">21</a></li>
                            <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-right"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        
    </section>


</div>
    
  )
}
export default TSB;