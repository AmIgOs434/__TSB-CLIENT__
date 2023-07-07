import React,{Component, useEffect} from 'react';
import $ from 'jquery'
import './style1.scss'
import Bpages from './bpages';

const Style =  ()=>{


  useEffect(()=>{

   
    $(document).ready(function(){
      $('.accordion-list > li2 > .answer').hide();
        
      $('.accordion-list > li2').click(function() {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".answer").slideUp();
        } else {
          $(".accordion-list > li2.active .answer").slideUp();
          $(".accordion-list > li2.active").removeClass("active");
          $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
      });
      
    });
  
  },[])

    


   
    



    
    return (


      <div class='top_'>
        <Bpages/>
      <div class="accordion-list ul2">
                   <div class='FQI mt-11 mb-50'>
                    FQI
                  </div>       
                  <li2 class='li2'>
                  <div ><h3 class='h33'>О НАС</h3></div>
                    <div class="answer">
                      <div class='p2'>Концепция TSB</div>
                      <div class='p2'>Наш блог</div>
                    </div>
                  </li2>
      
                  <li2 class='li2'>
                  <div><h3 class='h33'>КЛИЕНТСКИЙ СЕРВИС</h3></div>
                    <div class="answer">
                    <div class='p2'>Experience. We have been designing websites professional since the early days of the web - before CSS was mainstream, and people still used tables for their website layouts. In the 20+ years that we have been doing this, we have work with and learned from many of the top voices in several industries. To put it simply - there are very few people in the world, let alone the area that can top our years of experience.
                              Quality At Right Creative, we hold an almost unrealistic standard for quality. We demand excellence in every project we take on, and firmly believe that the quality of our work demonstrates our commitment to these standards.
                    </div>
                    </div>
                  </li2>
                  <li2 class='li2'>
                  <div><h3 class='h33'>КЛИЕНТСКИЙ СЕРВИС</h3></div>
                    <div class="answer">
                    <div class='p2'>Experience. We have been designing websites professional since the early days of the web - before CSS was mainstream, and people still used tables for their website layouts. In the 20+ years that we have been doing this, we have work with and learned from many of the top voices in several industries. To put it simply - there are very few people in the world, let alone the area that can top our years of experience.
                              Quality At Right Creative, we hold an almost unrealistic standard for quality. We demand excellence in every project we take on, and firmly believe that the quality of our work demonstrates our commitment to these standards.
                    </div>
                    </div>
                  </li2>
                  <li2 class='li2'>
                  <div><h3 class='h33'>КЛИЕНТСКИЙ СЕРВИС</h3></div>
                    <div class="answer">
                    <div class='p2'>Experience. We have been designing websites professional since the early days of the web - before CSS was mainstream, and people still used tables for their website layouts. In the 20+ years that we have been doing this, we have work with and learned from many of the top voices in several industries. To put it simply - there are very few people in the world, let alone the area that can top our years of experience.
                              Quality At Right Creative, we hold an almost unrealistic standard for quality. We demand excellence in every project we take on, and firmly believe that the quality of our work demonstrates our commitment to these standards.
                    </div>
                    </div>
                  </li2>
                  <li2 class='li2'>
                  <div><h3 class='h33'>КЛИЕНТСКИЙ СЕРВИС</h3></div>
                    <div class="answer">
                    <div class='p2'>Experience. We have been designing websites professional since the early days of the web - before CSS was mainstream, and people still used tables for their website layouts. In the 20+ years that we have been doing this, we have work with and learned from many of the top voices in several industries. To put it simply - there are very few people in the world, let alone the area that can top our years of experience.
                              Quality At Right Creative, we hold an almost unrealistic standard for quality. We demand excellence in every project we take on, and firmly believe that the quality of our work demonstrates our commitment to these standards.
                    </div>
                    </div>
                  </li2>
                  <li2 class='li2'>
                  <div><h3 class='h33'>КЛИЕНТСКИЙ СЕРВИС</h3></div>
                    <div class="answer">
                    <div class='p2'>Experience. We have been designing websites professional since the early days of the web - before CSS was mainstream, and people still used tables for their website layouts. In the 20+ years that we have been doing this, we have work with and learned from many of the top voices in several industries. To put it simply - there are very few people in the world, let alone the area that can top our years of experience.
                              Quality At Right Creative, we hold an almost unrealistic standard for quality. We demand excellence in every project we take on, and firmly believe that the quality of our work demonstrates our commitment to these standards.
                    </div>
                    </div>
                  </li2>

                  
                </div>
                </div>
        
            )
         

 


}



export default Style;