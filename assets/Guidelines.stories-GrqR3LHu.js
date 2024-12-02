import{j as e}from"./jsx-runtime-DEdD30eg.js";import{P as t}from"./index-rNTiGNI1.js";import"./index-RYns6xqu.js";const y={title:"Design System/Documentation/Guidelines",tags:["autodocs"]},i={atoms:{description:"Atoms are the basic building blocks of our design system. They define the TailwindCSS values used to create more complex components.",examples:[{name:"Colors",component:"AllColors"},{name:"Border Radius",component:"AllBorderRadius"},{name:"Box Shadows",component:"AllBoxShadows"}]},molecules:{description:"Molecules are combinations of atoms that form more complex UI components.",examples:[{name:"Badges",component:"AllBadges"},{name:"Cards",component:"AllCards"}]},organisms:{description:"Organisms are relatively complex components that form distinct sections of an interface.",examples:[]},pages:{description:"Pages are specific views composed of organisms, molecules, and atoms.",examples:[]}},c=({title:s,description:l,examples:d})=>e.jsxs("div",{className:"p-5 m-2 space-y-4 border shadow-md border-stone-300",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:s}),e.jsx("p",{className:"text-sm text-stone-600",children:l}),e.jsx("div",{className:"space-y-4",children:d.map((a,p)=>e.jsxs("div",{className:"p-4 border border-stone-300",children:[e.jsx("h3",{className:"text-xl font-semibold",children:a.name}),e.jsx(a.component,{})]},p))})]});c.propTypes={title:t.string.isRequired,description:t.string.isRequired,examples:t.arrayOf(t.shape({name:t.string.isRequired,component:t.elementType.isRequired})).isRequired};const o={render:()=>e.jsx("div",{className:"max-w-5xl mx-auto",children:Object.keys(i).map(s=>e.jsx(c,{title:s.charAt(0).toUpperCase()+s.slice(1),description:i[s].description,examples:i[s].examples},s))})};var r,n,m;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div className="max-w-5xl mx-auto">
      {Object.keys(designSystemStructure).map(key => <DesignSystemTemplate key={key} title={key.charAt(0).toUpperCase() + key.slice(1)} description={designSystemStructure[key].description} examples={designSystemStructure[key].examples} />)}
    </div>
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const h=["DesignSystemGuidelines"];export{o as DesignSystemGuidelines,h as __namedExportsOrder,y as default};
