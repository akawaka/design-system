import{j as i}from"./jsx-runtime-DEdD30eg.js";import{P as o}from"./index-rNTiGNI1.js";import"./index-RYns6xqu.js";const s=({variant:n,children:b,className:q,...v})=>{const k="font-sans",S={paragraph:"text-base text-gray-600",blockquote:"text-lg text-gray-600 italic border-l-4 pl-4 border-gray-300",small:"text-sm text-gray-600"},B=n==="blockquote"?"blockquote":"p";return i.jsx("div",{className:"p-12 bg-white",children:i.jsx(B,{className:`${k} ${S[n]} ${q}`,...v,children:b})})};s.propTypes={variant:o.oneOf(["paragraph","blockquote","small"]).isRequired,children:o.node.isRequired,className:o.string};s.defaultProps={className:""};s.__docgenInfo={description:"BodyText component for displaying paragraphs, blockquotes, and other body text elements.",methods:[],displayName:"BodyText",props:{className:{defaultValue:{value:"''",computed:!1},description:"Additional classes for styling",type:{name:"string"},required:!1},variant:{description:"The type of body text to render",type:{name:"enum",value:[{value:"'paragraph'",computed:!1},{value:"'blockquote'",computed:!1},{value:"'small'",computed:!1}]},required:!0},children:{description:"Content to display inside the BodyText component",type:{name:"node"},required:!0}}};const _={title:"Design System/Components/Typography/BodyText",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["paragraph","blockquote","small"],description:"Body text variant to render"},children:{control:"text",description:"Content to display"},className:{control:"text",description:"TailwindCSS classes for styling"}}},e={args:{variant:"paragraph",children:"This is a standard paragraph."}},a={args:{variant:"blockquote",children:"This is a blockquote with some emphasized text."}},t={args:{variant:"small",children:"This is small, less emphasized text."}},r={args:{as:"p",children:"This is a lead paragraph with larger, lighter text.",className:"text-lg font-light text-gray-600"}};var l,c,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "paragraph",
    children: "This is a standard paragraph."
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "blockquote",
    children: "This is a blockquote with some emphasized text."
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,u,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "small",
    children: "This is small, less emphasized text."
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,T,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    as: "p",
    children: "This is a lead paragraph with larger, lighter text.",
    className: "text-lg font-light text-gray-600"
  }
}`,...(f=(T=r.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const j=["Paragraph","Blockquote","SmallText","LeadText"];export{a as Blockquote,r as LeadText,e as Paragraph,t as SmallText,j as __namedExportsOrder,_ as default};
