// console.log(MainJsModule);
// let a = [
//     { name: "a1", href: "#"},
//     { name: "a2", href: "#"},
//     { name: "a3", href: "#"},
// ];

// let b = [
//     { name: "b1", href: "#"},
//     { name: "b2", href: "#"},
//     { name: "b3", href: "#"},
// ];
// class WComponent  extends HTMLElement {
//     constructor(Dataset = []) { 
//         super();
//         this.id = "WComponent1";
//         this.Dataset = Dataset;
//     }
//     connectedCallback() { this.DrawComponent(); }
//     DrawComponent = async () => { 
//         this.innerHTML = "";
//         this.Dataset.forEach(element => {
//             let Link = document.createElement("a");
//             Link.href = element.href;
//             Link.innerText = element.name;
//             this.append(Link);
//         });
//      }
// }
// customElements.define('w-component', WComponent);
// MainJsModule.append(new WComponent(a));