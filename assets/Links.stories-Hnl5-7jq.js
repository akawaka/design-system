import{j as e}from"./jsx-runtime-DEdD30eg.js";import{P as a}from"./index-rNTiGNI1.js";import{L as m}from"./Link-dl7aK9UZ.js";import"./index-RYns6xqu.js";const u={title:"Design System/Molecules/Links",tags:["autodocs"],argTypes:{href:{control:"text"},label:{control:"text"}}},p={default:{description:"Default link style."}},i=({href:o,label:n})=>e.jsxs("div",{className:"flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300",children:[e.jsx(m,{href:o,label:n}),e.jsx("p",{className:"font-semibold",children:"default"}),e.jsx("p",{className:"text-sm text-stone-600",children:p.default.description})]});i.propTypes={href:a.string.isRequired,label:a.string.isRequired};const s={render:()=>e.jsx("div",{className:"max-w-5xl mx-auto",children:e.jsx("div",{className:"flex flex-wrap space-x-4 w-fit",children:e.jsx(i,{href:"https://example.com",label:"Example Link"})})})};var r,t,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap space-x-4 w-fit">
        <LinkTemplate href="https://example.com" label="Example Link" />
      </div>
    </div>
}`,...(l=(t=s.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const h=["AllLinks"];export{s as AllLinks,h as __namedExportsOrder,u as default};
