import{j as x}from"./jsx-runtime-DEdD30eg.js";import{P as s}from"./index-rNTiGNI1.js";import"./index-RYns6xqu.js";const a=({resizable:c,placeholder:p,className:u,...m})=>{const b="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300",f=c?"resize":"resize-none";return x.jsx("textarea",{className:`${b} ${f} ${u}`,placeholder:p,...m})};a.propTypes={resizable:s.bool,placeholder:s.string,className:s.string};a.defaultProps={resizable:!0,placeholder:"Enter text...",className:""};a.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{resizable:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:"'Enter text...'",computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};const y={title:"Design System/Components/Forms/TextArea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{resizable:{control:"boolean",description:"Determines if the textarea is resizable"},placeholder:{control:"text",description:"Placeholder text for the textarea"}}},e={args:{resizable:!0,placeholder:"Standard resizable text area"}},r={args:{resizable:!1,placeholder:"Non-resizable text area"}};var t,o,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    resizable: true,
    placeholder: "Standard resizable text area"
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var n,i,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    resizable: false,
    placeholder: "Non-resizable text area"
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const N=["Standard","NonResizable"];export{r as NonResizable,e as Standard,N as __namedExportsOrder,y as default};
