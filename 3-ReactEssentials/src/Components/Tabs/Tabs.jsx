export default function Tabs({ button, children, ButtonsContainer = "menu" }) {
  // An alternate where you get the props in lowerCase
  // const ButtonsContainer = buttonsContainer;
  // The above allows users to pass in a type dynamically and set it as a wrapper
  return (
    <>
      <ButtonsContainer>{button}</ButtonsContainer>
      {children}
    </>
  );
}
