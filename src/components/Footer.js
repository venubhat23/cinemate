import { Link } from "react-router-dom"

export const Footer = () => {
  return (


    <footer className="bg-white shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="https://flowbite.com/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="https://www.instagram.com/venu_bhat_273/" target="_blank" className="hover:underline me-4 md:me-6">Instagram</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/venugopal-bhat-84675819a/" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</Link>
          </li>
          <li>
            <Link to="mailto:venubha147@gmail.com" target="_blank" className="hover:underline me-4 md:me-6">Gmail</Link>
          </li>
          <li>
            <Link to="https://github.com/venubhat23/" target="_blank" className="hover:underline">Github</Link>
          </li>
        </ul>
      </div>
    </footer>

  )
}
