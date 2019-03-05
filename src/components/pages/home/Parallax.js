import React from "react";

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.img = React.createRef();

    this.state = {
      scroll: 0,
      insideParentScroll: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    this.setState({ scroll: window.pageYOffset });
    const parentOffset = this.props.parentRef.current.offsetTop
      ? this.props.parentRef.current.offsetTop
      : null;
    const parentOffsetHeight = this.props.parentRef.current.offsetHeight
      ? this.props.parentRef.current.offsetHeight
      : null;
    const insideParentScroll = this.state.scroll - parentOffset;

    if (
      this.state.scroll >= parentOffset &&
      this.state.scroll <= parentOffsetHeight
    ) {
      this.setState({ insideParentScroll });
      console.log("inside", parentOffsetHeight);
    }
    return;
  }
  componentDidUpdate() {
    this.props.childRef.current.style[this.props.stylePropriety] = `${this.state
      .scroll * this.props.speed}px`;
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    console.log(this.props.parentRef);
    return <>{this.props.children}</>;
  }
}

export default Parallax;
