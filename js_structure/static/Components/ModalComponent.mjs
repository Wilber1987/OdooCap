import { WRender } from "../AppCore/Tools.mjs";
class ModalComponent extends HTMLElement {
    constructor(Obj, Func) {
        super();
        //this.attachShadow({ mode: 'open' });
        this.Obj = Obj;
        this.Func = Func;
        this.ModalContainer = WRender.Create({
            tagName: "div", className: "ContainerForm"
        });
        this.style.backgroundColor ="rgb(0,0,0/50%)";
        WRender.SetStyle(this, {
            opacity: 0,
            backgroundColor: "rgb(0,0,0/50%)",
            width: "100%",
            position: "fixed",
            top: "0px",
            left: "0px",
            bottom: "0px",
            transition: "all 1s",
            zIndex: 200000,
            overflowY: "auto",
            paddingBottom: "50px"
        });
        this.append(WRender.Create({tagName: "style", innerHTML: `
        .ContainerForm {
            display: block;
            overflow: hidden;
            margin: auto;
            margin-top: 50px;
            background-color: #fff;
            width: 70%;
            max-height: 800px;
            overflow-y: auto;
            padding: 20px;
            min-height: 200px;
            border-radius: 5px;
            position: relative;
        }
        `}));
        this.append(this.ModalContainer);
    }
    connectedCallback() {
        this.style.opacity = 1;
        this.DraModalComponent(); 
    }
    DraModalComponent = async () => {
        this.ModalContainer.innerHTML = "";
        for (const key in this.Obj) {
            this.ModalContainer.append(WRender.Create({
                tagName: "div", children: [{
                    tagName: "input",
                    placeholder: key,
                    value: this.Obj[key],
                    onchange: (ev) => {
                        this.Obj[key] = ev.target.value;
                    }
                }]
            }));
        }
        this.ModalContainer.append(WRender.Create({
            tagName: "div", children: [{
                tagName: "button",
                innerText: "Guardar",
                onclick: (ev) => {
                   this.Func(this.Obj);
                   this.style.opacity = 1;
                   setTimeout(() => {
                     this.parentNode.removeChild(this)
                   }, 1000);                   
                }
            }]
        }));
    }
}
customElements.define('w-modal', ModalComponent);
export { ModalComponent }