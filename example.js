var LikeButton = React.createClass({
  getInitialState: (function() {
    /* /Users/jbr/code/sibilant-react/example.sibilant:7:29 */
  
    return { liked: false };
  }),
  handleClick: (function() {
    /* /Users/jbr/code/sibilant-react/example.sibilant:8:24 */
  
    return this.setState({ liked: !(this.state.liked) });
  }),
  render: (function() {
    /* /Users/jbr/code/sibilant-react/example.sibilant:9:18 */
  
    return React.createElement("p", { onClick: this.handleClick }, ("You " + (function() {
      if (this.state.liked) {
        return "like";
      } else {
        return "haven't liked";
      }
    }).call(this) + " this. Click to toggle."));
  })
});
ReactDOM.render(React.createElement("div", { id: "main" }, React.createElement("h1", null, "Example!"), React.createElement(LikeButton, null)), document.getElementById("app"));