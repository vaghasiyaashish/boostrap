// import React, { useState } from 'react';

// const CssScssComponent = () => {
//   // State to keep track of which data to display
//   const [selectedData, setSelectedData] = useState('');

//   // Function to handle CSS button click
//   const handleCssClick = () => {
//     setSelectedData(cssCode);
//   };

//   // Function to handle SCSS button click
//   const handleScssClick = () => {
//     setSelectedData(scssCode);
//   };

//   // CSS and SCSS code snippets
//   const cssCode = `import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';

// function Example() {
//   return (
//     <div>
//       <h1>
//         Example heading
//         <Badge bg="secondary" as={Button}>
//           New
//         </Badge>
//       </h1>
//     </div>
//   );
// }`;

//   const scssCode = `@import 'react-bootstrap/Badge';
// @import 'react-bootstrap/Button';

// .example {
//   h1 {
//     .badge {
//       background-color: blue;
//     }
//   }
// }`;

//   return (
//     <div>
//       <button onClick={handleCssClick}>CSS Button</button>
//       <button onClick={handleScssClick}>SCSS Button</button>
//       <div>
//         <pre>{selectedData}</pre>
//       </div>
//     </div>
//   );
// };

// export default CssScssComponent;
import React, { useState } from 'react';

const CssScssComponent = () => {
  // State to keep track of which data to display
  const [selectedData, setSelectedData] = useState('');

  // Function to generate full code based on type (CSS or SCSS)
  const generateCode = (type) => {
    const imports = `import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';`;

    if (type === 'scss') {
      return `${imports}
.example {
  h1 {
    .badge {
      background-color: blue;
    }
  }
}`;
    }

    return `${imports}
function Example() {
  return (
    <div>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}`;
  };

  // Function to handle CSS button click
  const handleCssClick = () => {
    setSelectedData(generateCode('css'));
  };

  // Function to handle SCSS button click
  const handleScssClick = () => {
    setSelectedData(generateCode('scss'));
  };

  return (
    <div>
      <button onClick={handleCssClick}>CSS Button</button>
      <button onClick={handleScssClick}>SCSS Button</button>
      <div>
        <pre>{selectedData}</pre>
      </div>
    </div>
  );
};

export default CssScssComponent;
