import React from "react";
import './catagories_comp.css'


const CatagoriesComponent=()=>{
    const cat_names=[
        
            {
              "id": 1,
              "title": "hats",
              "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
            },
            {
              "id": 2,
              "title": "jackets",
              "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
            },
            {
              "id": 3,
              "title": "sneakers",
              "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
            },
            {
              "id": 4,
              "title": "women",
              "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
            },
            {
              "id": 5,
              "title": "mens",
              "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
            }
          
          
    ]

    return(
        <div className='catagories-class'>
          {
          cat_names.map((catlist)=>{return <div className='catagory' key={catlist.id} style={{backgroundImage:`url(${catlist.imageUrl})`}}>
              <h1> {catlist.title}</h1>
          </div>})
          }
        </div>
    )
}

export default CatagoriesComponent;