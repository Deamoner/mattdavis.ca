(this["webpackJsonpmattdavis.ca"]=this["webpackJsonpmattdavis.ca"]||[]).push([[0],{51:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var n=c(40),s=c(7),r=(c(51),c(10)),a=c(8),i=c(0),o=c(13),j=c(62),b=c(63),l=c(61),h=c(64),u=c(9);function O(){return Object(u.jsxs)(o.a,{concurrent:!0,gl:{alpha:!1},pixelRatio:[1,1.5],camera:{position:[0,3,100],fov:15},children:[Object(u.jsx)("color",{attach:"background",args:["black"]}),Object(u.jsx)("fog",{attach:"fog",args:["black",15,20]}),Object(u.jsxs)(s.Suspense,{fallback:null,children:[Object(u.jsxs)("group",{position:[0,-1,0],children:[Object(u.jsx)(d,{rotation:[0,Math.PI-.4,0],position:[-1.2,0,.6],scale:[.26,.26,.26]}),Object(u.jsx)(m,{position:[0,1.3,-2]}),Object(u.jsx)(p,{})]}),Object(u.jsx)("ambientLight",{intensity:.5}),Object(u.jsx)("spotLight",{position:[0,10,0],intensity:.3}),Object(u.jsx)("directionalLight",{position:[-50,0,-40],intensity:.7}),Object(u.jsx)(x,{})]})]})}function d(e){var t=Object(j.a)("/carla-draco.glb").scene;return Object(u.jsx)("primitive",Object(a.a)({object:t},e))}function m(e){var t=Object(s.useState)((function(){return Object.assign(document.createElement("video"),{src:"/drei.mp4",crossOrigin:"Anonymous",loop:!0,muted:!0})})),c=Object(r.a)(t,1)[0];return Object(s.useEffect)((function(){c.play()}),[c]),Object(u.jsxs)(b.a,Object(a.a)(Object(a.a)({font:"/Inter-Bold.woff",fontSize:1,letterSpacing:-.06},e),{},{children:["Matt Davis",Object(u.jsx)("meshBasicMaterial",{toneMapped:!1,children:Object(u.jsx)("videoTexture",{attach:"map",args:[c],encoding:i.sRGBEncoding})})]}))}function p(){var e=Object(l.a)(["/SurfaceImperfections003_1K_var1.jpg","/SurfaceImperfections003_1K_Normal.jpg"]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(u.jsx)(h.a,{blur:[400,100],resolution:512,args:[10,10],mirror:.5,mixBlur:6,mixStrength:1.5,rotation:[-Math.PI/2,0,Math.PI/2],children:function(e,t){return Object(u.jsx)(e,Object(a.a)({color:"#a0a0a0",metalness:.4,roughnessMap:c,normalMap:n,normalScale:[2,2]},t))}})}function x(){var e=Object(s.useState)((function(){return new i.Vector3})),t=Object(r.a)(e,1)[0];return Object(o.c)((function(e){e.camera.position.lerp(t.set(5*e.mouse.x,3+2*e.mouse.y,14),.05),e.camera.lookAt(0,0,0)}))}var f=c(36),g=c.n(f);function v(e){var t=e.date,c=e.year;e.link1,e.link2;return t=g()().format("MM-DD HH:mm:ss"),c=g()().year(),Object(u.jsxs)("div",{className:"pmndrs-menu",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:Object(u.jsx)("b",{children:"Matthew Davis"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/tech-lead-matt-davis/",children:"Linkedin"}),Object(u.jsx)("a",{href:"https://github.com/Deamoner",children:"Github"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:t}),Object(u.jsx)("span",{children:c})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{children:"Developer looking to push the boundaries of technology and brings humans together"})]}),Object(u.jsx)("div",{style:{width:"100%"}}),Object(u.jsxs)("div",{children:["Projects:",Object(u.jsx)("a",{href:"https://aro.work/",children:"ARO.Work"}),Object(u.jsx)("a",{href:"https://github.com/Deamoner/humanism",children:"Humanism - Modern Ideals"})]})]})}function k(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(v,{})})}Object(n.createRoot)(document.querySelector("#root")).render(Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)(k,{})]}))}},[[58,1,2]]]);
//# sourceMappingURL=main.dd2fdc4c.chunk.js.map