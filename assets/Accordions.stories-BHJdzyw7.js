import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as t}from"./index-RYns6xqu.js";import{P as d}from"./index-rNTiGNI1.js";import{c as _}from"./clsx-B-dksMZM.js";import{H as B}from"./Heading-COAMRs3O.js";import{C as S}from"./ChevronDownIcon-BAd-ihAh.js";import{B as l}from"./BodyText-BD-ZsMBn.js";function o({title:s,children:p,initialOpen:j}){const[a,T]=t.useState(j),[v,b]=t.useState(0),c=t.useRef(null);t.useEffect(()=>{c.current&&b(c.current.scrollHeight)},[p]);const C=()=>{T(N=>!N)};return e.jsxs("div",{className:"px-6 py-2 border border-stone-300 rounded-xl",children:[e.jsx("div",{children:e.jsxs("button",{onClick:C,className:"flex items-center justify-between w-full py-4 focus:outline-none","aria-expanded":a,"aria-controls":"accordion-content",children:[e.jsx(B,{level:3,children:s}),e.jsx("span",{className:_("transform duration-300 ease-out transition-transform",{"rotate-180":a}),children:e.jsx(S,{className:"w-6 h-6 text-stone-700"})})]})}),e.jsx("div",{id:"accordion-content",ref:c,style:{maxHeight:a?`${v}px`:"0px"},className:"overflow-hidden duration-300 ease-out transition-max-height",children:e.jsx("div",{className:"text-stone-700",children:p})})]})}o.propTypes={title:d.string.isRequired,children:d.node.isRequired,initialOpen:d.bool};o.defaultProps={initialOpen:!1};o.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{initialOpen:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},title:{description:"",type:{name:"string"},required:!0},children:{description:"",type:{name:"node"},required:!0}}};const P={title:"Design System/Organisms/Accordions",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the accordion"},children:{control:"text",description:"Content of the accordion"},initialOpen:{control:"boolean",description:"Whether the accordion is initially open"}}},n=()=>{const[s]=t.useState(!1);return e.jsx(o,{title:"Default Accordion",initialOpen:s,children:e.jsx(l,{variant:"paragraph",children:"This is the content of the default accordion."})})},r=()=>e.jsx(o,{title:"Open Accordion",initialOpen:!0,children:e.jsx(l,{variant:"paragraph",children:"This accordion is open by default."})}),i=()=>e.jsx(o,{title:"Closed Accordion",initialOpen:!1,children:e.jsx(l,{variant:"paragraph",children:"This accordion is closed by default."})});n.__docgenInfo={description:"",methods:[],displayName:"DefaultAccordion"};r.__docgenInfo={description:"",methods:[],displayName:"OpenAccordion"};i.__docgenInfo={description:"",methods:[],displayName:"ClosedAccordion"};var u,m,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isOpen] = useState(false);
  return <Accordion title="Default Accordion" initialOpen={isOpen}>
      <BodyText variant="paragraph">This is the content of the default accordion.</BodyText>
    </Accordion>;
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,x,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Accordion title="Open Accordion" initialOpen={true}>
      <BodyText variant="paragraph">This accordion is open by default.</BodyText>
    </Accordion>;
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,A,O;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Accordion title="Closed Accordion" initialOpen={false}>
      <BodyText variant="paragraph">This accordion is closed by default.</BodyText>
    </Accordion>;
}`,...(O=(A=i.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const k=["DefaultAccordion","OpenAccordion","ClosedAccordion"];export{i as ClosedAccordion,n as DefaultAccordion,r as OpenAccordion,k as __namedExportsOrder,P as default};
