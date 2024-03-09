import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Container, DropdownMenu, NavItem, NavLink } from "reactstrap";
import { Data } from "../../Data/HeaderData";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Logout = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    localStorage.removeItem("Uid");
    navigate("/");
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light theme-nav fixed-top ${isScrolled ? "darkHeader" : ""}`}>
      <Container>
        <NavLink className="navbar-brand" href={"#home"}>
          <img src="../assets/images/logo.png" alt="logo" />
        </NavLink>
        <Button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse default-nav" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" id="mymenu">
            {Data.map((item, i) => {
              return (
                <li key={i} className={`${item.classLi} nav-item`}>
                  {location === "/layout" ? (
                    <HashLink smooth to={`#${item.path}`} className={`${item.classLink} nav-link`}>
                      {item.title}
                    </HashLink>
                  ) : (
                    <HashLink className={`${item.classLink} nav-link`} to={`/layout#${item.path}`}>
                      {item.title}
                    </HashLink>
                  )}

                  {item.Submenu && (
                    <DropdownMenu>
                      {item.Submenu.map((sub, j) => {
                        return (
                          <NavItem key={j}>
                            <Link className={`nav-link`} to={`${sub.path}`} state={sub.title}>
                              {sub.title}
                            </Link>
                          </NavItem>
                        );
                      })}
                    </DropdownMenu>
                  )}
                </li>
              );
            })}
            <li className="nav-item" onClick={Logout}>
              <Link to={"#javascript"} className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Header;






















// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Button, Container, DropdownMenu, NavItem, NavLink } from "reactstrap";
// import { Data } from "../../Data/HeaderData";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation().pathname;

//   console.log(location);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = document.documentElement.scrollTop;
//       setIsScrolled(scrollTop > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const Logout = (e: React.MouseEvent<HTMLLIElement>) => {
//     e.preventDefault();
//     localStorage.removeItem("Uid");
//     navigate("/");
//   };

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-light theme-nav fixed-top ${isScrolled ? "darkHeader" : ""}`}>
//       <Container>
//         <NavLink className="navbar-brand" href={"#home"}>
//           <img src="../assets/images/logo.png" alt="logo" />
//         </NavLink>
//         <Button className="navbar-toggler" type="button">
//           <span className="navbar-toggler-icon"></span>
//         </Button>
//         <div className="collapse navbar-collapse default-nav" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto" id="mymenu">
//             {Data.map((item, i) => {
//               return (
//                 <li key={i} className={`${item.classLi} nav-item`}>

//                   {location === `/layout` ? (
//                     <NavLink className={`${item.classLink}`} href={`/layout#${item.title}`}>
//                       {item.title}
//                     </NavLink>
//                   ) : (
//                     <Link className={`${item.classLink} nav-link`} to={`/layout#${item.title}`}>
//                       {item.title}
//                     </Link>
//                   )}

//                   {item.Submenu && (
//                     <DropdownMenu>
//                       {item.Submenu.map((sub, j) => {
//                         return (
//                           <NavItem key={j}>
//                             <Link className={`nav-link`} to={`${sub.path}`} state={sub.title}>
//                               {sub.title}
//                             </Link>
//                           </NavItem>
//                         );
//                       })}
//                     </DropdownMenu>
//                   )}
//                 </li>
//               );
//             })}
//             <li className="nav-item" onClick={Logout}>
//               <Link to={"#javascript"} className="nav-link">
//                 Logout
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </Container>
//     </nav>
//   );
// };

// export default Header;