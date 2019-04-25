import React from "react";
import PropTypes from 'prop-types'
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/mode/html";
import "brace/theme/monokai";

export default class CodeEditor extends React.Component {
  constructor() {
    super();
    this.plugins = [];
  }
  render() {
    return (
      <AceEditor
        ref="ace"
        mode={this.props.mode || "html"}
        theme={this.props.theme || "monokai"}
        height={this.props.height || "400px"}
        width={this.props.width || "100%"}
        value={this.props.code}
        onChange={this.props.onChange}
        name={this.props.id || String(Math.random())}
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
  componentDidMount() {
    if (this.props.plugins) {
      this.props.plugins.forEach(plugin =>
        this.plugins.push(new plugin(this.refs.ace.editor))
      );
    }
  }
  static propTypes = {
    /** String used as initial editor text */
    code: PropTypes.string,
    /** Called when user changes editor text */
    onChange: PropTypes.func,
    /** Mode of editor("javascript" and "html" included by default) */
    mode: PropTypes.string,
    /** Height of component */
    height: PropTypes.string,
    /** Width of component */
    width: PropTypes.string,
    /** Unique ID for component */
    name: PropTypes.string,
  }
  static defaultProps = {
    width: "100%",
    height: "400px",
    mode: "html",
    code:"<h1>CodeEditor</h1>"
  }
}
