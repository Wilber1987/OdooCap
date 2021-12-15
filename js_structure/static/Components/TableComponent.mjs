import { WRender } from "../AppCore/Tools.mjs";
import { ModalComponent } from "./ModalComponent.mjs";
class TableComponent extends HTMLElement {
    constructor(Config) {
        super();
        //this.attachShadow({ mode: 'open' });
        this.Dataset = Config.Dataset;
        this.EditFunction = Config.EditFunction;
        WRender.SetStyle(this, {
            display: "block",
            minHeight: "400px",
            margin: "10px",
            boxShadow: "0 0 2px 0 rgb(0,0,0/50%)",
            border: "solid 1px #888"
        });
        this.Table = WRender.Create({
            tagName: "table", 
            className: "o_list_table table table-sm table-hover table-striped o_list_table_ungrouped",
            children: [
                { tagName: "thead" },
                { tagName: "tbody" }
            ]
        });
        this.append(this.Table);
    }
    connectedCallback() { this.DraTableComponent(); }
    DraTableComponent = async () => {
        this.Table.querySelector("thead").innerHTML = "";
        this.Table.querySelector("tbody").innerHTML = "";
        for (const key in this.Dataset[0]) {
            this.Table.querySelector("thead").append(WRender.Create({
                tagName: "th", innerText: key
            }));
        }
        this.Dataset.forEach(data => {
            const row = WRender.Create({ tagName: "tr" });
            for (const key in data) {
                row.append(WRender.Create({ tagName: "td", innerText: data[key] }));
            }
            row.append(WRender.Create({ tagName: "td", children: [
                {tagName: "button", innerText: "Edit", onclick: async ()=>{
                    console.log(data);
                    this.appendChild(new ModalComponent(data, async(obj)=>{
                        row.innerHTML = "";
                        for (const prop in obj) {
                            row.append(WRender.Create({ tagName: "td", innerText: obj[prop] }));
                        }
                        if (this.EditFunction) {
                            this.EditFunction(obj);
                        }
                    }));
                }}
            ]}));
            this.Table.querySelector("tbody").append(row);
        });
    }
}
customElements.define('w-table', TableComponent);
export { TableComponent }