import{j as e,r as b,R as v}from"./index-f10efd5d.js";import{s as t,c as S,A as k,N as $}from"./Navbar-41b4cc42.js";import{S as L,T as r,C as a,B as l,s as C,j as E,a as M,b as z,c as T,d as W,e as A}from"./shirt3-c2b4a07b.js";import{C as I,O as B,G as q}from"./GLTFLoader-b3004ea2.js";const R=t.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
  
`,N=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; 
  width: 80%; 
  max-width: 1200px;


  @media (max-width: 768px) {
    width: 100%;
  }
`,c=t(z)`
  width: 250px;
  background-color: teal;
`,D=t.h1`
  font-size: 70px;
  text-align: center;
  margin-bottom: 20px; 
  
  

  @media (max-width: 768px) {
    font-size: 40px;
  }
`,d=t.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  background-color: white;
  transition: transform 0.3s ease; 
  
  &:hover {
    transform: scale(1.2); 
  }
`,h=t(T)`
  width: auto;
`,O=()=>e.jsxs(R,{children:[e.jsx(D,{children:"New Arrivals"}),e.jsxs(N,{children:[e.jsxs(c,{sx:{maxWidth:300},children:[e.jsx(d,{src:L,alt:"Sweater"}),e.jsxs(h,{children:[e.jsx(r,{gutterBottom:!0,variant:"h5",component:"div",children:"Sweater"}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"Warm and stylish sweater, perfect for cold winter days. Made from high-quality materials for maximum comfort."})]}),e.jsx(a,{children:e.jsx(l,{size:"small",children:"Learn More"})})]}),e.jsxs(c,{sx:{maxWidth:300},children:[e.jsx(d,{src:C,alt:"Sweater"}),e.jsxs(h,{children:[e.jsx(r,{gutterBottom:!0,variant:"h5",component:"div",children:"Shirt"}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"Warm and stylish sweater, perfect for cold winter days. Made from high-quality materials for maximum comfort."})]}),e.jsx(a,{children:e.jsx(l,{size:"small",children:"Learn More"})})]}),e.jsxs(c,{sx:{maxWidth:300},children:[e.jsx(d,{src:E,alt:"Sweater"}),e.jsxs(h,{children:[e.jsx(r,{gutterBottom:!0,variant:"h5",component:"div",children:"Jeans"}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"Warm and stylish sweater, perfect for cold winter days. Made from high-quality materials for maximum comfort."})]}),e.jsx(a,{children:e.jsx(l,{size:"small",children:"Learn More"})})]}),e.jsxs(c,{sx:{maxWidth:300},children:[e.jsx(d,{src:M,alt:"Sweater"}),e.jsxs(h,{children:[e.jsx(r,{gutterBottom:!0,variant:"h5",component:"div",children:"Jeans"}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"Warm and stylish sweater, perfect for cold winter days. Made from high-quality materials for maximum comfort."})]}),e.jsx(a,{children:e.jsx(l,{size:"small",children:"Learn More"})})]})]})]}),U=S(e.jsx("path",{d:"m14 7-5 5 5 5V7z"}),"ArrowLeft"),G=S(e.jsx("path",{d:"m10 17 5-5-5-5v10z"}),"ArrowRight"),J=t.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
`,F=t.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${i=>i.direction==="left"&&"10px"};
  right: ${i=>i.direction==="right"&&"10px"};
  cursor: pointer;
  margin: auto;
  opacity: 0.7;
  z-index: 2;
`,X=t.div`
  height: 100%;
  display: flex;
  transform: translateX(0vw);
`,p=t.div`
  height: 100%;
  flex: 1;
`,g=t.div`
  flex: 1;
  padding: 50px;
