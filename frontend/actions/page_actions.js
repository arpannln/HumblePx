export const RECEIVE_PAGE = "RECEIVE_PAGE";

var http = require("http");
setInterval(function() {
    http.get("http://hoveringharry.herokuapp.com");
}, 300000); // every 5 minutes (300000)

setInterval(function() {
    http.get("http://humblepx.herokuapp.com");
}, 300000);

const receivePage = () => ({
  type: RECEIVE_PAGE,
});

export const changePage = () => (dispatch) => dispatch(receivePage());
