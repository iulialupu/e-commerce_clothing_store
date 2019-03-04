import React from "react";

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.img = React.createRef();

    this.state = {
      scroll: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }
  componentDidUpdate() {
    this.props.childRef.current.style[this.props.stylePropriety] = `${this.state
      .scroll * this.props.speed}px`;
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default Parallax;
