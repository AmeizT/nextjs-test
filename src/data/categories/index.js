import { v4 as uuid } from 'uuid'

let categories = [
    { 
        id: uuid(),
        name: 'Our prices are frozen.',
        statement: `It's winter after all.`, 
        content: 'Shop great offers this winter & enjoy some amazing deals.',
        category: 'Winter Offers',
        action: 'Shop offers',
        image: '/categories/freeze.jpg', 
        position: '52% center',
        posv: 'end',
        uri: '/category/offers',
        priority: 0,
        section: 'hero',
    },

    { 
        id: uuid(),
        name: 'Your workspace matters.', 
        content: 'Shop ergonomic gadgets to create a healthy & next-level workspace.',
        category: 'Ergonomics',
        action: 'Shop ergonomics',
        image: '/categories/keyboard-red.jpg', 
        position: '20% center',
        posv: 'start',
        uri: '/category/ergonomics',
        priority: 0,
        section: 'discover',
    },

    { 
        id: uuid(),
        name: 'Sort the discomfort.', 
        content: 'Relieve pain, tension and stress - anytime & anywhere.',
        category: 'Massage',
        action: 'Shop massage',
        image: '/categories/massage-man.jpg', 
        position: '60% center',
        posv: 'end',
        uri: '/category/massage',
        priority: 0,
        section: 'discover',
    },

    { 
        id: uuid(),
        name: `Live in a home you deserve.`, 
        content: 'Shop smart home devices to automate & make your home more livable & secure.',
        category: 'Smart Home',
        action: 'Shop now',
        image: '/categories/assistant.jpg', 
        position: '17% center',
        posv: 'start',
        uri: '/category/smart-home',
        priority: 0,
        section: 'discover',
    },

    { 
        id: uuid(),
        name: 'It\'s about to get real.', 
        content: 'Play, watch, explore and enjoy the VR experience.',
        category: 'Gaming & VR',
        action: 'Shop VR',
        image: '/categories/vr-man.jpg', 
        position: 'center center',
        posv: 'end',
        uri: '/category/vr',
        priority: 0,
        section: 'discover',
    },

    { 
        id: uuid(),
        name: 'Power that actually sticks around.', 
        content: 'Shop solar panels, inverters & accessories. Have electricity 24/7.',
        category: 'Solar',
        action: 'Shop now',
        image: '/categories/greenroof.jpg', 
        position: '80% center',
        posv: 'start',
        uri: '/category/solar',
        priority: 0,
        section: 'discover',
    },

    { 
        id: uuid(),
        name: 'Hassle free overseas shopping & shipping.',
        statement: '', 
        content: 'Sourcing and shipping goods for business or presonal use at reasonable prices.',
        category: 'Sourcing + Shipping',
        action: 'Learn more',
        image: '/categories/shipping.jpg', 
        position: 'center center',
        posv: 'end',
        uri: '/sourcing',
        priority: 0,
        section: 'sourcing',
    },
]

export function useCategory(){
    return categories
}