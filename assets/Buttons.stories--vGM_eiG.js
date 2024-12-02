import{j as t}from"./jsx-runtime-DEdD30eg.js";import{P as c}from"./index-rNTiGNI1.js";import{B as i}from"./Button-DHO3nljc.js";import{A as S}from"./ArrowLeftIcon-n5YYDhBg.js";import"./index-RYns6xqu.js";import"./ArrowLongRightIcon-BOrmqkSf.js";const A={title:"Design System/Molecules/Buttons",tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","icon","tertiary"]},label:{control:"text"}}},v={primary:{description:"Primary button style."},secondary:{description:"Secondary button style."},tertiary:{description:"Tertiary button style."},icon:{description:"Icon button style."}},e=({variant:r,label:f})=>t.jsxs("div",{className:"flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300",children:[r==="icon"?t.jsx(i,{variant:r,children:t.jsx(S,{className:"size-6"})}):t.jsx(i,{variant:r,label:f}),t.jsx("p",{className:"font-semibold",children:r}),t.jsx("p",{className:"text-sm text-stone-600",children:v[r].description})]});e.propTypes={variant:c.string.isRequired,label:c.string,icon:c.node};const s={args:{variant:"primary",label:"Button"},render:r=>t.jsx(e,{...r})},a={args:{variant:"secondary",label:"Button"},render:r=>t.jsx(e,{...r})},o={args:{variant:"tertiary",label:"Button"},render:r=>t.jsx(e,{...r})},n={args:{variant:"icon"},render:r=>t.jsx(e,{...r})};var p,m,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Button"
  },
  render: args => <ButtonTemplate {...args} />
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,u,y;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Button"
  },
  render: args => <ButtonTemplate {...args} />
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,B,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    label: "Button"
  },
  render: args => <ButtonTemplate {...args} />
}`,...(x=(B=o.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var b,j,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "icon"
  },
  render: args => <ButtonTemplate {...args} />
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const E=["PrimaryButton","SecondaryButton","TertiaryButton","IconButton"];export{n as IconButton,s as PrimaryButton,a as SecondaryButton,o as TertiaryButton,E as __namedExportsOrder,A as default};
