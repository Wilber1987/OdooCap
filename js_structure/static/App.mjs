import { TableComponent } from "./Components/TableComponent.mjs";
const CargarDatos = async () => {
    const v = await fetch("../js_structure/api", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ param: 0 })
    });
    const jresponse = await v.json();
    return jresponse.result;
}
const Update = async (Data) => {
    const v = await fetch("../js_structure/api/update", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            id: Data["Id"],
            name: Data["Name"], 
            value: Data["Value 1"],
            value2: Data["Value 2"], 
            description: Data["Description"]
        })
    });
    const jresponse = await v.json();
    return jresponse.result;
}
window.onload = async () => {
    const Dataset = await CargarDatos();
    MainJsModule.append(new TableComponent({
        Dataset: Dataset.Data,
        EditFunction: Update
    }));
}