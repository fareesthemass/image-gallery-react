import britishcat from './assets/imgs/british shorthair.webp'
import mainemoon from './assets/imgs/maine moon.webp'
import persian from './assets/imgs/persian cat.webp'
import siamese from './assets/imgs/siamese cat.webp'

function App() {

    var catlist = [
        {
            img: britishcat,
            p: "british Shorthair"
        },
        {
            img: mainemoon,
            p: "mainemoon cat"
        },
        {
            img: persian,
            p: 'persian cat'
        },
        {
            img: siamese,
            p: 'siamese cat'
        },
        {
            img: britishcat,
            p: "british Shorthair"
        },
        {
            img: mainemoon,
            p: "mainemoon cat"
        },
        {
            img: siamese,
            p: 'siamese cat'
        },
        {
            img: persian,
            p: 'persian cat'
        },
    ]

    return (
        
        <div className="full-display">
              <h1 style={{margin:'10px'}}>Image Gallery</h1>
            <div className="full-container">
          
                {catlist.map((item) => {
                    return (
                        <div className="image-container">
                            <img src={item.img} alt="" />
                            <p>{item.p}</p>
                        </div>)
                })}


            </div>
        </div>
    )
}

export default App