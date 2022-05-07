import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{borderBottom:match && '2px solid rgb(221, 223, 224)'}}
          to={to}
          {...props}
        >
          {children}
        </Link>
        
      </div>
    );
  }
export default CustomLink;