/* eslint-disable camelcase */
import Home from '../views/pages/home';
import WeatherWitch from '../views/pages/weather';
import Aboutus from '../views/pages/aboutus';
import Musik from '../views/pages/mendengarkan-musik';

const routes = {
  '/': Home,
  '/home': Home,
  '/weather': WeatherWitch,
  '/aboutus': Aboutus,
  '/mendengarkan-musik': Musik,

};

export default routes;
