import ReactDOM from 'react-dom';
import './index.css';

const TEXT_ELEMENT_TYPE = 'TEXT_ELEMENT';

const createTextElement = (text) => {
  return {
    type: TEXT_ELEMENT_TYPE,
    props: {
      nodeValue: text,
      children: [],
    }
  }
}

const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'object' ? child : createTextElement(child)
      )
    }
  }
}

const Didact = {
  createElement,
}

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)

const container = document.getElementById("root")
ReactDOM.render(element, container)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
