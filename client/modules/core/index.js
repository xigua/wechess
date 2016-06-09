import methodStubs from './configs/method_stubs';
import actions from './actions';
import reducers from './reducers';
import routes from './routes.jsx';

console.log("core reducers", reducers);

export default {
  routes,
  actions,
  reducers,
  load(context) {
    methodStubs(context);
  }
};
