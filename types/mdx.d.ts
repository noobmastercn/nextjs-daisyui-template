// // types/mdx.d.ts
// declare module "*.mdx" {
//   let MDXComponent: (props) => JSX.Element;
//   export default MDXComponent;
// }
declare module "*.mdx" {
  import { FunctionComponent } from "react";
  let MDXComponent: FunctionComponent<any>;
  export default MDXComponent;
}