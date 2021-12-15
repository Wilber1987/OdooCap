// import { TestInst, val  } from "./Module1.mjs";
// console.log("module", val);
// console.log(TestInst);

// class MyComponent extends HTMLElement {
//     constructor(){
//         super();
//         this.innerHTML = "<h2>Web Component</h2>";
//         const btn = document.createElement("button");
//         btn.innerText = "Test";
//         btn.onclick = async ()=>{
//             //alert("click");
//             const v = await fetch("../js_structure/api/sales" ,{
//                 method: "POST",
//                 headers: {
//                     'Content-Type': "application/json"
//                 },
//                 body: JSON.stringify({name: "request"})
//             });
//             const jresponse = await v.json();
//             console.log(jresponse);
//             fetch("../js_structure/api/SaveSales" ,{
//                 method: "POST",
//                 headers: {
//                     'Content-Type': "application/json"
//                 },
//                 body: JSON.stringify({name: "request"})
//             });
//         }
//         this.append(btn);
//     }
// }
// customElements.define('w-component', MyComponent);
// window.onload = ()=>{
//     MainJsModule.innerHTML = "<h2>Test Main</h2>";
//     MainJsModule.append(new MyComponent());
// }