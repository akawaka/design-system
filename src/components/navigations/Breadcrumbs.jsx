import PropTypes from "prop-types";
import Link from "../links/Link";

export const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center p-4 space-x-2 text-stone-700 bg-stone-50">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <Link
            href={item.href}
            label={<span className="text-sm font-bold">{item.label}</span>}
          />
          {index < items.length - 1 && <span className="mx-2 text-stone-500">/</span>}
        </div>
      ))}
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumbs;
