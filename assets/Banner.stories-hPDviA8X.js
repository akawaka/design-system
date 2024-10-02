import{j as r}from"./jsx-runtime-DEdD30eg.js";import{P as e}from"./index-rNTiGNI1.js";import{F as W,a as V}from"./XMarkIcon-xRFAwUaN.js";import{f as i}from"./index-C_FWhylE.js";import"./index-RYns6xqu.js";const l=({icon:c,title:u,linkText:m,linkUrl:d,onDismiss:g,backgroundColor:N,titleColor:L,linkColor:w,iconColor:S,dismissIconColor:U,...$})=>{const _=`p-4 rounded-xl flex items-baseline space-x-4 justify-between ${N}`;return r.jsxs("div",{className:_,...$,children:[r.jsxs("div",{className:"flex items-center",children:[c&&r.jsx(c,{className:`mr-2 size-6 ${S}`}),u&&r.jsx("h3",{className:`text-lg font-medium ${L}`,children:u})]}),r.jsxs("div",{className:"flex items-center space-x-4",children:[m&&d&&r.jsx("a",{href:d,className:`hover:underline ${w}`,children:m}),g&&r.jsx("button",{onClick:g,className:"focus:outline-none",children:r.jsx(W,{className:`size-6 ${U}`})})]})]})};l.propTypes={icon:e.element,title:e.string,linkText:e.string,linkUrl:e.string,onDismiss:e.func,backgroundColor:e.string,titleColor:e.string,linkColor:e.string,iconColor:e.string,dismissIconColor:e.string};l.defaultProps={icon:null,title:null,linkText:null,linkUrl:null,onDismiss:null,backgroundColor:"bg-gray-100",titleColor:"text-gray-800",linkColor:"text-blue-500",iconColor:"text-gray-600",dismissIconColor:"text-gray-600"};l.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"element"},required:!1},title:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},linkText:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},linkUrl:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},onDismiss:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},backgroundColor:{defaultValue:{value:'"bg-gray-100"',computed:!1},description:"",type:{name:"string"},required:!1},titleColor:{defaultValue:{value:'"text-gray-800"',computed:!1},description:"",type:{name:"string"},required:!1},linkColor:{defaultValue:{value:'"text-blue-500"',computed:!1},description:"",type:{name:"string"},required:!1},iconColor:{defaultValue:{value:'"text-gray-600"',computed:!1},description:"",type:{name:"string"},required:!1},dismissIconColor:{defaultValue:{value:'"text-gray-600"',computed:!1},description:"",type:{name:"string"},required:!1}}};const O={title:"Design System/Components/Banners/Banner",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"text"},titleColor:{control:"text"},linkColor:{control:"text"},iconColor:{control:"text"},dismissIconColor:{control:"text"}},args:{onDismiss:i()}},o={args:{title:"This is a banner",backgroundColor:"bg-gray-100"}},n={args:{title:"Banner with Icon",icon:V,backgroundColor:"bg-gray-100",iconColor:"text-blue-500"}},t={args:{title:"Banner with Link",linkText:"Learn more",linkUrl:"https://example.com",backgroundColor:"bg-gray-100",linkColor:"text-green-500"}},s={args:{title:"Dismissable Banner",onDismiss:i(),backgroundColor:"bg-gray-100",dismissIconColor:"text-red-500"}},a={args:{title:"Complete Banner",icon:V,linkText:"Learn more",linkUrl:"https://example.com",onDismiss:i(),backgroundColor:"bg-gray-100",titleColor:"text-gray-800",linkColor:"text-green-500",iconColor:"text-blue-500",dismissIconColor:"text-red-500"}};var p,f,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "This is a banner",
    backgroundColor: "bg-gray-100"
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var C,b,k;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: "Banner with Icon",
    icon: InformationCircleIcon,
    backgroundColor: "bg-gray-100",
    iconColor: "text-blue-500"
  }
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var y,h,I;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: "Banner with Link",
    linkText: "Learn more",
    linkUrl: "https://example.com",
    backgroundColor: "bg-gray-100",
    linkColor: "text-green-500"
  }
}`,...(I=(h=t.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var v,D,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: "Dismissable Banner",
    onDismiss: fn(),
    backgroundColor: "bg-gray-100",
    dismissIconColor: "text-red-500"
  }
}`,...(B=(D=s.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var j,T,q;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: "Complete Banner",
    icon: InformationCircleIcon,
    linkText: "Learn more",
    linkUrl: "https://example.com",
    onDismiss: fn(),
    backgroundColor: "bg-gray-100",
    titleColor: "text-gray-800",
    linkColor: "text-green-500",
    iconColor: "text-blue-500",
    dismissIconColor: "text-red-500"
  }
}`,...(q=(T=a.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const A=["Default","WithIcon","WithLink","Dismissable","Complete"];export{a as Complete,o as Default,s as Dismissable,n as WithIcon,t as WithLink,A as __namedExportsOrder,O as default};
