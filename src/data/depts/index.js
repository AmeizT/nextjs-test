import { v4 as uuid } from 'uuid'

const depts = new Map([
    ["Spring Offers", 
        {
            _id: uuid(),
            _priority: 0,
            title: "Our prices will blow you away. It's spring after all.",
            subTitle: ``, 
            excerpt: 'Shop great offers this spring & enjoy some amazing deals. Limited time offer ends 10/31.',
            category: 'Spring Offers',
            action: 'Shop offers',
            image: '/categories/amaze.jpg', 
            position: '42% center',
            direction: 'end',
            uri: '/c/offers',
        }
    ],

    ["Ergonomics", 
        {
            _id: uuid(),
            _priority: 0,
            title: 'Your workstation matters.', 
            excerpt: 'Shop ergonomic gadgets & build a healthy workstation.',
            category: 'Ergonomics',
            action: 'Shop now',
            image: '/categories/workspace.jpg', 
            position: '60% center',
            direction: 'start',
            uri: '/c/ergonomics',
        }
    ],

    ["Massage", 
        { 
            _id: uuid(),
            _priority: 0,
            title: 'Sort the discomfort.', 
            excerpt: 'Relieve pain, tension and stress - anytime & anywhere.',
            category: 'Massage',
            action: 'Shop now',
            image: '/categories/gun.jpg', 
            position: '60% center',
            direction: 'end',
            uri: '/c/massage',
        },
    ],

    ["Smart Home", 
        { 
            _id: uuid(),
            _priority: 0,
            title: `Live securely & happily ever after.`, 
            excerpt: 'Shop smart home devices & make your home more secure and livable.',
            category: 'Smart Home',
            action: 'Shop now',
            image: '/categories/vacuum.jpg', 
            position: '18% center',
            direction: 'start',
            uri: '/c/smart-home',
        },
    ],

    ["VR Headsets", 
        { 
            _id: uuid(),
            _priority: 0,
            title: 'It\'s about to get real.', 
            excerpt: 'Play, watch, explore and enjoy the VR experience.',
            category: 'VR Headsets',
            action: 'Shop now',
            image: '/categories/vr.jpg', 
            position: 'center center',
            direction: 'end',
            uri: '/c/vr',
        },
    ],

    ["Solar", 
        { 
            _id: uuid(),
            _priority: 1,
            title: 'Power that never ghosts you.', 
            excerpt: 'Shop solar panels, inverters & accessories - power 24/7.',
            category: 'Solar',
            action: 'Shop now',
            image: '/categories/greenroof.jpg', 
            position: '80% center',
            direction: 'start',
            uri: '/c/solar',
        },
    ],

    ["Sourcing + Shipping",
        { 
            _id: uuid(),
            _priority: 2,
            title: 'From overseas to your doorstep hassle free.',
            subTitle: '', 
            excerpt: 'Hassle free sourcing & shipping personal or business goods at very reasonable prices.',
            category: 'Sourcing + Shipping',
            action: 'Learn more',
            image: '/categories/container.jpg', 
            position: 'center center',
            direction: 'end',
            uri: '/sourcing',
        }
    ],
])

export function useDepts(){
    return depts
}