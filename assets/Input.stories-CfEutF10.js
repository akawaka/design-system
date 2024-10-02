import{f as ie}from"./index-C_FWhylE.js";import{j as e}from"./jsx-runtime-DEdD30eg.js";import{P as a}from"./index-rNTiGNI1.js";import"./index-RYns6xqu.js";const m=({size:b,placeholder:ee,value:ae,onChange:re,label:y,helpText:x,error:r,disabled:v,hiddenLabel:le,cornerHint:I,leadingIcon:g,trailingIcon:h,overlappingLabel:f,...se})=>{const ne=`border rounded-md focus:outline-none focus:ring-2 ${v?"opacity-50 cursor-not-allowed":""}`,te=b==="large"?"p-3 text-lg":b==="small"?"p-1 text-sm":"p-2",oe=r?"border-red-500 focus:ring-red-300":"border-gray-300 focus:ring-blue-300";return e.jsxs("div",{className:"flex flex-col items-start justify-start space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between w-full",children:[y&&!le&&!f&&e.jsx("label",{className:"mb-1 text-sm font-medium",children:y}),I&&e.jsx("span",{className:"text-sm text-gray-500",children:I})]}),e.jsxs("div",{className:"relative",children:[g&&e.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:e.jsx(g,{})}),f&&e.jsx("label",{className:"absolute inline-block px-1 text-xs bg-black -top-2 left-2",children:f}),e.jsx("input",{type:"text",className:`${ne} ${te} ${oe} ${g?"pl-10":""} ${h?"pr-10":""}`,placeholder:ee,value:ae,onChange:re,disabled:v,"aria-invalid":r?"true":void 0,...se}),h&&e.jsx("span",{className:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",children:e.jsx(h,{})})]}),x&&e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:x}),r&&e.jsx("p",{className:"mt-1 text-sm text-red-500",children:r})]})};m.propTypes={size:a.oneOf(["small","medium","large"]),placeholder:a.string,value:a.string,onChange:a.func,label:a.string,helpText:a.string,error:a.string,disabled:a.bool,hiddenLabel:a.bool,cornerHint:a.string,leadingIcon:a.elementType,trailingIcon:a.elementType,insetLabel:a.string,overlappingLabel:a.string};m.defaultProps={size:"medium",placeholder:"Enter text...",value:"",onChange:void 0,label:null,helpText:null,error:null,disabled:!1,hiddenLabel:!1,cornerHint:null,leadingIcon:null,trailingIcon:null,insetLabel:null,overlappingLabel:null};m.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},placeholder:{defaultValue:{value:"'Enter text...'",computed:!1},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},helpText:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},error:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},hiddenLabel:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},cornerHint:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},leadingIcon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"elementType"},required:!1},trailingIcon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"elementType"},required:!1},insetLabel:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},overlappingLabel:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1}}};const X=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"size-5",children:[e.jsx("path",{d:"M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"}),e.jsx("path",{d:"m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"})]});X.__docgenInfo={description:"",methods:[],displayName:"EnvelopeIcon"};const Y=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"size-5",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",clipRule:"evenodd"})});Y.__docgenInfo={description:"",methods:[],displayName:"QuestionIcon"};const me={title:"Design System/Components/Forms/Input",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select",options:["small","medium","large"]}},leadingIcon:{control:{type:"none"}},trailingIcon:{control:{type:"none"}}},args:{onChange:ie()}},l={args:{placeholder:"Enter text..."}},s={args:{label:"Username",placeholder:"Enter your username..."}},n={args:{label:"Email",helpText:"We'll never share your email with anyone else.",placeholder:"Enter your email..."}},t={args:{label:"Password",placeholder:"Enter your password...",error:"Password must be at least 8 characters."}},o={args:{label:"Disabled Input",placeholder:"This field is disabled",disabled:!0}},i={args:{label:"Hidden Label",placeholder:"Enter something...",hiddenLabel:!0}},d={args:{label:"Username",cornerHint:"Optional",placeholder:"Enter your username..."}},c={args:{label:"Search",placeholder:"Search...",leadingIcon:X}},u={args:{label:"Username",placeholder:"Enter your username...",trailingIcon:Y}},p={args:{label:"Full Name",overlappingLabel:"Enter your full name",placeholder:"John Doe"}};var E,L,j;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var w,V,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username..."
  }
}`,...(S=(V=s.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var W,N,T;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Email",
    helpText: "We'll never share your email with anyone else.",
    placeholder: "Enter your email..."
  }
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var q,H,C;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter your password...",
    error: "Password must be at least 8 characters."
  }
}`,...(C=(H=t.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var D,_,P;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Disabled Input",
    placeholder: "This field is disabled",
    disabled: true
  }
}`,...(P=(_=o.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var z,O,U;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Hidden Label",
    placeholder: "Enter something...",
    hiddenLabel: true
  }
}`,...(U=(O=i.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var $,Z,M;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: "Username",
    cornerHint: "Optional",
    placeholder: "Enter your username..."
  }
}`,...(M=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:M.source}}};var A,F,Q;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Search...",
    leadingIcon: EnvelopeIcon
  }
}`,...(Q=(F=c.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var R,k,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username...",
    trailingIcon: QuestionIcon
  }
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var J,G,K;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: "Full Name",
    overlappingLabel: "Enter your full name",
    placeholder: "John Doe"
  }
}`,...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const ge=["Default","WithLabel","WithLabelAndHelpText","WithValidationError","Disabled","WithHiddenLabel","WithCornerHint","WithLeadingIcon","WithTrailingIcon","WithOverlappingLabel"];export{l as Default,o as Disabled,d as WithCornerHint,i as WithHiddenLabel,s as WithLabel,n as WithLabelAndHelpText,c as WithLeadingIcon,p as WithOverlappingLabel,u as WithTrailingIcon,t as WithValidationError,ge as __namedExportsOrder,me as default};
