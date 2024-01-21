import{j as e,r as a,R as t,L as l}from"./index-33abfec6.js";import{s as n,A as c,N as d}from"./Navbar-98f9e5b1.js";import{C as h,O as x,G as p}from"./GLTFLoader-a2747bba.js";const u=()=>{const s=new p,[r,o]=t.useState(null);return t.useEffect(()=>{s.load("/google/scene.gltf",i=>{o(i.scene)})},[]),r?e.jsx("primitive",{object:r,scale:[-.13,.13,-.13],"position-y":-.35,"position-x":0,"rotation-y":0}):null},m=()=>e.jsxs(h,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:1,far:100,position:[-5,3,6]},children:[e.jsx("hemisphereLight",{intensity:2.19,groundColor:"black"}),e.jsx("spotLight",{position:[900,900,200],angle:.12,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize":1024}),e.jsx("pointLight",{intensity:1}),e.jsxs(a.Suspense,{fallback:null,children:[e.jsx(x,{autoRotate:!0,enableZoom:!0,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e.jsx(u,{})]})]}),g=n.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  background-color: white;
  position: relative;
  overflow: hidden;
`;class j extends t.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0}}render(){return this.state.hasError?e.jsx("h1",{children:"Something went wrong."}):this.props.children}}const f=n.h1`
  padding: 20px;
  font-size: 70px;
  color: black;
  text-align: center;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    font-size: 40px;
  }
`,v=()=>e.jsxs(g,{children:[e.jsx(f,{children:" Sign In Using Google"}),e.jsx(l,{to:"/Home",children:"Press Here"}),e.jsx(j,{children:e.jsx(m,{})})]}),S=()=>e.jsxs("div",{children:[e.jsx(c,{}),e.jsx(d,{}),e.jsx(v,{})]});export{S as default};
