import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const links = [
  { href: "https://www.discord.com", icon: <FaDiscord /> },
  { href: "https://www.twitter.com", icon: <FaTwitter /> },
  { href: "https://www.github.com", icon: <FaGithub /> },
  { href: "https://www.twitch.com", icon: <FaTwitch /> },
  { href: "https://www.linkedin.com", icon: <FaLinkedin /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Zentry 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-300 ease-in-out hover:text-blue-50"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy policy
        </a>
      </div>
    </footer>
  );
};
export default Footer;
