import CardList from "../components/CardList";
import ViewUserButton from "../components/ViewUserButton";

const Posts = () => {
  return(
    <>
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      <CardList>
        <p>Hello</p><br />
        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i>
        <br />
        <br />
        <ViewUserButton/>
      </CardList>
    </>
  );
};

export default Posts