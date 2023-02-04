import home from '../../assets/home-page.png'
import search from '../../assets/search.png'
import message from '../../assets/messaging-.png'
import reels from '../../assets/cinema---v2.png'
import compass from '../../assets/pocket-compass.png'
import notifications from '../../assets/filled-like.png'
import create from '../../assets/plus-2-math.png'
import profile from '../../assets/test-account.png'


export const users =[
    {
        user: 'ammar',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPbKgg7LkSkCU1rfT6LUAkVXdCCuN-lSRrctFBG8Flw&s',
    }
]


export const sideBarElements =[
    {
        title: 'Главная',
        icon:home,
        to:'/'
    },
    {
        title: 'Поисковый запрос',
        icon:search,
        to:'/search'
    },
    {
        title: 'Интересное',
        icon:compass,
        to:'/intresting'
    },
    {
        title: 'Reels',
        icon:reels,
        to:'/reels'
    },
    {
        title: 'Messages',
        icon:message,
        to:'/message'
    },
    {
        title: 'Уведомления',
        icon:notifications,
        to:'/notification'
    },
    {
        title: 'Создать',
        icon:create,
        to:'/create'
    },
    {
        title: 'Профиль',
        icon:profile,
        to:'/profile'
    }
    
]