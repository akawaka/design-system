import{j as r}from"./jsx-runtime-DEdD30eg.js";import{P as s}from"./index-rNTiGNI1.js";import{H as Y}from"./Heading-COAMRs3O.js";import{B as Z}from"./BodyText-BD-ZsMBn.js";import{E as ee,a as re,I as se,C as ae}from"./InformationCircleIcon-DKodORwE.js";import"./index-RYns6xqu.js";const T=({type:e,children:a,className:v,...Q})=>{const U={alert:"text-red-600",warning:"text-yellow-600 ",info:"text-blue-500",validation:"text-green-500"},X={alert:r.jsx(ee,{className:"mr-2 size-4"}),warning:r.jsx(re,{className:"mr-2 size-4"}),info:r.jsx(se,{className:"mr-2 size-4"}),validation:r.jsx(ae,{className:"mr-2 size-4"})};return r.jsxs("span",{className:`flex items-center p-2 rounded ${U[e]} ${v}`,...Q,children:[X[e],a]})};T.propTypes={type:s.oneOf(["alert","warning","info","validation"]).isRequired,children:s.node.isRequired,className:s.string};T.__docgenInfo={description:"FeedbackText component for displaying alert, warning, info, and validation messages.",methods:[],displayName:"FeedbackText",props:{type:{description:"The type of feedback message to render",type:{name:"enum",value:[{value:"'alert'",computed:!1},{value:"'warning'",computed:!1},{value:"'info'",computed:!1},{value:"'validation'",computed:!1}]},required:!0},children:{description:"Content to display inside the FeedbackText component",type:{name:"node"},required:!0},className:{description:"Additional classes for styling",type:{name:"string"},required:!1}}};const ce={title:"Design System/Molecules/Textes",tags:["autodocs"],argTypes:{level:{control:"select",options:[1,2,3,4,5,6]},variant:{control:"select",options:["paragraph","small","label"]},white:{control:"boolean"},children:{control:"text"},type:{control:"select",options:["alert","warning","info","validation"]}}},h=({level:e,children:a,white:v})=>r.jsxs("div",{className:"flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300",children:[r.jsx(Y,{level:e,white:v,children:a}),r.jsxs("p",{className:"font-semibold",children:["Heading Level ",e]})]});h.propTypes={level:s.number.isRequired,children:s.string.isRequired,white:s.bool};const x=({variant:e,children:a})=>r.jsxs("div",{className:"flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300",children:[r.jsx(Z,{variant:e,children:a}),r.jsx("p",{className:"font-semibold",children:e})]});x.propTypes={variant:s.string.isRequired,children:s.string.isRequired};const n=({type:e,children:a})=>r.jsxs("div",{className:"flex-grow p-5 m-2 space-y-4 border shadow-md border-stone-300",children:[r.jsx(T,{type:e,children:a}),r.jsx("p",{className:"font-semibold",children:e})]});n.propTypes={type:s.string.isRequired,children:s.string.isRequired};const t={args:{level:1,children:"Des experts pour vos projets web",white:!1},render:e=>r.jsx(h,{...e})},o={args:{level:2,children:"Des experts pour vos projets web",white:!1},render:e=>r.jsx(h,{...e})},i={args:{level:3,children:"Des experts pour vos projets web",white:!1},render:e=>r.jsx(h,{...e})},d={args:{variant:"paragraph",children:"Nous avons pour objectif de réaliser des prestations de qualités tout en respectant nos valeurs humaines, éthiques et notre envie de partage."},render:e=>r.jsx(x,{...e})},l={args:{variant:"small",children:"Nous avons pour objectif de réaliser des prestations de qualités tout en respectant nos valeurs humaines, éthiques et notre envie de partage."},render:e=>r.jsx(x,{...e})},c={args:{variant:"label",children:"Nous avons pour objectif de réaliser des prestations de qualités tout en respectant nos valeurs humaines, éthiques et notre envie de partage."},render:e=>r.jsx(x,{...e})},p={args:{type:"alert",children:"This is an alert message."},render:e=>r.jsx(n,{...e})},m={args:{type:"warning",children:"This is a warning message."},render:e=>r.jsx(n,{...e})},g={args:{type:"info",children:"This is an informational message."},render:e=>r.jsx(n,{...e})},u={args:{type:"validation",children:"This is a validation message."},render:e=>r.jsx(n,{...e})};var f,b,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: "Des experts pour vos projets web",
    white: false
  },
  render: args => <HeadlineTemplate {...args} />
}`,...(j=(b=t.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var y,w,q;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: "Des experts pour vos projets web",
    white: false
  },
  render: args => <HeadlineTemplate {...args} />
}`,...(q=(w=o.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var N,k,F;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: "Des experts pour vos projets web",
    white: false
  },
  render: args => <HeadlineTemplate {...args} />
}`,...(F=(k=i.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var S,H,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "paragraph",
    children: "Nous avons pour objectif de réaliser des prestations de qualités tout en respectant nos valeurs humaines, éthiques et notre envie de partage."
  },
  render: args => <BodyTextTemplate {...args} />
}`,...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var L,R,D;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "small",
    children: "Nous avons pour objectif de réaliser des prestations de qualités tout en respectant nos valeurs humaines, éthiques et notre envie de partage."
  },
  render: args => <BodyTextTemplate {...args} />
}`,...(D=(R=l.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var B,C,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "label",
    children: "Nous avons pour objectif de réaliser des prestations de qualités tout en respectant nos valeurs humaines, éthiques et notre envie de partage."
  },
  render: args => <BodyTextTemplate {...args} />
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var _,z,P;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: "alert",
    children: "This is an alert message."
  },
  render: args => <FeedbackTextTemplate {...args} />
}`,...(P=(z=p.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var A,O,V;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "warning",
    children: "This is a warning message."
  },
  render: args => <FeedbackTextTemplate {...args} />
}`,...(V=(O=m.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var W,$,M;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: "info",
    children: "This is an informational message."
  },
  render: args => <FeedbackTextTemplate {...args} />
}`,...(M=($=g.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: "validation",
    children: "This is a validation message."
  },
  render: args => <FeedbackTextTemplate {...args} />
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const pe=["HeadingLevel1","HeadingLevel2","HeadingLevel3","ParagraphText","SmallText","LabelText","AlertFeedback","WarningFeedback","InfoFeedback","ValidationFeedback"];export{p as AlertFeedback,t as HeadingLevel1,o as HeadingLevel2,i as HeadingLevel3,g as InfoFeedback,c as LabelText,d as ParagraphText,l as SmallText,u as ValidationFeedback,m as WarningFeedback,pe as __namedExportsOrder,ce as default};
