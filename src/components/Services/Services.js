import React from 'react';
import icon1 from '../../assests/images/icon_1.jpg'
import icon2 from '../../assests/images/icon_2.jpg'
import icon3 from '../../assests/images/icon_3.jpg'
import service1 from '../../assests/images/service1.jpg'
import service2 from '../../assests/images/service2.jpg'
import service3 from '../../assests/images/service3.jpg'
import Service from '../Service/Service';
const Services = () => {
    const services = [
        {   
            "id":'1',
            "name": "Men classes",
            'icon': icon1,
            'img': service1,
            'description': 'i am a profession Gym trainer. i have 8 years of trainig experience. We have different types of classes for men such as, Cycling, HIIT, barre, boxing, bodybuilding, cardio, Pilates. Yoga, running, dance, personal training seasons',
            'price': '240'

            
        },
        {   
            "id":'2',
            "name": "Women classes",
            'icon': icon2,
            'img': service2,
            'description': 'i am a profession Gym trainer. i have 8 years of trainig experience. We have different types of classes for women such as, Body sculpting classes, cycling classes, yoga, cardio, dance, action sports, and online classes',
            'price': '200'

            
        },
        {   
            "id":'1',
            "name": "kids classes",
            'icon': icon3,
            'img': service3,
            'description': 'i am a profession Gym trainer. i have 8 years of trainig experience. We have just one class for kids that is personal training',
            'price': '180'

            
        }
    ]
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-center font-[900] text-5xl font-mono tracking-wider my-9'> My services</h2>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
                {
                    services.map(service=><Service key={service.id} service = {service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;