import { useEffect } from "react"
import $ from 'jquery'
const Bpages =  ()=>{
useEffect(()=>{
    var cl = $('.class')
    var mar = $('.mar')
    var out = $('.out')
    var float_left = $('.float_left')
    cl.addClass('stroke')
    mar.addClass('white')
    out.addClass('stroke')
    float_left.addClass('white')
    $(window).scroll(function() {
      var scrolled = $(window).scrollTop();
      if ( scrolled > 100 ) {
        cl.removeClass('stroke')
        out.removeClass('stroke')
        mar.removeClass('white')
        float_left.removeClass('white')
      }else{
        cl.addClass('stroke')
        out.addClass('stroke')
        mar.addClass('white')
    float_left.addClass('white')
      }
    })

  
  },[])

}
export default Bpages