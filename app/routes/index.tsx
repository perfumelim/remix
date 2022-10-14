import { Link } from "@remix-run/react";
import Sidebar from "~/shared/components/sidebar";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-customGrey-100">
      <Sidebar />
      <div className="sm:flex sm:max-w-none sm:justify-center">
        {user ? (
          <Link
            to="/notes"
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
          >
            View Notes for {user.email}
          </Link>
        ) : (
          <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
            <Link
              to="/join"
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-customGreen-600  shadow-sm hover:bg-customGreen-600 hover:text-whiteish sm:px-8"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="flex items-center justify-center rounded-md bg-customGreen-400 px-4 py-3 font-medium text-white hover:bg-customGreen-600"
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
