import React from 'react'
import Card from './Card'
import '../css/HomeScreen.css'

const HomeScreen = () => {
  const category=[
    {
      title:"All",
      image:'.../public/Food.png',

    },
    {
      title:'Medical',
      image:'.../public/Food.png',
    },
    {
      title:"Fruits",
      image:'.../public/Food.png',

    },
    {
      title:'World',
      image:'.../public/Food.png',
    },
    {
      title:'India',
      image:'.../public/Food.png',
    }
  ]
  return (
    <div>
      <div className='card-area'>
        {category.map((categ, index)=>(
          <div key={index } >
            <Card title={categ.title} image={categ.image}/>
    
          </div>
        ))}
      </div>
      <div>
        Main section
      </div>
    </div>
  )
}

export default HomeScreen