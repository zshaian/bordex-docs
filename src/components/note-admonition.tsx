import Admonition from "@theme/Admonition";
import CodeBlock from "@theme/CodeBlock";

export default function NoteAdmonition(): JSX.Element {
  return (
    <div>
      <Admonition
        type="info"
        title="Styling Border Containers"
      >
        To ensure proper functionality, the HTMLDivElement wrapper around the
        original element must have a background applied. You can create a class
        for this purpose as follows:
        <br /> 
        <br /> 
        set the styling of the class first using css.
        <CodeBlock language="css" title="main.css">
          {`/* the provided class name of the border container element,
the style in this class is going to get applied to the border-container-element */
.boder-container-element {
background-color: black;
}
            `}
        </CodeBlock>
        we can then add a generated border to our element.
        <CodeBlock language="js" title="index.js">
          {`const element = document.getElementById('element');
/* we passed in a third argument to the function, and that is the class 
that is going to get applied to the border container element,
that we and target in css. */
addGradientBorder(element,{},'border-container-element')
                `}
        </CodeBlock>
        or if you want you can just add the style for the border container
        element in javascript like this.
        <CodeBlock language="js" title="index.js">
          {`const element = document.getElementById('element');
const borderContainer = addGradientBorder(element,{},'border-container-element');

borderContainer.style.backgroundColor = "black";
                `}
        </CodeBlock>
        <br />
        If you have specific styling to apply to the original element, simply
        add those styles directly to the border container element instead.
      </Admonition>
    </div>
  );
}
