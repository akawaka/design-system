import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as g}from"./index-RYns6xqu.js";import{P as a}from"./index-rNTiGNI1.js";const o=({message:r,onClose:t,className:s,...i})=>{const p="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center text-black",m="bg-white p-6 rounded-lg shadow-lg max-w-md w-full",l="mt-4 py-2 px-4 rounded focus:outline-none focus:ring-2";return e.jsx("div",{className:`${p} ${s}`,...i,children:e.jsxs("div",{className:m,children:[e.jsx("p",{children:r}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx("button",{className:`${l} bg-green-500 text-white hover:bg-green-600 focus:ring-green-300`,onClick:t,children:"Yes"}),e.jsx("button",{className:`${l} bg-red-500 text-white hover:bg-red-600 focus:ring-red-300`,onClick:t,children:"No"})]})]})})};o.propTypes={message:a.string.isRequired,onClose:a.func.isRequired,className:a.string};o.defaultProps={className:""};o.__docgenInfo={description:"",methods:[],displayName:"ConfirmationDialog",props:{className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},message:{description:"",type:{name:"string"},required:!0},onClose:{description:"",type:{name:"func"},required:!0}}};const C={title:"Design System/Components/Modals/ConfirmationDialog",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{message:{control:"text",description:"Message to display in the dialog"},onConfirm:{action:"onConfirm",description:"Function to handle the confirm action"},onCancel:{action:"onCancel",description:"Function to handle the cancel action"}}},n=r=>{const[t,s]=g.useState(!0),i=()=>{s(!1)};return e.jsxs("div",{children:[!t&&e.jsx("button",{onClick:()=>s(!0),className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300",children:"Open Modal"}),t&&e.jsx(o,{...r,onClose:i})]})};n.args={message:"Are you sure you wan't to delete this ?"};n.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,d,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(true); // State to control modal visibility

  const handleClose = () => {
    setIsOpen(false); // Close the modal
  };
  return <div>
      {/* Button to reopen the modal */}
      {!isOpen && <button onClick={() => setIsOpen(true)} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Open Modal
        </button>}

      {/* Render the modal if open */}
      {isOpen && <ConfirmationDialog {...args} onClose={handleClose} />}
    </div>;
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const j=["Default"];export{n as Default,j as __namedExportsOrder,C as default};
