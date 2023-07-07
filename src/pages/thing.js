import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Thing = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1367 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1367, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 471 },
          items:2
        },
        mobile: {
          breakpoint: { max: 471, min: 0 },
          items: 1
        }
      };
  return (

    <div >  
      
        <div class='container11 '>
                
        <div class='row '>
        <div class= 'col-12 col-sm-8 col-md-8 '>
         <div class='row gy-2 gx-2'>
        <div class= 'col-12 col-sm-12 col-md-6'>
            <img src='https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwc622e509/original/90_1008037-1A06913_5G540_10_LeMaschereWindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=850&sh=1200&sm=fit'/>
        </div>
        <div class= 'col-12 col-sm-12 col-md-6'>
                <img src='https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwf78a0539/original/90_1008037-1A06913_5G540_15_LeMaschereWindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=850&sh=1200&sm=fit'/>
        </div>


        <div class= 'col-12 col-sm-12 col-md-6'>
                <img src='https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwc622e509/original/90_1008037-1A06913_5G540_10_LeMaschereWindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=850&sh=1200&sm=fit'/>
        </div>
        <div class= 'col-12 col-sm-12 col-md-6'>
                <img src='https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw89068ee8/original/90_1008037-1A06913_5G540_18_LeMaschereWindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=850&sh=1200&sm=fit'/>
        </div>
       


        <div class= 'col-12 col-sm-12 col-md-6'>
                <img src='https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw6a2298b0/original/90_1008037-1A06913_5G540_16_LeMaschereWindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=850&sh=1200&sm=fit'/>
        </div>
        <div class= 'col-12 col-sm-12 col-md-6'>
                <img src='https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1f5cbd48/original/90_1008037-1A06913_5G540_24_LeMaschereWindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=850&sh=1200&sm=fit'/>
        </div>

        </div>   
        </div>     
        <div class= 'col-12 col-sm-12 col-md-4 ' id='sticky' >
                <div class='text1'>Джинсовая куртка</div>
                <div class='price'>3450₽</div>
                <hr class="hr-line1"/>

            <div class='row color_class overflow-hidden'>

                <div class='color '> Размер:</div>
               <button class='color1 focus'> <span class=' '>XS</span></button>
               <button class='color1 focus px-3'> <span class=' '>S</span></button>
               <button class='color2 focus '> <span class=' '>M</span></button>
               <button class='color1 focus px-3'> <span class=' '>L</span></button>
               <button class='color1 focus'> <span class=' '>XL</span></button>
               
              
            </div>

            <div class='row color_class'>

                <div class='color'>Конструкция:</div>
                <button class='color1 focus'> <span class=' '>XS</span></button>
               <button class='color1 focus px-3'> <span class=' '>S</span></button>
               <button class='color2 focus '> <span class=' '>M</span></button>
               <button class='color1 focus px-3'> <span class=' '>L</span></button>
               <button class='color1 focus'> <span class=' '>XL</span></button>
              
              
            </div>


            <button class="but50">Добавить в корзину</button>

            <hr class="hr-line"/>

                    <div class="accordion accordion-flush high"  id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed"  data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Элемент аккордеона             
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                        <hr class="hr-line2"/>
                    </div>
                    
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Элемент аккордеона 
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse " aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                    <hr class="hr-line2"/>  

                </div>

                    </div> 
                    


        </div>
        </div>

        <div class='multy'>










    

</div>

        </div>
    <div class='container21'>

    <div id="carouselExampleCaptions" class="carousel slide carousel-dark">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwc622e509/original/90_1008037-1A06913_5G540_10_LeMaschereWindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=850&sh=1200&sm=fit" class="d-block w-100 dostav" alt="..."/>

    </div>
    <div class="carousel-item">
      <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwf78a0539/original/90_1008037-1A06913_5G540_15_LeMaschereWindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=850&sh=1200&sm=fit" class="d-block w-100 dostav" alt="..."/>

    </div>
    <div class="carousel-item">
      <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwc622e509/original/90_1008037-1A06913_5G540_10_LeMaschereWindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=850&sh=1200&sm=fit" class="d-block w-100 dostav" alt="..."/>

    </div>

    <div class="carousel-item">
      <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwc622e509/original/90_1008037-1A06913_5G540_10_LeMaschereWindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=850&sh=1200&sm=fit" class="d-block w-100 dostav" alt="..."/>

    </div>
    <div class="carousel-item">
      <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwc622e509/original/90_1008037-1A06913_5G540_10_LeMaschereWindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=850&sh=1200&sm=fit" class="d-block w-100 dostav" alt="..."/>

    </div>
    <div class="carousel-item">
      <img src="https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwc622e509/original/90_1008037-1A06913_5G540_10_LeMaschereWindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=850&sh=1200&sm=fit" class="d-block w-100 dostav" alt="..."/>

    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Предыдущий</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Следующий</span>
  </button>
</div>


<div class= 'col-12 col-sm-12 col-md-12 ' id='sticky1' >
                <div class='text1 mt-3'>Джинсовая куртка</div>
                <div class='price'>3450₽</div>
                <hr class="hr-line1"/>

            <div class='row color_class'>

                <div class='color'> Размер:</div>
                <button class='color1 focus'> <span class=' '>XS</span></button>
               <button class='color1 focus px-3'> <span class=' '>S</span></button>
               <button class='color2 focus '> <span class=' '>M</span></button>
               <button class='color1 focus px-3'> <span class=' '>L</span></button>
               <button class='color1 focus'> <span class=' '>XL</span></button>


            </div>

            <div class='row color_class'>

                <div class='color'>Конструкция:</div>
                <button class='color1 focus'> <span class=' '>XS</span></button>
               <button class='color1 focus px-3'> <span class=' '>S</span></button>
               <button class='color2 focus '> <span class=' '>M</span></button>
               <button class='color1 focus px-3'> <span class=' '>L</span></button>
               <button class='color1 focus'> <span class=' '>XL</span></button>
              
              
            </div>

            <div class='col-12 md-12 '>
            <button class="but50">Добавить в корзину</button>
           
            <hr class="hr-line"/>

                    <div class="accordion accordion-flush high"  id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Элемент аккордеона             
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                        <hr class="hr-line2"/>
                    </div>
                    
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Элемент аккордеона 
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse " aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                    <hr class="hr-line2"/>  

                   </div>

                    
                    </div> 
                    
                    </div>

        </div>
    </div>
    <div className="App">
      <div class='dopolni'>
      Дополни свой образ 
      </div>
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
          <div class='marl' style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw7d2efd5d/original/90_1008037-1A06165_5B940_10_Barocco660WindbreakerJacket-Jackets-versace-online-store_0_0.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div class='marl' style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw1452019d/original/90_1009424-1A06879_5B040_10_VersaceAlloverBomberJacket-Jackets-versace-online-store_0_2.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div class='marl' style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw57d6f207/original/90_1009431-1A06883_5B000_10_MascheraBaroqueBomberJacket-Jackets-versace-online-store_1_0.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div  class='marl'style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw18a222ed/original/90_1006698-1A04656_1B000_10_LogoPatchBomberJacket-Jackets-versace-online-store_4_0.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div class='marl' style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw7ebe64fd/original/90_1009293-1A06732_1B000_10_SpringFestivalRabbitBomberJacket-Jackets-versace-online-store_0_2.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div class='marl' style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw55c74d69/original/90_1009529-1A06912_5G530_10_LeMaschereBomberJacket-Jackets-versace-online-store_1_0.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div class='marl' style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw57d6f207/original/90_1009431-1A06883_5B000_10_MascheraBaroqueBomberJacket-Jackets-versace-online-store_1_0.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div  class='marl'style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw18a222ed/original/90_1006698-1A04656_1B000_10_LogoPatchBomberJacket-Jackets-versace-online-store_4_0.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div class='marl' style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw7ebe64fd/original/90_1009293-1A06732_1B000_10_SpringFestivalRabbitBomberJacket-Jackets-versace-online-store_0_2.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div class='marl' style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw55c74d69/original/90_1009529-1A06912_5G530_10_LeMaschereBomberJacket-Jackets-versace-online-store_1_0.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div class='marl' style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw57d6f207/original/90_1009431-1A06883_5B000_10_MascheraBaroqueBomberJacket-Jackets-versace-online-store_1_0.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div  class='marl'style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw18a222ed/original/90_1006698-1A04656_1B000_10_LogoPatchBomberJacket-Jackets-versace-online-store_4_0.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div class='marl' style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw7ebe64fd/original/90_1009293-1A06732_1B000_10_SpringFestivalRabbitBomberJacket-Jackets-versace-online-store_0_2.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
          <div class='marl' style={{backgroundImage: "url(https://www.versace.ru/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw55c74d69/original/90_1009529-1A06912_5G530_10_LeMaschereBomberJacket-Jackets-versace-online-store_1_0.jpg?sw=414&sh=582&sm=fit&sfrm=jpg)", height:'500px', cursor:'pointer' ,}}></div>
        </Carousel>
      </div>
             
 
    </div>
    
    </div>
    
  )
}
  
export default Thing