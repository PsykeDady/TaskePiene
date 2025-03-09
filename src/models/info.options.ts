export interface InfoOption {
    name:string
    link:string
}


const infoOptions: InfoOption[] = [
    { name: "Home", link: "/" },
    { name: "DB", link: "/db" },
    { name: "Genera Report", link: "" },
    { name: "Export Dati", link: "" },
    { name: "Import Dati", link: "" },
    { name: "Info", link: "/info" }
];

export default infoOptions;