import React from "react";
import "../styles/MainContent.scss"
import marked from "marked";

const INPUT = `
Markdown Previewer
===
---

# It's a h1
## It's a h2
### It's a h3
#### It's a h4
##### It's a h5
###### It's a h6

`

class MainContent extends React.Component{
    constructor() {
        super();
        this.state={
            input: INPUT
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        });
        console.log(event.target.value);
    }

    render() {
        const markdown = marked(this.state.input);
        return (
            <section>
                <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
                <div id="preview" className='output' dangerouslySetInnerHTML={{__html: markdown}}></div>
            </section>
        )
    }
}

export default MainContent;