import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as m}from"./index-RYns6xqu.js";import{P as s}from"./index-rNTiGNI1.js";import{c as u}from"./clsx-B-dksMZM.js";import{B as I}from"./Button-DHO3nljc.js";import{X as K}from"./XMarkIcon-BhRzsqV0.js";import{C as Q,E as U,a as Z,I as ee}from"./InformationCircleIcon-BmPoyOCD.js";import"./ArrowLongRightIcon-BOrmqkSf.js";const re={success:Q,error:U,warning:Z,info:ee},g={alert:{success:"bg-green-100 text-green-800 border-green-500",error:"bg-red-100 text-red-800 border-red-600",warning:"bg-yellow-100 text-yellow-800 border-yellow-500",info:"bg-blue-50 text-blue-800 border-blue-500"},icon:{success:"text-green-800",error:"text-red-800",warning:"text-yellow-800",info:"text-blue-800"},progressBar:{success:"bg-green-500",error:"bg-red-600",warning:"bg-yellow-500",info:"bg-blue-500"}},v=({type:r="info",title:T,description:p,listItems:i,dismissible:j=!0,onDismiss:c,actions:n,autoDismissTime:o})=>{const[F,N]=m.useState(!1),[G,H]=m.useState(100),w=m.useCallback(()=>{N(!1),c&&c()},[c]);m.useEffect(()=>{if(N(!0),o){const t=setInterval(()=>{H(d=>{const q=d-100/(o/100);return q<=0?(clearInterval(t),w(),0):q})},100);return()=>clearInterval(t)}},[o,w]);const J=re[r];return e.jsx("div",{role:"alert","aria-live":"assertive",className:u("fixed z-50 top-8 transition-all duration-500 ease-out",F?"transform translate-x-0 opacity-100 right-8":"transform translate-x-full right-0"),children:e.jsxs("div",{className:u("p-4 w-96 rounded-md border relative overflow-hidden",g.alert[r]),children:[o&&e.jsx("div",{className:u("absolute top-0 left-0 h-1 transition-all duration-100 ease-linear",g.progressBar[r]),style:{width:`${G}%`}}),e.jsxs("div",{className:"flex",children:[e.jsx(J,{className:u("w-5 h-5 flex-shrink-0",g.icon[r])}),e.jsxs("div",{className:"flex-grow ml-3",children:[e.jsx("h3",{className:"text-sm font-medium",children:T}),p&&e.jsx("p",{className:"mt-2 text-sm",children:p}),(i==null?void 0:i.length)>0&&e.jsx("ul",{className:"mt-2 text-sm list-disc list-inside",children:i.map((t,d)=>e.jsx("li",{children:t},d))}),(n==null?void 0:n.length)>0&&e.jsx("div",{className:"flex mt-4 space-x-3",children:n.map((t,d)=>e.jsx(I,{variant:"icon",onClick:t.onClick,className:"text-blue-600 hover:text-blue-500",children:t.label},d))})]}),j&&e.jsx(I,{onClick:w,variant:"icon",className:"absolute top-0 right-0 p-2 bg-transparent",children:e.jsx(K,{className:u("w-5 h-5",g.icon[r])})})]})]})})};v.propTypes={type:s.oneOf(["success","error","warning","info"]).isRequired,title:s.string.isRequired,description:s.string,listItems:s.arrayOf(s.string),dismissible:s.bool,onDismiss:s.func,actions:s.arrayOf(s.shape({label:s.string.isRequired,onClick:s.func.isRequired})),autoDismissTime:s.number};v.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{defaultValue:{value:'"info"',computed:!1},description:"",type:{name:"enum",value:[{value:'"success"',computed:!1},{value:'"error"',computed:!1},{value:'"warning"',computed:!1},{value:'"info"',computed:!1}]},required:!1},dismissible:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},title:{description:"",type:{name:"string"},required:!0},description:{description:"",type:{name:"string"},required:!1},listItems:{description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},onDismiss:{description:"",type:{name:"func"},required:!1},actions:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},onClick:{name:"func",required:!0}}}},required:!1},autoDismissTime:{description:"",type:{name:"number"},required:!1}}};const de={title:"Design System/Organisms/Alerts",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["success","error","warning","info"],description:"Type of the alert"},title:{control:"text",description:"Title of the alert"},description:{control:"text",description:"Description of the alert"},dismissible:{control:"boolean",description:"Whether the alert is dismissible"},autoDismissTime:{control:"number",description:"Time in milliseconds to auto dismiss the alert"}}},a=({type:r,title:T,description:p,dismissible:i,autoDismissTime:j})=>{const[c,n]=m.useState(!0),o=()=>{n(!1)};return e.jsx("div",{className:"flex items-center justify-center w-full h-80",children:c&&e.jsx(v,{type:r,title:T,description:p,dismissible:i,onDismiss:o,autoDismissTime:j})})};a.propTypes={type:s.oneOf(["success","error","warning","info"]).isRequired,title:s.string.isRequired,description:s.string,dismissible:s.bool,autoDismissTime:s.number};const l={type:"success",title:"Success Alert",description:"This is a success alert.",dismissible:!0,autoDismissTime:5e3},f={args:{...l},render:r=>e.jsx(a,{...r})},x={args:{...l,type:"success"},render:r=>e.jsx(a,{...r})},h={args:{...l,type:"error",title:"Error Alert",description:"This is an error alert."},render:r=>e.jsx(a,{...r})},b={args:{...l,type:"warning",title:"Warning Alert",description:"This is a warning alert."},render:r=>e.jsx(a,{...r})},A={args:{...l,type:"info",title:"Info Alert",description:"This is an info alert."},render:r=>e.jsx(a,{...r})},y={args:{...l,autoDismissTime:void 0,title:"Persistent Alert"},render:r=>e.jsx(a,{...r})};var S,D,C;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  render: args => <AlertTemplate {...args} />
}`,...(C=(D=f.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var E,k,O;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: "success"
  },
  render: args => <AlertTemplate {...args} />
}`,...(O=(k=x.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var R,V,P;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: "error",
    title: "Error Alert",
    description: "This is an error alert."
  },
  render: args => <AlertTemplate {...args} />
}`,...(P=(V=h.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var W,B,_;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: "warning",
    title: "Warning Alert",
    description: "This is a warning alert."
  },
  render: args => <AlertTemplate {...args} />
}`,...(_=(B=b.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var X,z,L;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: "info",
    title: "Info Alert",
    description: "This is an info alert."
  },
  render: args => <AlertTemplate {...args} />
}`,...(L=(z=A.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var M,Y,$;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    autoDismissTime: undefined,
    title: "Persistent Alert"
  },
  render: args => <AlertTemplate {...args} />
}`,...($=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const ue=["DefaultAlert","SuccessAlert","ErrorAlert","WarningAlert","InfoAlert","NoAutoDismissAlert"];export{f as DefaultAlert,h as ErrorAlert,A as InfoAlert,y as NoAutoDismissAlert,x as SuccessAlert,b as WarningAlert,ue as __namedExportsOrder,de as default};
