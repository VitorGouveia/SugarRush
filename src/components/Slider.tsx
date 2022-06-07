export function Slider() {
    window.addEventListener('load', function(){
        // @ts-ignore
        new Glider(document.querySelector('.glider'), {
            // Mobile-first defaults
            slidesToScroll: 1,
            slidesToShow: 3,
            draggable: true,
            dots: '.dots',
            itemWidth: 100,
            itemHeight: 100,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },
          });   
        })
    
    return (
            <div className="glider-container">
                <div className="glider">
                    <div className="glider-item"> 
                        <img className="category-image" src="/public/Bread.png" alt="" />
                        <h2 className="category-name">Pães</h2>
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