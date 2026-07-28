export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconClass: string;
}

interface Props {
  aboutTitle: string;
  aboutText: string;
  links: FooterLink[];
  socials: SocialLink[];
  copyright: string;
}

export const FooterComponent = ({
  aboutTitle,
  aboutText,
  links,
  socials,
  copyright,
}: Props) => {
  return (
    <footer className="bg-[#333] px-3 py-4 md:px-16 lg:px-28">
      {/* about me */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h2 className="mb-3 text-lg font-medium text-gray-400">
            {aboutTitle}
          </h2>
          <p className="text-gray-300">{aboutText}</p>
        </div>

        {/* links */}
        <div className="text-center">
          <h2 className="mb-3 text-lg font-medium text-gray-400">Links</h2>
          <ul className="space-y-1">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* socials */}
        <div className="text-center">
          <h2 className="mb-3 text-lg font-medium text-gray-400">Socials</h2>
          <ul className="mt-6 flex justify-center gap-6">
            {socials.map(({ label, href, iconClass }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <i
                    className={`${iconClass} text-xl text-gray-400 transition-colors duration-300 hover:text-yellow-400`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t p-4 pt-6 text-center font-bold text-gray-500 select-none">
        {copyright}
      </div>
    </footer>
  );
};