`,u=t.h1`
  font-size: 70px;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`,f=t.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`,j=t.button`
  padding: 10px 20px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 16px;
  }
`,w=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 5px;
`,y=t.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${i=>i.bg};
`,H=()=>{const[i,n]=b.useState(0),o=m=>{n(m==="left"?s=>s===0?2:s-1:s=>s===2?0:s+1)};return e.jsxs(J,{children:[e.jsx(F,{direction:"left",onClick:()=>o("left"),children:e.jsx(U,{})}),e.jsxs(X,{style:{transform:`translateX(-${i*100}vw)`},children:[e.jsxs(y,{bg:"#FFFFFF",children:[e.jsx(p,{children:e.jsx(w,{src:C,alt:"Slide 1"})}),e.jsxs(g,{children:[e.jsx(u,{children:"Winter Sale"}),e.jsx(f,{children:"Excepteur dolor commodo ipsum sit dolore sint cupidatat quis in id sunt voluptate dolor pariatur."}),e.jsx(j,{children:"See More"})]})]}),e.jsxs(y,{bg:"#FFFFFF",children:[e.jsx(p,{children:e.jsx(w,{src:W,alt:"Slide 2"})}),e.jsxs(g,{children:[e.jsx(u,{children:"Spring Sale"}),e.jsx(f,{children:"BAmet ipsum commodo ullamco aute nulla Lorem nulla dolore veniam aute Lorem ad."}),e.jsx(j,{children:"See More"})]})]}),e.jsxs(y,{bg:"#FFFFFF",children:[e.jsx(p,{children:e.jsx(w,{src:A,alt:"Slide 3"})}),e.jsxs(g,{children:[e.jsx(u,{children:"Fall Sale"}),e.jsx(f,{children:"Cupidatat qui anim laborum fugiat.."}),e.jsx(j,{children:"See More"})]})]})]}),e.jsx(F,{direction:"right",onClick:()=>o("right"),children:e.jsx(G,{})})]})},K=()=>{const i=new q,[n,o]=v.useState(null);return v.useEffect(()=>{i.load("/jordan/scene.gltf",m=>{o(m.scene)})},[]),n?e.jsx("primitive",{object:n,scale:[-.23,.23,-.26],"position-y":-.35,"position-x":0,"rotation-y":0}):null},P=()=>e.jsxs(I,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:1,far:100,position:[-5,3,6]},children:[e.jsx("hemisphereLight",{intensity:2,groundColor:"black"}),e.jsx("spotLight",{position:[900,900,200],angle:.12,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize":1024}),e.jsx("pointLight",{intensity:1}),e.jsxs(b.Suspense,{fallback:null,children:[e.jsx(B,{autoRotate:!0,enableZoom:!1}),e.jsx(K,{})]})]}),V=t.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  background-color: white;
  position: relative;
  overflow: hidden;
`;class Z extends v.Component{constructor(n){super(n),this.state={hasError:!1}}static getDerivedStateFromError(n){return{hasError:!0}}render(){return this.state.hasError?e.jsx("h1",{children:"Something went wrong."}):this.props.children}}const _=t.h1`
  padding: 20px;
  font-size: 70px;
  color: red;
  text-align: center;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    font-size: 40px;
  }
`,Q=()=>e.jsxs(V,{children:[e.jsx(_,{children:" Only 3 Left For $120"}),e.jsx(Z,{children:e.jsx(P,{})})]}),Y=t.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
`,ee=t.h1`
  font-size: 70px;
  text-align: center;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    font-size: 40px;
  }
`,te=t(z)`
  width: auto;
  background-color: #FFFFFF;
`,x=t.div`
  background-color: #FFFFFF;
  font-size: 20px;
  justify-content: center;
  text-align: center;
  display: flex;
`,ie=()=>e.jsxs(Y,{children:[e.jsx(ee,{children:" Contact With Us"}),e.jsxs(te,{children:[e.jsx(x,{children:"Email: team28IU@gmail.com"}),e.jsx(x,{children:"Phone Number: (+1) 213 3214 1234"}),e.jsx(x,{children:"Fax: (123)-456-7890"}),e.jsx(x,{children:"Location: 1234 NW Somewhere Lane, St. SKidada, MO 65584-5678"})]})]}),ne="/ecom_react/assets/waste-6c9150d8.png",re=t.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
`,se=t.h1`
  font-size: 70px;
  color: black;
  text-align: center;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    font-size: 40px;
  }
`,oe=t.div`
  flex: 1;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,ae=t.div`
    max-width: 600px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 2px;
    margin-right: 50px;

    @media (max-width: 768px) {
      margin: 20px 0;
    }
`,le=t.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,ce=t.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  padding: 5px;
`,de=()=>e.jsxs(re,{children:[e.jsx(se,{children:" Environment Matters"}),e.jsxs(oe,{children:[e.jsx(ae,{children:"Throwing away clothes might seem inconsequential, but the alarming statistics surrounding textile waste highlight the urgency of this issue. Each year, the world generates a staggering 92 million tons of textile waste, with China and the US being the leading contributors, producing 20 million and 17 million tons respectively. Shockingly, clothing and textiles constitute at least 7% of the total waste occupying our global landfills. The rapid fashion industry churns out between 80 and 100 billion new clothing items annually, adding to this alarming waste stream. Disturbingly, a staggering 87% of the materials used in clothing production inevitably end up in incinerators or landfills. What's even more concerning is the fact that only 20% of discarded textiles are collected, and a mere 1% of clothes are recycled into new garments. This grave reality emphasizes the crucial importance of rethinking our approach to clothing disposal. Each piece thrown away contributes to environmental degradation, urging us to consider sustainable alternatives, promote recycling, and raise awareness about the pressing need for change."}),e.jsx(le,{children:e.jsx(ce,{src:ne,alt:"waste 1"})})]})]}),ge=()=>e.jsxs("div",{children:[e.jsx(k,{}),e.jsx($,{}),e.jsx(H,{}),e.jsx(de,{}),e.jsx(O,{}),e.jsx(Q,{}),e.jsx(ie,{})]});export{ge as default};
