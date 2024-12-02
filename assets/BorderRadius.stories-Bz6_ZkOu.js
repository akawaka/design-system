import{j as e}from"./jsx-runtime-DEdD30eg.js";import{P as o}from"./index-rNTiGNI1.js";import"./index-RYns6xqu.js";const x={title:"Design System/Atoms/BordersRadius",tags:["autodocs"]},c={"rounded-md":{class:"rounded-md",description:"Used for small elements like buttons."},"rounded-xl":{class:"rounded-xl",description:"Used for medium elements like cards."},"rounded-3xl":{class:"rounded-3xl",description:"Used for large elements like backgrounds."},"rounded-full":{class:"rounded-full",description:"Used for circular elements like avatars."}},l=({borderRadius:s,name:d,description:a})=>e.jsxs("div",{className:"flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300",children:[e.jsx("div",{className:`w-40 h-40 ${s} bg-stone-900`}),e.jsx("p",{className:"font-semibold",children:d}),e.jsx("p",{className:"text-sm text-stone-600",children:a}),e.jsx("code",{className:"block p-2 mt-2 text-sm bg-gray-100 rounded",children:`<div className="${s}">...</div>`})]});l.propTypes={borderRadius:o.string.isRequired,name:o.string.isRequired,description:o.string.isRequired};const r={render:()=>e.jsx("div",{className:"max-w-5xl mx-auto",children:e.jsx("div",{className:"flex flex-wrap gap-4",children:Object.entries(c).map(([s,{class:d,description:a}])=>e.jsx(l,{borderRadius:d,name:s,description:a},s))})})};var i,n,t;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap gap-4">
        {Object.entries(borderRadiusSizes).map(([key, {
        class: borderRadius,
        description
      }]) => <BorderRadiusTemplate key={key} borderRadius={borderRadius} name={key} description={description} />)}
      </div>
    </div>
}`,...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const b=["AllBorderRadius"];export{r as AllBorderRadius,b as __namedExportsOrder,x as default};
