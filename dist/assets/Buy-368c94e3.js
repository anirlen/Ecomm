import{j as e}from"./index-33abfec6.js";import{s as r,A as l,N as d}from"./Navbar-98f9e5b1.js";import{T as o,C as p,B as m,S as s,j as t,s as h,a as c,d as f,e as u,b as g,c as z}from"./shirt3-67eaa129.js";const x="/ecom/assets/shirt4-f84f7d02.jpg",y="/ecom/assets/shirt5-10b3baac.jpg",j="/ecom/assets/shirt6-9fb62625.jpg",k="/ecom/assets/shirt7-3344c94f.png",v="/ecom/assets/shirt8-2cad9495.jpg",B=r.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
`,w=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; 
  width: 80%; 
  max-width: 1200px;

  @media (max-width: 768px) {
    width: 100%;
  }
`,L=r(g)`
  width: 250px;
  background-color: teal;
`,S=r.h1`
  font-size: 70px;
  text-align: center;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    font-size: 40px;
  }
`,b=r.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  background-color: white;
  transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.2); 
  }
`,C=r(z)`
  width: auto;
`,M=[{id:1,name:"Striped T-Shirt",description:"A comfortable striped t-shirt for a casual look.",image:s,variants:[{color:"Red",size:"S",price:19.99},{color:"Blue",size:"M",price:19.99},{color:"Green",size:"L",price:19.99}]},{id:2,name:"Modern Slim Jeans",description:"Modern slim fit jeans for a trendy appearance.",image:t,variants:[{color:"Black",size:"28",price:34.99},{color:"Blue",size:"30",price:34.99},{color:"Gray",size:"32",price:34.99}]},{id:3,name:"Classic Slim Fit Shirt",description:"Classic slim fit shirt for a timeless style.",image:h,variants:[{color:"Black",size:"S",price:39.99},{color:"Blue",size:"M",price:39.99},{color:"White",size:"L",price:39.99}]},{id:4,name:"Casual Denim Jacket",description:"Casual denim jacket for a relaxed and stylish look.",image:c,variants:[{color:"Blue",size:"M",price:49.99},{color:"Black",size:"L",price:49.99},{color:"Brown",size:"XL",price:49.99}]},{id:5,name:"Cotton V-Neck Sweater",description:"Soft cotton v-neck sweater for a cozy feel.",image:s,variants:[{color:"Gray",size:"M",price:29.99},{color:"Navy",size:"L",price:29.99},{color:"Burgundy",size:"XL",price:29.99}]},{id:6,name:"Stylish Bomber Jacket",description:"Stylish bomber jacket for a modern and edgy look.",image:f,variants:[{color:"Black",size:"S",price:59.99},{color:"Green",size:"M",price:59.99},{color:"Brown",size:"L",price:59.99}]},{id:7,name:"Printed Floral Shirt",description:"Printed floral shirt for a vibrant and playful style.",image:x,variants:[{color:"White",size:"S",price:44.99},{color:"Blue",size:"M",price:44.99},{color:"Pink",size:"L",price:44.99}]},{id:8,name:"Leather Moto Jacket",description:"Leather moto jacket for a cool and rugged appearance.",image:j,variants:[{color:"Black",size:"M",price:79.99},{color:"Brown",size:"L",price:79.99},{color:"Gray",size:"XL",price:79.99}]},{id:9,name:"Vintage Graphic Tee",description:"Vintage graphic tee for a retro and casual look.",image:v,variants:[{color:"Gray",size:"S",price:24.99},{color:"Blue",size:"M",price:24.99},{color:"Red",size:"L",price:24.99}]},{id:10,name:"Classic Bootcut Jeans",description:"Classic bootcut jeans for a timeless and flattering fit.",image:t,variants:[{color:"Blue",size:"28",price:39.99},{color:"Black",size:"30",price:39.99},{color:"Indigo",size:"32",price:39.99}]},{id:11,name:"Quilted Puffer Jacket",description:"Quilted puffer jacket for warmth and style in colder weather.",image:c,variants:[{color:"Black",size:"M",price:69.99},{color:"Navy",size:"L",price:69.99},{color:"Burgundy",size:"XL",price:69.99}]},{id:12,name:"Quilted Puffer Jacket",description:"Vintage graphic tee for a retro and casual look.",image:u,variants:[{color:"Black",size:"M",price:19.99},{color:"Navy",size:"L",price:19.99},{color:"Burgundy",size:"XL",price:19.99}]},{id:13,name:"Quilted Puffer Jacket",description:"Quilted puffer jacket for warmth and style in colder weather.",image:y,variants:[{color:"Black",size:"M",price:19.99},{color:"Navy",size:"L",price:19.99},{color:"Burgundy",size:"XL",price:19.99}]},{id:14,name:"Quilted Puffer Jacket",description:"Printed floral shirt for a vibrant and playful style..",image:k,variants:[{color:"Black",size:"M",price:39.99},{color:"Navy",size:"L",price:29.99},{color:"Burgundy",size:"XL",price:29.99}]}],F=()=>e.jsxs(B,{children:[e.jsx(S,{children:"Buy"}),e.jsx(w,{children:M.map(i=>e.jsxs(L,{sx:{maxWidth:300},children:[e.jsx(b,{src:i.image,alt:i.image}),e.jsxs(C,{children:[e.jsx(o,{gutterBottom:!0,variant:"h5",component:"div",children:i.name}),e.jsx(o,{variant:"body2",color:"text.secondary",children:i.description}),e.jsxs("div",{children:[e.jsx(o,{variant:"subtitle1",color:"text.secondary",children:"Variants:"}),e.jsx("ul",{children:i.variants.map((a,n)=>e.jsxs("li",{children:[a.color,", Size: ",a.size,", Price: $",a.price]},n))})]})]}),e.jsx(p,{children:e.jsx(m,{size:"small",children:"Add To cart"})})]},i.id))})]}),G=()=>e.jsxs("div",{children:[e.jsx(l,{}),e.jsx(d,{}),e.jsx(F,{})]});export{G as default};
