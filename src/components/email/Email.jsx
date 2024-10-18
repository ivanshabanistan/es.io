import copyImage from "../../assets/images/copyEmail.svg";
// import burgerImage from "../../assets/images/burgerMenu.svg";
const Email = () => {
  function copyClipboard() {
    const text = "sokolovski.ea@gmail.com";
    navigator.clipboard.writeText(text);
    document
      .querySelector(".email__copied")
      .classList.add("email__copied--active");
  }
  return (
    <div onClick={copyClipboard} className="email">
      <div className="email__text">
        sokolovski.ea@gmail.com{" "}
        <img src={copyImage} alt="copy email" className="email__img" />
      </div>
      <span className="email__copied">copied</span>

      <button className="email__btn">Email</button>
      {/* <div className="burger">
        <img src={burgerImage} alt="burger menu" className="burger-line" />
      </div> */}
    </div>
  );
};

export default Email;
