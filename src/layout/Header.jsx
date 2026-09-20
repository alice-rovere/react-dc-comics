import logo from "../assets/img/dc-logo.png";
const headerLink = [
  { name: "Characters", url: "/", id: 1, isActive: false },
  { name: "Comics", url: "/", id: 2, isActive: true },
  { name: "Movies", url: "/", id: 3, isActive: false },
  { name: "TV", url: "/", id: 4, isActive: false },
  { name: "Games", url: "/", id: 5, isActive: false },
  { name: "Collectibles", url: "/", id: 6, isActive: false },
  { name: "Videos", url: "/", id: 7, isActive: false },
  { name: "Fans", url: "/", id: 8, isActive: false },
  { name: "News", url: "/", id: 9, isActive: false },
  { name: "Shop", url: "/", id: 10, isActive: false },
];
export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-white text-gray-800">
      <img src={logo} alt="DC-Logo" />
      <nav>
        <ul className="flex items-center space-x-4">
          {headerLink.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                className={link.isActive ? "text-blue-500" : ""}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
