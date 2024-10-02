import{j as n}from"./jsx-runtime-DEdD30eg.js";import{P as e}from"./index-rNTiGNI1.js";import"./index-RYns6xqu.js";const t=({options:b,multiple:r,placeholder:a,className:f,...g})=>n.jsxs("select",{multiple:r,className:`border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 ${f}`,"aria-label":a,...g,children:[a&&!r&&n.jsx("option",{value:"",disabled:!0,children:a}),b.map((s,v)=>n.jsx("option",{value:s.value,children:s.label},v))]});t.propTypes={options:e.arrayOf(e.shape({label:e.string.isRequired,value:e.string.isRequired})).isRequired,multiple:e.bool,placeholder:e.string,className:e.string};t.defaultProps={multiple:!1,placeholder:"Select an option...",className:""};t.__docgenInfo={description:"",methods:[],displayName:"SelectDropdown",props:{multiple:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:"'Select an option...'",computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},value:{name:"string",required:!0}}}},required:!0}}};const q={title:"Design System/Components/Forms/SelectDropdown",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{multiple:{control:"boolean",description:"Whether the dropdown is single or multi-select"},placeholder:{control:"text",description:"Placeholder text for the dropdown"},options:{control:"object",description:"Options for the dropdown"}}},l={args:{multiple:!1,placeholder:"Select an option",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]}},o={args:{multiple:!0,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]}};var i,p,u;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    multiple: false,
    placeholder: "Select an option",
    options: [{
      label: "Option 1",
      value: "1"
    }, {
      label: "Option 2",
      value: "2"
    }, {
      label: "Option 3",
      value: "3"
    }]
  }
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    multiple: true,
    options: [{
      label: "Option 1",
      value: "1"
    }, {
      label: "Option 2",
      value: "2"
    }, {
      label: "Option 3",
      value: "3"
    }]
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const x=["SingleSelect","MultiSelect"];export{o as MultiSelect,l as SingleSelect,x as __namedExportsOrder,q as default};
