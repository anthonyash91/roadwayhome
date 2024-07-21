export default function Button({ children, version, btnFunction }) {
  return (
    <button className={`${version}`} onClick={btnFunction}>
      {children}
    </button>
  );
}
