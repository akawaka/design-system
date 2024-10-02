import{f as B}from"./index-C_FWhylE.js";import{j as e}from"./jsx-runtime-DEdD30eg.js";import{P as r}from"./index-rNTiGNI1.js";import{r as t}from"./index-RYns6xqu.js";function V({title:s,titleId:i,...n},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":i},n),s?t.createElement("title",{id:i},s):null,t.createElement("path",{fillRule:"evenodd",d:"M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",clipRule:"evenodd"}))}const l=t.forwardRef(V);function _({title:s,titleId:i,...n},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":i},n),s?t.createElement("title",{id:i},s):null,t.createElement("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"}))}const $=t.forwardRef(_),f=({type:s,title:i,description:n,listItems:a,dismissible:O,onDismiss:T,actions:h})=>{const k={success:"bg-green-50 text-green-700 border-green-300",error:"bg-red-50 text-red-700 border-red-300",warning:"bg-yellow-50 text-yellow-700 border-yellow-300",info:"bg-blue-50 text-blue-700 border-blue-300"},x={success:"text-green-400",error:"text-red-400",warning:"text-yellow-400",info:"text-blue-400"},L={success:l,error:l,warning:l,info:l}[s];return e.jsx("div",{className:`p-4 rounded-md ${k[s]} border relative`,children:e.jsxs("div",{className:"flex ",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(L,{className:`w-5 h-5 ${x[s]}`,"aria-hidden":"true"})}),e.jsxs("div",{className:"flex-grow ml-3",children:[e.jsx("h3",{className:"text-sm font-medium",children:i}),n&&e.jsx("div",{className:"mt-2 text-sm",children:e.jsx("p",{children:n})}),a&&e.jsx("ul",{className:"mt-2 text-sm list-disc list-inside",children:a.map((o,g)=>e.jsx("li",{children:o},g))}),h&&e.jsx("div",{className:"flex mt-4 space-x-3",children:h.map((o,g)=>e.jsx("button",{className:"text-sm font-medium text-blue-600 hover:text-blue-500",onClick:o.onClick,children:o.label},g))})]}),O&&e.jsx("div",{className:"absolute top-0 right-0 p-2",children:e.jsx("button",{onClick:T,className:"bg-transparent",children:e.jsx($,{className:`w-5 h-5 ${x[s]}`,"aria-hidden":"true"})})})]})})};f.propTypes={type:r.oneOf(["success","error","warning","info"]).isRequired,title:r.string.isRequired,description:r.string,listItems:r.arrayOf(r.string),dismissible:r.bool,onDismiss:r.func,actions:r.arrayOf(r.shape({label:r.string.isRequired,onClick:r.func.isRequired}))};f.defaultProps={dismissible:!1,onDismiss:()=>{},description:"",listItems:null,actions:null};const F=f;f.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{dismissible:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onDismiss:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},description:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},listItems:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},actions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},onClick:{name:"func",required:!0}}}},required:!1},type:{description:"",type:{name:"enum",value:[{value:"'success'",computed:!1},{value:"'error'",computed:!1},{value:"'warning'",computed:!1},{value:"'info'",computed:!1}]},required:!0},title:{description:"",type:{name:"string"},required:!0}}};const z={title:"Design System/Components/Alerts/Alert",component:F,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select",options:["success","error","warning","info"]}},dismissible:{control:"boolean"},title:{control:"text"},description:{control:"text"},listItems:{control:"array"}},args:{onDismiss:B()}},c={args:{type:"info",title:"Informational Alert",description:"This is an informational alert with a description.",dismissible:!1}},d={args:{type:"warning",title:"Warning Alert",listItems:["First warning item","Second warning item","Third warning item"],dismissible:!1}},m={args:{type:"success",title:"Success Alert",dismissible:!1}},u={args:{type:"error",title:"Error Alert",description:"An error has occurred.",dismissible:!0}},p={args:{type:"error",title:"Error Alert",description:"An error has occurred.",dismissible:!0}};var b,w,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: "info",
    title: "Informational Alert",
    description: "This is an informational alert with a description.",
    dismissible: false
  }
}`,...(y=(w=c.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var v,A,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: "warning",
    title: "Warning Alert",
    listItems: ["First warning item", "Second warning item", "Third warning item"],
    dismissible: false
  }
}`,...(j=(A=d.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var E,N,q;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: "success",
    title: "Success Alert",
    dismissible: false
  }
}`,...(q=(N=m.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var S,W,D;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: "error",
    title: "Error Alert",
    description: "An error has occurred.",
    dismissible: true
  }
}`,...(D=(W=u.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var R,C,I;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "error",
    title: "Error Alert",
    description: "An error has occurred.",
    dismissible: true
  }
}`,...(I=(C=p.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const G=["WithDescription","WithList","WithActions","WithDismissButton","WithDismissButton2"];export{m as WithActions,c as WithDescription,u as WithDismissButton,p as WithDismissButton2,d as WithList,G as __namedExportsOrder,z as default};
