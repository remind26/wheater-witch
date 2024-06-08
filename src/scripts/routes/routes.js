/* eslint-disable camelcase */
import Home from '../views/pages/home';
import WeatherWitch from '../views/pages/weather';
import Aboutus from '../views/pages/aboutus';

const routes = {
  '/': Home,
  '/home': Home,
  '/weather': WeatherWitch,
  '/aboutus': Aboutus,
};

export default routes;
