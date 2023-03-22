const Header = ({showLinks}) => {

  return(
    <header className="flex w-full p-5 justify-between items-center bg-yellow-400">
      <h2 className="text-2xl font-bold">My app</h2>
      {
        showLinks && <ul className="flex gap-5 items-center">
          <li>Home</li>
          <li>Contact</li>
        </ul>
      }
    </header>
  );
}

export default Header;
