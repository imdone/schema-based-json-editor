webpackJsonp([2],{20:function(e,t,a){"use strict";function r(){n.render(l.createElement(d,null),document.getElementById("container"))}Object.defineProperty(t,"__esModule",{value:!0});var p=a(1),l=a(0),n=(a.n(l),a(7)),o=(a.n(n),a(14)),i=a(42),m=a(17),c=(a.n(m),a(18)),s=(a.n(c),a(19)),u=(a.n(s),null),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.locale=u,t.schema=i.a,t.value={},t.isValid=!1,t.schemaSchema=i.b,t.updateSchema=function(e,a){try{t.schema=JSON.parse(e),t.setState({schema:t.schema})}catch(e){console.log(e)}},t.updateValue=function(e,a){t.value=e,t.isValid=a,t.setState({value:t.value})},t}return p.c(t,e),Object.defineProperty(t.prototype,"formattedSchema",{get:function(){return JSON.stringify(this.schema,null,"  ")},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=s.highlight("json",JSON.stringify(this.value,null,"  ")).value;return l.createElement("div",null,l.createElement("a",{href:"https://github.com/plantain-00/schema-based-json-editor/tree/master/demo/react/index.tsx",target:"_blank"},"the source code of the demo"),l.createElement("br",null),l.createElement("div",{style:{float:"left",margin:"10px",width:"400px",overflowY:"scroll",height:"600px"},className:"bootstrap3-row-container"},l.createElement(o.a,{schema:this.schemaSchema,initialValue:this.formattedSchema,updateValue:this.updateSchema,theme:"bootstrap3",icon:"fontawesome4",locale:this.locale,dragula:m,markdownit:c,hljs:s,forceHttps:!1})),l.createElement("div",{style:{width:"500px",margin:"10px",float:"left",overflowY:"scroll",height:"600px"},className:"bootstrap3-row-container"},l.createElement(o.a,{schema:this.schema,initialValue:this.value,updateValue:this.updateValue,theme:"bootstrap3",icon:"fontawesome4",locale:this.locale,dragula:m,markdownit:c,hljs:s,forceHttps:!1})),l.createElement("div",{style:{float:"left",margin:"10px",width:"400px",overflowY:"scroll",height:"600px"}},"Value:",l.createElement("pre",{style:{borderColor:this.isValid?"black":"red"}},l.createElement("code",{dangerouslySetInnerHTML:{__html:e}}))))},t}(l.Component);"zh-CN"===navigator.language?a(231)("./"+navigator.language+".js").then(function(e){u=e.locale,r()},function(e){r()}):r()},231:function(e,t,a){function r(e){var t=p[e];return t?a.e(t[1]).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var p={"./zh-CN.js":[234,0]};r.keys=function(){return Object.keys(p)},r.id=231,e.exports=r},42:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return p});var r={type:"object",title:"GUI:",description:"a description example",properties:{stringExample:{type:"string",title:"A string example",description:"a string description example",default:"a default string example",minLength:20,maxLength:25},booleanExample:{type:"boolean",title:"A boolean example",description:"a boolean description example",default:!0},numberExample:{type:"number",title:"A number example",description:"a number description example",default:123.4,minimum:10,exclusiveMinimum:!0,maximum:1e3,exclusiveMaximum:!0},integerExample:{type:"integer",title:"A integer example",description:"a integer description example",default:124,multipleOf:2},nullExample:{type:"null",title:"A null example",description:"a null description example",default:null},objectExample:{type:"object",title:"A object example",description:"a object description example",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},default:{},required:["propertyExample1","propertyExample2"]},arrayExample:{type:"array",title:"A array example",description:"a array description example",items:{type:"string",maxLength:15},default:["default item 1","default item 2"],minItems:1,uniqueItems:!0},readOnlyExample:{type:"string",readonly:!0,default:"abc"},readOnlyAndOptionalExample:{type:"string",readonly:!0,default:"abc"},enumExample:{type:"string",enum:["enum 1","enum 2"]},optionalExample:{type:"string"},optionalAndDefaultExample:{type:"string",default:"abc"},booleanOptionalExample:{type:"boolean"},colorExample:{type:"string",format:"color",default:"#000000"},textareaExample:{type:"string",format:"textarea"},patternExample:{type:"string",pattern:"^[A-z]{3}$",default:"abc"},imagePreviewExample:{type:"string",default:"http://image2.sina.com.cn/bj/art/2004-08-02/U91P52T4D51657F160DT20040802125523.jpg"},markdownExample:{type:"string",format:"markdown",default:"###### markdown title and code example\n\n```js\nfunction foo(bar) {\n    console.log(bar);\n}\n```"},codeExample:{type:"string",format:"code",default:"function foo(bar) {\n    console.log(bar);\n}\n"},itemTitleExample:{type:"array",items:{type:"object",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},required:["propertyExample1","propertyExample2"],collapsed:!0},default:[{propertyExample1:"foo",propertyExample2:1},{propertyExample1:"bar",propertyExample2:2},{propertyExample1:"baz",propertyExample2:3},{propertyExample1:"abc",propertyExample2:4},{propertyExample1:"def",propertyExample2:5},{propertyExample1:"ghi",propertyExample2:6}]},optionalObjectExample:{type:"object",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},maxProperties:1,minProperties:0},propertyOrderExample:{type:"object",properties:{propertyExample1:{type:"string",propertyOrder:3},propertyExample2:{type:"number",propertyOrder:1},propertyExample3:{type:"number",propertyOrder:2}}},collapsedObjectExample:{type:"object",properties:{propertyExample1:{type:"string"}},collapsed:!0}},required:["stringExample","booleanExample","numberExample","integerExample","nullExample","objectExample","arrayExample","readOnlyExample","enumExample","colorExample","textareaExample","patternExample","imagePreviewExample","markdownExample","codeExample","performanceExample","itemTitleExample","optionalObjectExample","propertyOrderExample","collapsedObjectExample"]},p={title:"Schema:",type:"string",format:"code"}}},[20]);