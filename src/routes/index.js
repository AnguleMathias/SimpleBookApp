import LandingPage from '../views/Landingpage';
import AddBook from '../views/AddBook';

const indexRoutes = [
  {
    path: '/',
    name: 'Landing Page',
    component: LandingPage,
  },
  {
    path: '/add-book',
    name: 'Add Book',
    component: AddBook,
  },
];

export default indexRoutes;
