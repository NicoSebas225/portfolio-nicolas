function Button({ children, href, variant = "primary", download = false }) {
  return (
    <a
      className={`btn btn-${variant}`}
      href={href}
      download={download}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default Button;