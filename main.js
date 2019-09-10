let $buttons = $('#buttons > button')
let $slides = $('#slides')
let $images = $slides.children('img')

let current = 0

addFakeness($images)
bindEvents()

//上一张、下一张
let $previous = $('#previous')
let $next = $('#next')
$previous.on('click', function(){
  goToSlides(current-1)
})
$next.on('click', function(){
  goToSlides(current+1)
})


function bindEvents(){
  $('#buttons').on('click', 'button', function(e){
    let $button = $(e.currentTarget)
    let index = $button.index()
    goToSlides(index)
    current = index
  })
}

function goToSlides(index){
    if(index > $buttons.length-1){
        index = 0
    }else if(index < 0){
        index = $buttons.length - 1
    }
  
    if( current === $buttons.length-1 && index === 0 ){
      // 最后一个到第一个，先移负四个单位，再移负一个单位
      $slides.css({ transform: `translateX(${-($buttons.length+1)*600}px)` })
        .one('transitionend', function(){
            $slides.hide().offset()
            $slides.css({transform: `translateX(${-(index+1)*600}px)`}).show()
        })
      
    } else if( current === 0 && index === $buttons.length-1 ) {
      // 第一个到最后一个，先移负0个单位，再移负三个单位
      $slides.css({ transform: `translateX(0px)` })
        .one('transitionend', function(){
            $slides.hide().offset()
            $slides.css({transform: `translateX(${-(index+1)*600}px)`}).show()
        })
        
    } else {
        $slides.css({ transform: `translateX(${-(index+1)*600}px)` })
        
    }
    current = index 
}



function addFakeness($images){
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images.length-1).clone(true)

  $slides.append($firstCopy)
  $slides.prepend($lastCopy)  
}
  

//   $buttons.eq(0).on('click', function(){
//     //最后一个到第一个，移负四个单位，再移负一个单位
//     if( current === 2){
//       $slides.css({transform: 'translateX(-2400px)'})
//         .one('transitionend', function(){
//             $slides.hide()
//               .offset()
//             $slides.css({transform: 'translateX(-600px)'})
//               .show()
//         })
//     }else{
//       $slides.css({transform: 'translateX(-600px)'}) 
//     }

//     current = 0
//   })

//   $buttons.eq(1).on('click', function(){
//     $slides.css({transform: 'translateX(-1200px)'})

//     current = 1
//   })

//   $buttons.eq(2).on('click', function(){
//     // 第一个到最后一个，移0个单位，再移负三个单位
//     if(current === 0){
//       $slides.css({transform: 'translateX(0px)'})
//         .one('transitionend', function(){
//             $slides.hide()
//               .offset()
//             $slides.css({transform: 'translateX(-1800px)'})
//               .show()
//         })
//     }else{
//        $slides.css({transform: 'translateX(-1800px)'})
//     }

//     current = 2
//   })


