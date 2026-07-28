import { Show, SignInButton, useAuth, UserButton } from "@clerk/react";
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../lib/api";
import { Link } from "react-router";

import {
  LogInIcon,
  PackageIcon,
  SettingsIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  StoreIcon,
} from "lucide-react";
import { useCart } from "../store/cart";

const Navbar = () => {
  const { getToken, isSignedIn } = useAuth();

  const { data: meData } = useQuery({
    queryKey: ["me"],
    queryFn: () => apiFetch("/api/me", { getToken }),
    enabled: isSignedIn,
  });

  const role = meData?.user;
  console.log(role);

  const cartCount = useCart((s) =>
    s.items.reduce((n, line) => n + line.quantity, 0),
  );

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 shadow-sm backdrop-blur-md">
      <div className="navbar mx-auto min-h-14 max-w-7xl px-4 py-2.5 md:px-6 md:py-3">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost sm:gap-2 gap-0 px-1.5 font-mono text-lg font-semibold uppercase tracking-wide md:text-xl">
            <span className="flex size-10 items-center justify-center rounded-full bg-blue-700 p-1 text-blue-700">
              <StoreIcon className="size-7 text-white" aria-hidden />
            </span>
            <span className="leading-none">Neistesen</span>
          </Link>
        </div>

        <nav className="flex items-center gap-0 md:gap-1.5">
          <Link to="/" className="btn btn-ghost gap-2 font-medium">
            <ShoppingBagIcon className="size-6 opacity-90" aria-hidden />
            <span className="hidden sm:inline">Shop</span>
          </Link>

          <Show when={"signed-in"}>
            <Link to="/orders" className="btn btn-ghost gap-2 font-medium">
              <PackageIcon className="size-6 opacity-90" aria-hidden />
              <span className="hidden sm:inline">Orders</span>
            </Link>

            {role === "admin" ? (
              <Link
                to="/admin"
                className="btn btn-ghost gap-2 font-medium text-blue-700">
                <SettingsIcon className="size-6" aria-hidden />
                <span className="hidden sm:inline">Admin</span>
              </Link>
            ) : null}
          </Show>

          <Link
            to="/cart"
            className="btn btn-ghost gap-2 font-medium indicator"
            aria-label={cartCount > 0 ? `Cart, ${cartCount} items` : "Cart"}>
            {cartCount > 0 ? (
              <span className="indicator-item badge badge-sm bg-blue-700 min-w-2 px-1.5 font-sans text-xs tabular-nums">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            ) : null}
            <ShoppingCartIcon className="size-6 opacity-90" aria-hidden />
            <span className="hidden sm:inline">Cart</span>
          </Link>

          <Show when={"signed-out"}>
            <SignInButton mode="modal">
              <button
                type="button"
                className="btn bg-blue-700 btn-sm gap-1.5 px-3 shadow-md rounded-md">
                <LogInIcon className="size-4 drop-shadow-sm " aria-hidden />
                Sign in
              </button>
            </SignInButton>
          </Show>

          <Show when={"signed-in"}>
            <div className="flex items-center gap-2 border-l border-base-300 pl-3">
              <UserButton
                appearance={{
                  elements: { avatarBox: "h-10 w-10 ring-2 ring-base-300" },
                }}
              />
              {role === "support" || role === "admin" ? (
                <span className="badge bg-blue-700 badge-sm hidden capitalize md:inline-flex">
                  {role}
                </span>
              ) : null}
            </div>
          </Show>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
