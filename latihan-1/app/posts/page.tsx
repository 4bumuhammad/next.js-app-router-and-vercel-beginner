import CardList from "../components/CardList";
import ViewUserButton from "../components/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Iposts{
  userId: number,
  id: number,
  title: string,
  body: string
}

const Posts = async() => {
  // const response = await fetch(base_url,{cache: "no-store"})
  const response = await fetch(base_url,{next: {revalidate:10}})

  const posts: Iposts[] = await response.json();
  return(
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      {posts.map((post)=>{

        return(

          <CardList key={post.id}>
            <p>userId : {post.userId}</p>
            <p>id : {post.id}</p>
            <p>title : {post.title}</p>
            <p>body : {post.body}</p>
            <br />
            <p>Hello</p><br />
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i>
            <br />
            <br />
            <ViewUserButton userId={post.userId}/>
            <br />
            <br />
            <hr/>
          </CardList>

        )

      })}

    </>
  );
};

export default Posts