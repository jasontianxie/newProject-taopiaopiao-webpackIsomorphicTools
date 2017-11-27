// import default from "*.scss";

declare module '*.scss' {
    const content: any;
    export default content;
}
declare module '*.json' {
    const content:any;
    export default content;
}