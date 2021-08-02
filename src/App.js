import React from "react";
import ReactDOM from "react-dom";
import marked from "marked";



const styles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  paddingTop: 60,
  backgroundColor: '#00b894',
};

const navStyles = {
  padding: '10px 0 10px 0',
  fontWeight: 'bold',
  color: '#00b894',
  textAlign: 'center',
  backgroundColor: '#55efc4',
};

const textStyles = {
  padding: 15,
  width: '45%',
  height: window.innerHeight - 150,
  border: '1px solid #CCCCCC',
  backgroundColor: 'white',
  overflow: 'scroll',
};

const text = 
`# Welcome to my React Markdown Previewer!

## Have fun! (´・ω・｀)
### Feel free to play with markdown! ╰(*°▽°*)╯

This is a \`<div></div>\`, a simple code.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine ==  '\`\`\`') {
return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [My Personal Page](https://natsunoyoru97.github.io/main), and
> Block Quotes!

Column1 | Column2 | Column3
------------ | ------------- | -------------
This is | my | content....
WOW! | YEAH! | WHOAAAAAAAAA!!!

* And last but not least, let's not forget embedded images:

![react logo](https://www.ubidreams.fr/wp-content/uploads/2020/06/logo-react-js.png)
`
;


const renderer = new marked.Renderer();
marked.setOptions({
  breaks: true
})

export default class App extends React.Component {
constructor(props) {
super(props);
this.state = {
content: text,
};
      
this.handleChange = this.handleChange.bind(this);
}
  
handleChange(e) {
this.setState({
content: e.target.value,
});
}
  
render() {
return (
<div>
  <nav style={ navStyles }>
    <h1>Markdown Viewer</h1>
  </nav>
  <div style={ styles }>
    <Editor 
      onChange={this.handleChange}
      content={this.state.content}
    />
    <Previewer
      content={this.state.content}
    />
  </div>
</div>
);
}
}

class Editor extends React.Component {
render() {
return (
<textarea
  id="editor"
  style={ textStyles }
  onChange={this.props.onChange}
  defaultValue={this.props.content}
  type="text"
>
</textarea>
);
}
}

class Previewer extends React.Component {
render() {
return (
<div 
  id="preview"
  style={ textStyles }
  dangerouslySetInnerHTML={{__html: marked(this.props.content, {renderer: renderer})}}
>
</div>
);
}
}

ReactDOM.render(<App />, document.getElementById('root'));