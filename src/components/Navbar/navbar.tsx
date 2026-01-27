import NavbarLinks from "../../constants/navLinks";
import { useAuthStore } from "../../store";
import { Link, useNavigate } from "react-router";
import Logo from "/assets/images/linux.svg";
import { Button } from "../Button";

export const NavbarComponent = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container flex items-center justify-between py-4">
      {/* logo section */}
      <div className="flex items-center gap-1">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-15" />
        </Link>
        <p className="text-xl font-bold transition duration-300 select-none hover:text-[#fcc61d]">
          Notifier
        </p>
      </div>

      {/* link section */}
      <div className="hidden md:block">
        <ul className="flex gap-3 xl:gap-15">
          {NavbarLinks.map((link) => (
            <li key={link.id}>
              {link.external ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer uppercase hover:text-[#fcc61d] xl:text-base"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className="cursor-pointer uppercase hover:text-[#fcc61d] xl:text-base"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}

          {isAuthenticated && (
            <li>
              <Link
                to="/dashboard"
                className="uppercase hover:text-[#fcc61d] xl:text-base"
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* button section */}
      <div className="flex items-center gap-3">
        {!isAuthenticated ? (
          <Link to="/login" className="primary-btn cursor-pointer text-lg">
            Log In
          </Link>
        ) : (
          <Button
            onClick={handleLogout}
            type="button"
            label="Log out"
            className="primary-btn cursor-pointer text-lg"
          />
        )}
      </div>
    </div>
  );
};
