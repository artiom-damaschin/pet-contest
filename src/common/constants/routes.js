import Home from '../../pages/home'
import Gallery from '../../pages/gallery'

export const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    title: 'Gallery',
    path: '/gallery',
    component: Gallery,
  },
]
