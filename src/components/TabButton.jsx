export default function TabButton({children,onSelect}) {
    return  <li> <button onClick={onSelect}>{children}</button> </li>;
}
// need lagyan ng word "props" para mag appear yung character, pwededin destructuring . {children}