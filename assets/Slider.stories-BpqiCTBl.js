import{j as d}from"./jsx-runtime-DEdD30eg.js";import{P as e}from"./index-rNTiGNI1.js";import"./index-RYns6xqu.js";const a=({min:n,max:u,step:o,value:m,className:i,...p})=>d.jsx("input",{type:"range",min:n,max:u,step:o,value:m,className:`w-full ${i}`,...p});a.propTypes={min:e.number,max:e.number,step:e.number,value:e.number,className:e.string};a.defaultProps={min:0,max:100,step:1,value:50,className:""};a.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{min:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},max:{defaultValue:{value:"100",computed:!1},description:"",type:{name:"number"},required:!1},step:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},value:{defaultValue:{value:"50",computed:!1},description:"",type:{name:"number"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};const y={title:"Design System/Components/Forms/Slider",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{min:{control:"number",description:"Minimum value of the slider"},max:{control:"number",description:"Maximum value of the slider"},step:{control:"number",description:"Step size for the slider"},value:{control:"number",description:"Current value of the slider"}}},r={args:{min:null,max:null,step:null,value:null}};var s,l,t;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    min: null,
    max: null,
    step: null,
    value: null
  }
}`,...(t=(l=r.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const g=["RangeSlider"];export{r as RangeSlider,g as __namedExportsOrder,y as default};
