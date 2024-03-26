'use client'

// import styles from "./postPage.module.css"

const Posts = () => {
  return(
    <>
      <div className="bg-[tomato]">POSTINGAN PAGE</div>
      <button onClick={() => console.log(`${new Date().toISOString()} -- lihat user`)}>Lihat User</button>
    </>
  );
};

export default Posts