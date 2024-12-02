import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as x}from"./index-RYns6xqu.js";import{P as s}from"./index-rNTiGNI1.js";import{H as g}from"./Heading-COAMRs3O.js";import{C as b}from"./Card-CHyyz7K-.js";import{B as c}from"./Button-DHO3nljc.js";import{X as v}from"./XMarkIcon-BhRzsqV0.js";import{B as C}from"./BodyText-BD-ZsMBn.js";import"./ArrowLongRightIcon-BOrmqkSf.js";const i=({title:o,onClose:n,children:t=null,...l})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-30 bg-stone-900 bg-opacity-80",...l,onClick:n}),e.jsx("div",{className:"absolute z-40 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl left-1/2 top-1/2",children:e.jsx("div",{className:"relative flex items-center justify-center w-full overflow-auto",children:e.jsxs(b,{children:[e.jsxs("div",{className:"w-full h-full",children:[e.jsx(g,{level:2,children:o}),t]}),e.jsx(c,{variant:"icon",onClick:n,className:"absolute top-2 right-2 group",children:e.jsx(v,{className:"transition duration-300 ease-out text-slate-700 w-7 h-7 group-hover:text-slate-600","aria-hidden":"true"})})]})})})]});i.propTypes={title:s.string.isRequired,content:s.oneOfType([s.string,s.node]).isRequired,onClose:s.func,children:s.node};i.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},title:{description:"",type:{name:"string"},required:!0},content:{description:"",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0},onClose:{description:"",type:{name:"func"},required:!1}}};const k={title:"Design System/Organisms/Modals",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the modal"},content:{control:"text",description:"Content of the modal"},onClose:{action:"onClose",description:"Function to handle the close button action"}}},a=()=>{const[o,n]=x.useState(!0),t=()=>{n(!1)};return e.jsxs("div",{children:[!o&&e.jsx("button",{onClick:()=>n(!0),className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300",children:"Open Modal"}),o&&e.jsx(i,{title:"Basic Modal",onClose:t,children:e.jsx("div",{className:"pt-4",children:e.jsx(C,{variant:"paragraph",children:"This is a basic modal with a close button."})})})]})},r=()=>{const[o,n]=x.useState(!0),t=()=>{n(!1)},l=()=>{console.log("Confirmed!"),n(!1)};return e.jsxs("div",{children:[!o&&e.jsx("button",{onClick:()=>n(!0),className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300",children:"Open Confirmation Modal"}),o&&e.jsx(i,{title:"Confirm Action",onClose:t,children:e.jsxs("div",{className:"pt-4",children:[e.jsx(C,{variant:"paragraph",children:"Are you sure you want to proceed with this action?"}),e.jsxs("div",{className:"flex mt-12 space-x-4",children:[e.jsx(c,{label:"Cancel",onClick:t,variant:"secondary"}),e.jsx(c,{label:"Confirm",onClick:l,variant:"primary"})]})]})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"ConfirmationModal"};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  return <div>
      {!isOpen && <button onClick={() => setIsOpen(true)} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Open Modal
        </button>}

      {isOpen && <Modal title="Basic Modal" onClose={handleClose}>
          <div className="pt-4">
            <BodyText variant="paragraph">
              This is a basic modal with a close button.
            </BodyText>
          </div>
        </Modal>}
    </div>;
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,f,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleConfirm = () => {
    console.log("Confirmed!");
    setIsOpen(false);
  };
  return <div>
      {!isOpen && <button onClick={() => setIsOpen(true)} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Open Confirmation Modal
        </button>}

      {isOpen && <Modal title="Confirm Action" onClose={handleClose}>
          <div className="pt-4">
            <BodyText variant="paragraph">
              Are you sure you want to proceed with this action?
            </BodyText>
            <div className="flex mt-12 space-x-4">
              <Button label="Cancel" onClick={handleClose} variant="secondary" />
              <Button label="Confirm" onClick={handleConfirm} variant="primary" />
            </div>
          </div>
        </Modal>}
    </div>;
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const _=["Default","ConfirmationModal"];export{r as ConfirmationModal,a as Default,_ as __namedExportsOrder,k as default};
