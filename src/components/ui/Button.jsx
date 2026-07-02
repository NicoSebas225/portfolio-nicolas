function Button({ children, href, variant = "primary", download = false }) {
  const isExternal =
    href?.startsWith("http") || href?.toLowerCase().endsWith(".pdf");

  return (
    <a
      className={`btn btn-${variant}`}
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default Button;