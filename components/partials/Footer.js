import MyLinks from "./MyLinks";

const Footer = () => {
  return (
    <footer className="container d-flex justify-content-between py-4 mt-4 px-0">
      <span>Moustapha Amouchal &copy; {new Date().getFullYear()}</span>
      <MyLinks color="rgb(19, 20, 21)" />
    </footer>
  );
};

export default Footer;
