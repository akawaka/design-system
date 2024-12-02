import{j as e}from"./jsx-runtime-DEdD30eg.js";import{P as t}from"./index-rNTiGNI1.js";import{C as h}from"./Card-CHyyz7K-.js";import"./index-RYns6xqu.js";const x={title:"Design System/Molecules/Cards",tags:["autodocs"],argTypes:{backgroundColor:{control:{type:"select",options:["bg-white","bg-stone-900"]}},children:{control:"text"}}},o=({backgroundColor:r,children:p})=>e.jsxs("div",{className:"flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300",children:[e.jsx(h,{backgroundColor:r,children:e.jsxs("div",{className:`p-4 space-y-4 h-80 ${r==="bg-stone-900"?"text-stone-50":""}`,children:[p||`This is a card with ${r} background.`,e.jsx("p",{className:"font-semibold",children:r})]})}),e.jsx("code",{className:"block p-2 mt-2 text-sm bg-gray-100 rounded",children:`<Card backgroundColor="${r}">...</Card>`})]});o.propTypes={backgroundColor:t.string.isRequired,children:t.string};const s={args:{backgroundColor:"bg-white",children:"This is a card with a white background."},render:r=>e.jsx(o,{...r})},a={args:{backgroundColor:"bg-stone-900",children:"This is a card with a black background."},render:r=>e.jsx(o,{...r})};var d,c,n;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    backgroundColor: "bg-white",
    children: "This is a card with a white background."
  },
  render: args => <CardTemplate {...args} />
}`,...(n=(c=s.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var i,l,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    backgroundColor: "bg-stone-900",
    children: "This is a card with a black background."
  },
  render: args => <CardTemplate {...args} />
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const k=["WhiteCard","BlackCard"];export{a as BlackCard,s as WhiteCard,k as __namedExportsOrder,x as default};
