import{j as e}from"./jsx-runtime-DEdD30eg.js";import{P as s}from"./index-rNTiGNI1.js";import"./index-RYns6xqu.js";const a=({type:u,label:h,checked:f,disabled:i,id:n,text:x,...b})=>{const g=i?"opacity-50 cursor-not-allowed":"";return e.jsxs("fieldset",{children:[e.jsx("legend",{className:"sr-only",children:"Notifications"}),e.jsx("div",{className:"space-y-5",children:e.jsxs("div",{className:"relative flex items-start",children:[e.jsx("div",{className:"flex items-center h-6",children:e.jsx("input",{checked:f,id:n,name:n,type:u,disabled:i,className:`${g} w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600`,...b})}),e.jsxs("div",{className:"ml-3 text-sm leading-6",children:[e.jsx("label",{htmlFor:n,className:"font-medium text-gray-900",children:h}),e.jsx("p",{className:"text-gray-500",children:x})]})]})})]})};a.propTypes={type:s.oneOf(["checkbox","radio"]).isRequired,label:s.string.isRequired,id:s.string.isRequired,text:s.string.isRequired,checked:s.bool,disabled:s.bool,className:s.string};a.defaultProps={checked:!1,disabled:!1,className:""};a.__docgenInfo={description:"",methods:[],displayName:"CheckboxRadio",props:{checked:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},type:{description:"",type:{name:"enum",value:[{value:'"checkbox"',computed:!1},{value:'"radio"',computed:!1}]},required:!0},label:{description:"",type:{name:"string"},required:!0},id:{description:"",type:{name:"string"},required:!0},text:{description:"",type:{name:"string"},required:!0}}};const j={title:"Design System/Components/Forms/CheckboxRadio",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["checkbox","radio"],description:"Type of input"},label:{control:"text",description:"Label for the input"},checked:{control:"boolean",description:"Whether the input is checked"},disabled:{control:"boolean",description:"Whether the input is disabled"}}},t={args:{type:"checkbox",label:"Check me",id:"comments",text:"Get notified when someones posts a comment on a posting.",checked:null,disabled:!1}},o={args:{type:"radio",label:"Select me",id:"comments",text:"Get notified when someones posts a comment on a posting.",checked:null,disabled:!1}};var r,c,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    type: "checkbox",
    label: "Check me",
    id: "comments",
    text: "Get notified when someones posts a comment on a posting.",
    checked: null,
    disabled: false
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: "radio",
    label: "Select me",
    id: "comments",
    text: "Get notified when someones posts a comment on a posting.",
    checked: null,
    disabled: false
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const q=["Checkbox","RadioButton"];export{t as Checkbox,o as RadioButton,q as __namedExportsOrder,j as default};
