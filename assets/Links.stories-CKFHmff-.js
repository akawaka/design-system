import{j as u}from"./jsx-runtime-DEdD30eg.js";import{P as r}from"./index-rNTiGNI1.js";import"./index-RYns6xqu.js";const t=({href:c,children:p,className:m,...h})=>u.jsx("a",{href:c,className:`text-blue-500 hover:text-blue-700 underline ${m}`,...h,children:p});t.propTypes={href:r.string.isRequired,children:r.node.isRequired,className:r.string};t.defaultProps={className:""};t.__docgenInfo={description:"Links component for displaying hyperlinks with different styles and states.",methods:[],displayName:"Links",props:{className:{defaultValue:{value:"''",computed:!1},description:"Additional classes for styling",type:{name:"string"},required:!1},href:{description:"URL that the link points to",type:{name:"string"},required:!0},children:{description:"Content to display inside the link",type:{name:"node"},required:!0}}};const x={title:"Design System/Components/Typography/Links",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text",description:"URL that the link points to"},children:{control:"text",description:"Content to display"},className:{control:"text",description:"TailwindCSS classes for styling"}}},e={args:{href:"#",children:"This is a link"}},s={args:{href:"#",children:"This is a styled link",className:"text-red-500 hover:text-red-700"}};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    href: "#",
    children: "This is a link"
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var o,l,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    href: "#",
    children: "This is a styled link",
    className: "text-red-500 hover:text-red-700"
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const L=["DefaultLink","StyledLink"];export{e as DefaultLink,s as StyledLink,L as __namedExportsOrder,x as default};
