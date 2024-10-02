import{j as k}from"./jsx-runtime-DEdD30eg.js";import{P as o}from"./index-rNTiGNI1.js";import"./index-RYns6xqu.js";const s=({theme:a,children:u,className:T,...y})=>{const f="p-4",x={light:"bg-white text-black",dark:"bg-gray-800 text-white",highContrast:"bg-black text-yellow-300"};return k.jsx("div",{className:`${f} ${x[a]} ${T}`,...y,children:u||`${a.charAt(0).toUpperCase()+a.slice(1)} Theme`})};s.propTypes={theme:o.oneOf(["light","dark","highContrast"]).isRequired,children:o.node,className:o.string};s.defaultProps={children:"",className:""};s.__docgenInfo={description:"Themes component for demonstrating light, dark, and high-contrast modes.",methods:[],displayName:"Themes",props:{children:{defaultValue:{value:"''",computed:!1},description:"Content to display inside the Themes component",type:{name:"node"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"Additional classes for styling",type:{name:"string"},required:!1},theme:{description:"Theme type (light, dark, highContrast)",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1},{value:"'highContrast'",computed:!1}]},required:!0}}};const b={title:"Design System/Foundations/Themes",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{theme:{control:"select",options:["light","dark","highContrast"],description:"Theme type"},children:{control:"text",description:"Content to display"}}},e={args:{theme:"light",children:"Light Theme Example"}},t={args:{theme:"dark",children:"Dark Theme Example"}},r={args:{theme:"highContrast",children:"High Contrast Theme Example"}};var n,i,h;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    theme: "light",
    children: "Light Theme Example"
  }
}`,...(h=(i=e.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var m,l,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    theme: "dark",
    children: "Dark Theme Example"
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    theme: "highContrast",
    children: "High Contrast Theme Example"
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const S=["LightTheme","DarkTheme","HighContrastTheme"];export{t as DarkTheme,r as HighContrastTheme,e as LightTheme,S as __namedExportsOrder,b as default};
