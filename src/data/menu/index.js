import { v4 as uuid } from 'uuid'
import {
    MdMenu,
    MdOutlineBackpack,
    MdHelpOutline,
    MdPersonOutline,
    MdNotificationsNone,
    MdFacebook,
} from "react-icons/md";
import { BiBell, BiShoppingBag, BiNotification } from 'react-icons/bi'
import { IoLogoTiktok, IoLogoFacebook, IoLogoYoutube } from 'react-icons/io5'
import { RiWhatsappLine, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";
import { TiSocialInstagram } from 'react-icons/ti'
import { FaTiktok, FaFacebookSquare, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

let message = encodeURIComponent('Hi, Discava?\n\nMay you assist me please.\n\nThanks!')

const menu = new Map([
    ["Shop", [
        {
            id: uuid(), 
            name: 'Smart Home', 
            uri: '/c/smart-home',
            priority: 0,
        },
        
        {
            id: uuid(), 
            name: 'Ergonomics', 
            uri: '/c/ergonomics',
            priority: 0,
        },

        {
            id: uuid(), 
            name: 'Massage', 
            uri: '/c/massage',
            priority: 0,
        },

        {
            id: uuid(), 
            name: 'VR Headsets', 
            uri: '/c/vr',
            priority: 0,
        },

        {
            id: uuid(), 
            name: 'Offers & Bundles', 
            uri: '/c/offers',
            priority: 0,
        },

        {
            id: uuid(), 
            name: 'Catalogue', 
            uri: 'https://wa.me/c/26775577933', 
            ext: true,
            target: '_blank', 
            rel: 'noreferrer noopener',
            priority: 0,
        },
        ],
    ],

    ["Decor", [
        {
            id: uuid(), 
            name: 'Home Decor', 
            uri: '/decor/home',
            priority: 0,
        },

        {
            id: uuid(), 
            name: 'Birthdays', 
            uri: '/decor/birthdays',
            priority: 0,
        },

        {
            id: uuid(), 
            name: 'Engagements & Weddings', 
            uri: '/decor/weddings',
            priority: 0,
        },
    
        {
            id: uuid(), 
            name: 'Funerals & Memorials', 
            uri: '/decor/funerals',
            priority: 0,
        }],
    ],

    ["Business", [
        {
            id: uuid(), 
            name: 'Shop for Business', 
            uri: '/wholesale',
            priority: 1,
        },

        {
            id: uuid(), 
            name: 'Sourcing + Shipping', 
            uri: '/sourcing',
            priority: 0,
        }],
    ],

    ["About Us", 
        [
            {
                id: uuid(), 
                name: 'Reviews', 
                uri: '/reviews',
                priority: 1,
            }, 

            {
                id: uuid(), 
                name: 'Jobs', 
                uri: '/jobs',
                priority: 1,
            },

            {
                id: uuid(), 
                name: 'Newsroom', 
                uri: '/blog',
                priority: 0,
            },

            {
                id: uuid(), 
                name: 'About Us', 
                uri: '/about',
                priority: 1,
            },
        ]
    ],

    ["Support", [
        {
            id: uuid(), 
            name: 'FAQs', 
            uri: '/support',
            priority: 0,
        },

        {
            id: uuid(), 
            name: 'Layby', 
            uri: '/support/layby',
            priority: 0,
        },

        {
            id: uuid(), 
            name: 'Returns', 
            uri: '/support/returns',
            priority: 0,
        },

        {
            id: uuid(), 
            name: 'Warranty', 
            uri: '/support/warranty',
            priority: 0,
        },

        {
            id: uuid(), 
            name: 'Contact', 
            uri: '/support',
            priority: 1,
        },

        // {
        //     id: uuid(), 
        //     name: 'WhatsApp', 
        //     uri: `https://wa.me/+26775577933?text=${message}`,
        //     ext: true,
        //     target: '_blank', 
        //     rel: 'noreferrer noopener',
        //     priority: 1,
        // },

        // {
        //     id: uuid(), 
        //     name: 'Phone', 
        //     uri: '+267 75 577 933',
        //     method: 'call',
        //     ext: true,
        //     target: '_blank', 
        //     rel: 'noreferrer noopener',
        //     priority: 1,
        // },

        // {
        //     id: uuid(), 
        //     name: 'Email', 
        //     uri: 'hi@discava.co',
        //     method: 'mail',
        //     ext: true,
        //     target: '_blank', 
        //     rel: 'noreferrer noopener',
        //     priority: 1,
        // },
        ],
    ],

    ["Community", [
        {
            id: uuid(),
            icon: <MdFacebook />,
            uri: "https://facebook.com/ergoritegadgets",
        },

        {
            id: uuid(),
            icon: <TiSocialInstagram />,
            uri: "https://instagram.com/ergoritegadgets",
        },

        {
            id: uuid(),
            icon: <IoLogoYoutube />,
            uri: 'https://www.youtube.com/channel/UC1oPdY9lPn2P_nLW9wzagAA',
        },

        {
            id: uuid(),
            icon: <FaTwitter />,
            uri: "https://twitter.com/ergoritegadgets",
        },

        {
            id: uuid(),
            icon: <IoLogoTiktok />,
            uri: "https://tiktok.com/@ergorite",
        }]
    ],

])

export function useMenu(){
    return menu
}