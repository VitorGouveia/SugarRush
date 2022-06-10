export function Slider() {
    window.addEventListener('load', function(){
        // @ts-ignore
        new Glider(document.querySelector('.glider'), {
            // Mobile-first defaults
            slidesToScroll: 1,
            slidesToShow: 3,
            draggable: true,
            dots: '.dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },
            responsive: [
              {
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: 'auto',
                  slidesToScroll: 'auto',
                  itemWidth: 150,
                  duration: 0.25
                }
              },{
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  itemWidth: 150,
                  duration: 0.25
                }
              }
            ]
          });   
        })
    
    return (
            <div className="glider-container">
                <div className="glider">
                    <div className="glider-item"> 
                        <img className="category-image" src="/YesCakes/Bread.png" alt="" />
                        <h2 className="category-name">Batatas</h2>
                    </div>
                    <div className="glider-item"> 
                        <h2>Pães</h2>
                    </div>
                    <div className="glider-item"> 
                        <h2>Pães</h2>
                    </div>
                    <div className="glider-item"> 
                        <h2>Pães</h2>
                    </div>
                </div>
            
                <button aria-label="Previous" className="glider-prev">«</button>
                <button aria-label="Next" className="glider-next">»</button>
                <div role="tablist" className="dots"></div>
            </div>

        
        )
    }