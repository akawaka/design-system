import{j as e}from"./jsx-runtime-DEdD30eg.js";import{P as d}from"./index-rNTiGNI1.js";import"./index-RYns6xqu.js";const h={title:"Design System/Atoms/BoxShadows",tags:["autodocs"]},m={shadow:{class:"shadow",description:"Used for elements with a small amount of elevation like buttons."},"shadow-lg":{class:"shadow-lg",description:"Used for elements with a medium amount of elevation like dropdowns."},"shadow-xl":{class:"shadow-xl",description:"Used for elements with a large amount of elevation like modals."}},n=({boxShadow:s,name:a,description:t})=>e.jsxs("div",{className:"flex-grow p-5 m-2 space-y-4 bg-white border border-stone-300",children:[e.jsx("div",{className:`w-40 h-40 ${s} bg-white`}),e.jsx("p",{className:"font-semibold",children:a}),e.jsx("p",{className:"text-sm text-stone-600",children:t}),e.jsx("code",{className:"block p-2 mt-2 text-sm bg-gray-100 rounded",children:`<div className="${s}">...</div>`})]});n.propTypes={boxShadow:d.string.isRequired,name:d.string.isRequired,description:d.string.isRequired};const o={render:()=>e.jsx("div",{className:"max-w-5xl mx-auto",children:e.jsx("div",{className:"flex flex-wrap gap-4",children:Object.entries(m).map(([s,{class:a,description:t}])=>e.jsx(n,{boxShadow:a,name:s,description:t},s))})})};var r,i,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap gap-4">
        {Object.entries(boxShadowSizes).map(([key, {
        class: boxShadow,
        description
      }]) => <BoxShadowTemplate key={key} boxShadow={boxShadow} name={key} description={description} />)}
      </div>
    </div>
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const w=["AllBoxShadows"];export{o as AllBoxShadows,w as __namedExportsOrder,h as default};
