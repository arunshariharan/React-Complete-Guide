// Reusable tabs component that can be used anywhere within the code
export default function Tabs({button, children}) {
  return (
    <>
      <menu>
        {button}
      </menu>
      {children}
    </>
  );
}