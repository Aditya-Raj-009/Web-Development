// console.log("Hey! I am good")

// for op in terminal: node .\modules.js

/* In terminal of vs:
* first we initialize npm(node package manager) project: by this we can install many dependencies and many more stuffs:
> npm init  // command
here it will ask for name, description and other.
if u don't want to put this things now then just run command:
>npm init -y    // it will just create json package of ur folder.

* Next we install 3rd party packages (modules) from chrome:
if u want to make pdf of your html file, then type in chrome:
> node js module for pdf: visit site: https://www.npmjs.com/package/pdf-node

*then copy "npm i pdf-node" right side.

* paste to terminal:
>npm i pdf-node

a folder will be create with name 'node_module'. In node module there is all dependecies available.and whatever module you will install will creates in this folder only.

*now if u delete this node_module folder. And if u zip your folder '96 npm and Node js packages' and give to some then if he write the command in terminal:
> npm install
it will install dependencies again.

*how to use this module:

copy a template from same site and use here:

*/

var pdf = require("pdf-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("96_template.html", "utf8");

/*
now create a html file with name 'template.html' (u can take any) and again go to the same site and copy a html template and paste to tamplate.html.

also copy paste this:
 */
var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

// also:

var users = [
    {
      name: "tom",
      age: "21",
    },
    {
      name: "dick",
      age: "23",
    },
    {
      name: "harry",
      age: "29",
    },
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "pdf",
  };

  // also: after running this , will creates pdf of our html file: 

  pdf(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

//   you can also install module for merge pdf.