window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
        {
            // screens greater than >= 1024px
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                //itemWidth: 150,
                //duration: 0.25
            }
            },
          {
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
              //itemWidth: 150,
              //duration: 0.25
            }
          },
          {
            // screens greater than >= 1024px
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
              //itemWidth: 150,
              //duration: 0.25
            }
          }
        ]
    });
});