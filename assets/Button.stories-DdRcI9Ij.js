import{f as U}from"./index-C_FWhylE.js";import{j as a}from"./jsx-runtime-DEdD30eg.js";import{P as e}from"./index-rNTiGNI1.js";import{F as p}from"./PlusIcon-Ck5vHWVs.js";import"./index-RYns6xqu.js";const m=({primary:$,danger:F,size:E,label:A,rounded:G,backgroundColor:g,icon:r,iconPosition:d,...H})=>{const J="font-medium focus:outline-none focus:ring-2 flex items-center justify-center",K="rounded-full",M={large:"py-4 px-6 text-lg",medium:"py-2 px-4",small:"py-1 px-3 text-sm"}[E],Q=F?"bg-red-700 text-white hover:bg-red-500 focus:ring-red-300":$?"bg-blue-700 text-white hover:bg-blue-500 focus:ring-blue-300":"bg-green-700 text-white hover:bg-green-500 focus:ring-green-300";return a.jsxs("button",{type:"button",className:`${J} ${M} ${Q} ${G?K:"rounded-xl"}`,style:g?{backgroundColor:g}:{},...H,children:[r&&d==="left"&&a.jsx(r,{className:"mr-2 text-white size-6"}),A,r&&d==="right"&&a.jsx(r,{className:"ml-2 text-white size-6"}),r&&!d&&a.jsx(r,{className:"text-white size-6"})]})};m.propTypes={primary:e.bool,danger:e.bool,backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string.isRequired,icon:e.element,rounded:e.bool,iconPosition:e.oneOf(["left","right"]),onClick:e.func};m.defaultProps={backgroundColor:null,primary:!1,danger:!1,rounded:!1,size:"medium",icon:null,iconPosition:null,onClick:void 0};m.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},danger:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},description:"",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"element"},required:!1},iconPosition:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!0}}};const re={title:"Design System/Components/Buttons/Button",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},iconPosition:{control:{type:"radio",options:["left","right"]}}},args:{onClick:U()}},o={args:{primary:!0,label:"Primary Button"}},t={args:{primary:!1,label:"Secondary Button"}},n={args:{primary:!1,danger:!0,label:"Danger Button"}},s={args:{primary:!0,label:"Left Icon Button",icon:p,iconPosition:"left"}},l={args:{primary:!0,label:"Right Icon Button",icon:p,iconPosition:"right"}},u={args:{primary:!0,size:"large",label:"Large Button"}},i={args:{primary:!0,size:"small",label:"Small Button"}},c={args:{primary:!0,icon:p,rounded:!0,label:""}};var f,y,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Primary Button"
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,S,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: "Secondary Button"
  }
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var v,B,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    primary: false,
    danger: true,
    label: "Danger Button"
  }
}`,...(P=(B=n.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var z,q,I;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Left Icon Button",
    icon: PlusIcon,
    iconPosition: "left"
  }
}`,...(I=(q=s.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var C,L,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Right Icon Button",
    icon: PlusIcon,
    iconPosition: "right"
  }
}`,...(V=(L=l.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var j,k,w;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    primary: true,
    size: "large",
    label: "Large Button"
  }
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,N,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    primary: true,
    size: "small",
    label: "Small Button"
  }
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var R,T,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    primary: true,
    icon: PlusIcon,
    rounded: true,
    label: ""
  }
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const ae=["Primary","Secondary","Danger","LeadingIcon","TrailingIcon","Large","Small","OnlyIcon"];export{n as Danger,u as Large,s as LeadingIcon,c as OnlyIcon,o as Primary,t as Secondary,i as Small,l as TrailingIcon,ae as __namedExportsOrder,re as default};
