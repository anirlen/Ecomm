import{r as s,j as e}from"./index-33abfec6.js";import{s as r,A as v,N as f}from"./Navbar-98f9e5b1.js";const D=r.div`
  max-width: 400px;
  margin: 0 auto;
`,y=r.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,n=r.label`
  display: flex;
  flex-direction: column;
`,o=r.input`
  padding: 8px;
  margin-top: 4px;
`,C=r.button`
  background-color: #C0392B;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7B241C;
  }
`,P=()=>{const[i,l]=s.useState(""),[c,u]=s.useState(""),[d,x]=s.useState(""),[p,m]=s.useState(""),[h,g]=s.useState(null),S=t=>{t.preventDefault();const a={name:i,Description:c,Size:d,Price:p,Photo:h},b=[...JSON.parse(localStorage.getItem("SellItemData"))||[],a];localStorage.setItem("SellItemData",JSON.stringify(b)),l(""),u(""),x(""),m(""),g(null),alert("Your request has been submitted! It will be posted after being reviewed.")},j=t=>{const a=t.target.files[0];g(a)};return e.jsx(D,{children:e.jsxs(y,{onSubmit:S,children:[e.jsxs(n,{children:["Name:",e.jsx(o,{type:"text",value:i,onChange:t=>l(t.target.value),required:!0})]}),e.jsxs(n,{children:["Description:",e.jsx(o,{type:"text",value:c,onChange:t=>u(t.target.value),required:!0})]}),e.jsxs(n,{children:["Size:",e.jsx(o,{type:"text",value:d,onChange:t=>x(t.target.value),required:!0})]}),e.jsxs(n,{children:["Price:",e.jsx(o,{type:"number",value:p,onChange:t=>m(t.target.value),required:!0})]}),e.jsxs(n,{children:["Photo:",e.jsx(o,{type:"file",onChange:j,accept:"image/*"})]}),e.jsx(C,{type:"submit",children:"Post"})]})})},w=()=>e.jsxs("div",{children:[e.jsx(v,{}),e.jsx(f,{}),e.jsx(P,{})]});export{w as default};
