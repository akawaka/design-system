import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{P as l}from"./index-rNTiGNI1.js";const s=({title:a,content:o,onClose:n,className:i,...u})=>e.jsx("div",{className:`fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center text-black ${i}`,...u,children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-lg w-full",children:[e.jsx("h2",{className:"text-xl font-semibold",children:a}),e.jsx("p",{className:"mt-4",children:o}),e.jsx("button",{className:"mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300",onClick:n,children:"Close"})]})});s.propTypes={title:l.string.isRequired,content:l.string.isRequired,onClose:l.func.isRequired,className:l.string};s.defaultProps={className:""};s.__docgenInfo={description:"",methods:[],displayName:"BasicModal",props:{className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!0},content:{description:"",type:{name:"string"},required:!0},onClose:{description:"",type:{name:"func"},required:!0}}};const y={title:"Design System/Components/Modals/BasicModal",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the modal"},content:{control:"text",description:"Content of the modal"},onClose:{action:"onClose",description:"Function to handle the close button action"}}},t=a=>{const[o,n]=p.useState(!0),i=()=>{n(!1)};return e.jsxs("div",{children:[!o&&e.jsx("button",{onClick:()=>n(!0),className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300",children:"Open Modal"}),o&&e.jsx(s,{...a,onClose:i})]})};t.args={title:"Basic Modal",content:"This is a basic modal with a close button."};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var r,c,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
      {isOpen && <BasicModal {...args} onClose={handleClose} />}
    </div>;
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,y as default};
