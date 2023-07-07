import { useEffect } from "react"
import $ from 'jquery'
const Wpages =  ()=>{
useEffect(()=>{
  var cl = $('.class')
    var mar = $('.mar')
    var out = $('.out')
    var float_left = $('.float_left')
    cl.removeClass('stroke')
    mar.removeClass('white')
    out.removeClass('stroke')
    float_left.removeClass('white')
    $(window).scroll(function() {
      var scrolled = $(window).scrollTop();
      if ( scrolled > 100 ) {

      }else{
        cl.removeClass('stroke')
        out.removeClass('stroke')
        mar.removeClass('white')
    float_left.removeClass('white')
      }
    })

  
  },[])

}
export default Wpages