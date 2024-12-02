import{j as e}from"./jsx-runtime-DEdD30eg.js";import{P as o}from"./index-rNTiGNI1.js";import{L as y}from"./Link-dl7aK9UZ.js";import"./index-RYns6xqu.js";const r=({items:m})=>e.jsx("nav",{className:"flex items-center p-4 space-x-2 text-stone-700 bg-stone-50",children:m.map((n,c)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(y,{href:n.href,label:e.jsx("span",{className:"text-sm font-bold",children:n.label})}),c<m.length-1&&e.jsx("span",{className:"mx-2 text-stone-500",children:"/"})]},c))});r.propTypes={items:o.arrayOf(o.shape({label:o.string.isRequired,href:o.string.isRequired})).isRequired};r.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},href:{name:"string",required:!0}}}},required:!0}}};const S={title:"Design System/Organisms/Breadcrumbs",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{items:{control:"object",description:"Array of breadcrumb items"}}},x=[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Subcategory",href:"/category/subcategory"},{label:"Item",href:"/category/subcategory/item"}],s=()=>e.jsx(r,{items:x}),a=()=>e.jsx(r,{items:[{label:"Home",href:"/"}]}),t=()=>e.jsx(r,{items:[{label:"Home",href:"/"},{label:"Category",href:"/category"}]});s.__docgenInfo={description:"",methods:[],displayName:"DefaultBreadcrumbs"};a.__docgenInfo={description:"",methods:[],displayName:"SingleBreadcrumb"};t.__docgenInfo={description:"",methods:[],displayName:"TwoBreadcrumbs"};var i,d,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Breadcrumbs items={breadcrumbItems} />;
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,p,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Breadcrumbs items={[{
    label: "Home",
    href: "/"
  }]} />;
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,g,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Breadcrumbs items={[{
    label: "Home",
    href: "/"
  }, {
    label: "Category",
    href: "/category"
  }]} />;
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const I=["DefaultBreadcrumbs","SingleBreadcrumb","TwoBreadcrumbs"];export{s as DefaultBreadcrumbs,a as SingleBreadcrumb,t as TwoBreadcrumbs,I as __namedExportsOrder,S as default};
