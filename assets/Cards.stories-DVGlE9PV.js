import{j as s}from"./jsx-runtime-DEdD30eg.js";import{P as a}from"./index-rNTiGNI1.js";import{C as n}from"./Card-CHyyz7K-.js";import"./index-RYns6xqu.js";const u={title:"Design System/Molecules/Cards",tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},children:{control:"text"}}},d={"bg-white":{description:"Default background color."},"bg-stone-900":{description:"Darkest stone background color."}},i=({backgroundColor:e,children:l})=>s.jsx("div",{className:"flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300",children:s.jsx(n,{backgroundColor:e,children:s.jsxs("div",{className:`p-4 space-y-4 h-80 ${e==="bg-stone-900"?"text-stone-50":""}`,children:[l,s.jsx("p",{className:"font-semibold",children:e}),s.jsx("p",{className:"text-sm",children:d[e].description})]})})});i.propTypes={backgroundColor:a.string.isRequired,children:a.string.isRequired};const r={render:()=>s.jsx("div",{className:"mx-auto max-w-7xl",children:s.jsx("div",{className:"flex flex-wrap gap-x-4 w-fit",children:Object.keys(d).map(e=>s.jsxs(i,{backgroundColor:e,children:["This is a card with ",e," background."]},e))})})};var o,t,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap gap-x-4 w-fit">
        {Object.keys(cardBackgroundColors).map(colorKey => <CardTemplate key={colorKey} backgroundColor={colorKey}>
            This is a card with {colorKey} background.
          </CardTemplate>)}
      </div>
    </div>
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const h=["AllCards"];export{r as AllCards,h as __namedExportsOrder,u as default};
