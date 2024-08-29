import React from 'react'
import './Plan.css'


const Plan = () => {

    const pricingData = [{
        title:'Regular Member',
        price: '$0',
        duration: '/Month',
        color:'#fff',
        features:[
            'Unlimited access to the courses',
            'Customer Support',
            'Personal Mentor',
            'Standard Option',
            '5 classes per week'
        ]

    },
    {
        title:'Premium Member',
        price: '$100',
        duration: '/Month',
        color:'#6f55f2',
        features:[
            'Unlimited access to the courses',
            'Customer Support',
            'Personal Mentor',
            'Standard Option',
            '5 classes per week'
        ]

    },
    {
        title:'Standard Member',
        price: '$10',
        duration: '/Month',
        color:'#fff',
        features:[
            'Unlimited access to the courses',
            'Customer Support',
            'Personal Mentor',
            'Standard Option',
            '5 classes per week'
        ]

    },
]

  return (
   <div className="container">
    <div className="pricing-top">
        <h2 className='title_section'>Premium Pricing Plan </h2>
        <p>Unlock elite tech services with our premium plan and soar ahead of the competition </p>
    </div>
    <div className="pricing-wrapper">
        { pricingData.map((pricingItem,index) => (
            <div className="pricing_item" key={index}>
                <div className="pricing_card-top" style={{background:pricingItem.color}}>
                    <h2 className='title_section'>{pricingItem.title}</h2>
                    <h2 className='pricing_section_title'>
                        {pricingItem.price} <span>{pricingItem.duration}</span>
                    </h2>
                </div>
                <div className="services">
                    <ul>
                        {pricingItem.features.map((feature,index)=>(
                            <li key={index}>{feature}</li>
                        ))

                        }
                    </ul>
                        <button className='register-btn'>Join</button>


                </div>

            </div>
        ) )

        }

    </div>




   </div>
  )
}

export default Plan
