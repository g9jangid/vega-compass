import Link from "next/link";

export default function MenuDropDown({ submenu, parentpath }) {
  const midIndex = submenu.length > 8 ? Math.ceil(submenu.length / 2) : 8; // Split at the middle
  const firstColumn = submenu.slice(0, midIndex);
  const secondColumn = submenu.slice(midIndex);

  return (
    <div
      className={`grid ${
        secondColumn?.length ? "lg:grid-cols-2" : "grid-cols-1"
      } gap-2 lg:gap-4`}
    >
      {/* First Column */}
      <div className="flex flex-col space-y-2">
        {firstColumn.map((link, index) => (
          <Link
            href={parentpath + link.path}
            key={link.id}
            className="inline-block py-1 my-1 text-sm lg:text-base text-textDark self-start border-b-2 border-transparent hover:text-red hover:border-b-2 hover:border-red"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Second Column */}
      {secondColumn?.length ? (
        <div className="flex flex-col space-y-2">
          {secondColumn.map((link, index) => (
            <Link
              href={parentpath + link.path}
              key={link.id}
              className="inline-block  py-1 my-1 text-sm lg:text-base text-textDark self-start border-b-2 border-transparent hover:text-red hover:border-b-2 hover:border-red"
            >
              {link.title}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
