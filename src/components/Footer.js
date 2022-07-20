export default function Footer(props) {
  return (
    <footer className={props.darkMode ? "dark" : ""}>
      <small>
        Project by{" "}
        <a href="https://scrimba.com/" target="_blank" rel="noreferrer">
          Scrimba
        </a>
        .<br /> Coded with ❤️ by{" "}
        <a href="https://github.com/xdelmo" target="_blank" rel="noreferrer">
          Emanuele Del Monte
        </a>
        .
      </small>
    </footer>
  );
}
