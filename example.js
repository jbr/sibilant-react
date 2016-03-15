//# sourceMappingURL=/example.map
;
var ClickCount = (function ClickCount$(props) {
  /* ClickCount macros.sibilant:75:14 */

  var count = props.count;
  return React.createElement("p", null, "click count: ", count);
});
var LikeButton = React.createClass({
  displayName: "LikeButton",
  getInitialState: (function() {
    /* example.sibilant:10:29 */
  
    return {
      liked: false,
      count: 0
    };
  }),
  handleClick: (function() {
    /* example.sibilant:11:24 */
  
    return this.setState({
      count: (1 + this.state.count),
      liked: !(this.state.liked)
    });
  }),
  render: (function() {
    /* example.sibilant:14:11 */
  
    return React.createElement("div", {
      style: {
        backgroundColor: (function() {
          if (this.state.liked) {
            return "lightBlue";
          } else {
            return "red";
          }
        }).call(this),
        color: "white"
      },
      onClick: this.handleClick
    }, React.createElement("h2", null, this.props.label), React.createElement(ClickCount, { count: this.state.count }), React.createElement("p", null, "This button is ", (function() {
      if (this.state.liked) {
        return "on";
      } else {
        return "off";
      }
    }).call(this)));
  })
});
ReactDOM.render(React.createElement("div", { id: "main" }, React.createElement("h1", null, "Example!"), [ "a", "b", "c" ].map((function() {
  /* example.sibilant:25:12 */

  return React.createElement(LikeButton, {
    key: arguments[0],
    label: arguments[0]
  });
}))), document.getElementById("app"));