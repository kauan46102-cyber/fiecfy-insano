function SidebarItem({ label, iconClass }) {
  return (
    <a
      href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
      className="flex items-center gap-3 hover:text-white transition-colors"
    >
      <span className="text-lg">{iconClass}</span>
      <span>{label}</span>
    </a>
  );
}

export default SidebarItem;
