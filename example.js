//# sourceMappingURL=/example.map
;
var LikeButton = React.createClass({
  displayName: "LikeButton",
  getInitialState: (function() {
    /* /Users/jbr/code/sibilant-react/example.sibilant:8:29 */
  
    return {
      liked: false,
      count: 0
    };
  }),
  handleClick: (function() {
    /* /Users/jbr/code/sibilant-react/example.sibilant:9:24 */
  
    return this.setState({
      count: (1 + this.state.count),
      liked: !(this.state.liked)
    });
  }),
  render: (function() {
    /* /Users/jbr/code/sibilant-react/example.sibilant:12:11 */
  
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
    }, React.createElement("h2", null, this.props.label), React.createElement("p", null, "click count: ", React.createElement("span", null, this.state.count)), React.createElement("p", null, "This button is ", (function() {
      if (this.state.liked) {
        return "on";
      } else {
        return "off";
      }
    }).call(this)));
  })
});
ReactDOM.render(React.createElement("div", { id: "main" }, React.createElement("h1", null, "Example!"), [ "a", "b", "c" ].map((function() {
  /* /Users/jbr/code/sibilant-react/example.sibilant:23:12 */

  return React.createElement(LikeButton, {
    key: arguments[0],
    label: arguments[0]
  });
}))), document.getElementById("app"));