import { HomePage } from '../../pages'
import { GalleryPage } from '../../pages'

export const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    title: 'Gallery',
    path: '/gallery',
    component: GalleryPage,
  },
]
