import{j as r}from"./jsx-runtime-DEdD30eg.js";import{P as e}from"./index-rNTiGNI1.js";import"./index-RYns6xqu.js";const n=({variant:s,items:h,className:T,...L})=>{const S="font-sans",x={unordered:"list-disc pl-5",ordered:"list-decimal pl-5",description:""},I=s==="ordered"?"ol":s==="unordered"?"ul":"dl";return r.jsx(I,{className:`${S} ${x[s]} ${T}`,...L,children:h.map((a,d)=>s==="description"?r.jsxs("div",{className:"mb-2",children:[r.jsx("dt",{className:"font-semibold",children:a.term}),r.jsx("dd",{className:"ml-4",children:a.description})]},d):r.jsx("li",{children:a},d))})};n.propTypes={variant:e.oneOf(["unordered","ordered","description"]).isRequired,items:e.arrayOf(e.oneOfType([e.string,e.shape({term:e.string,description:e.string})])).isRequired,className:e.string};n.defaultProps={className:""};n.__docgenInfo={description:"Lists component for displaying different types of lists (ordered, unordered, description).",methods:[],displayName:"Lists",props:{className:{defaultValue:{value:"''",computed:!1},description:"Additional classes for styling",type:{name:"string"},required:!1},variant:{description:"The type of list to render",type:{name:"enum",value:[{value:"'unordered'",computed:!1},{value:"'ordered'",computed:!1},{value:"'description'",computed:!1}]},required:!0},items:{description:"Items to display in the list",type:{name:"arrayOf",value:{name:"union",value:[{name:"string"},{name:"shape",value:{term:{name:"string",required:!1},description:{name:"string",required:!1}}}]}},required:!0}}};const D={title:"Design System/Components/Typography/Lists",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["unordered","ordered","description"],description:"List variant to render"},items:{control:"object",description:"Items to display in the list"},className:{control:"text",description:"TailwindCSS classes for styling"}}},t={args:{variant:"unordered",items:["Item 1","Item 2","Item 3"]}},i={args:{variant:"ordered",items:["First","Second","Third"]}},o={args:{variant:"description",items:[{term:"Term 1",description:"Description for term 1"},{term:"Term 2",description:"Description for term 2"}]}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "unordered",
    items: ["Item 1", "Item 2", "Item 3"]
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,u,f;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "ordered",
    items: ["First", "Second", "Third"]
  }
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,y,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "description",
    items: [{
      term: "Term 1",
      description: "Description for term 1"
    }, {
      term: "Term 2",
      description: "Description for term 2"
    }]
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const O=["UnorderedList","OrderedList","DescriptionList"];export{o as DescriptionList,i as OrderedList,t as UnorderedList,O as __namedExportsOrder,D as default};
