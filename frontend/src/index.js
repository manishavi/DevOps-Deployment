/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
<<<<<<< HEAD
import request from 'request';
import request_promise from 'request-promise';
=======
// removed request and request-promise, they didn't import correctly
// you can use:
// axios
// bluebird
// request or request-promise
>>>>>>> 1568e4ef0e853f7bb2a92e32a1371efac7988c5b

require('!style-loader!css-loader!sass-loader!./index.scss');

ReactDom.render(<div>Hello World!</div>, document.getElementById('root'));
