const Footer = ({dark}) => {
    return ( 
        <div className={dark ? "bg-slate-700 p-4 text-center font-medium text-rose-50" : "bg-rose-100 p-4 text-center font-medium text-slate-800"}>
            {new Date().getFullYear()} Googl, Inc
        </div>
     );
}
 
export default Footer;