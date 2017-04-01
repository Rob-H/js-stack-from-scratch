# Notes

me working through [this](https://github.com/verekia/js-stack-from-scratch)


http://eslint.org/docs/rules/semi

babel-node can run es6 code in node, should not be used in production

compat, eslint plugin that warns you if you use js apis that are not available in the browsers ou need to support

nodemon for restarting server when files change

pm2 for keeping process alive in production and adds features to manage and monitor
 - runs in the background, the log command gets a stream of logs 

babel-plugin-flow-react-proptypes: automatically add proptypes from flow annotations in react components
 
redux-actions: creates action creators which returns object with type and payload

Components are dumb react components, don't know about redux state, Containers are smart and know about the state
## TODO
vim setup
- eslint -> needs to use the one in your node modules
- yarn setup with vim
how does the client code get isProd?
- because when you build it has env=production
