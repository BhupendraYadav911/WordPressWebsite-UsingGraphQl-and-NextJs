import Link from "next/link";
import styles from "../styles/Header.module.css";
import { API_URL } from "../components/GraphQl/homeQuery";
import "../styles/Header.module.css";

const Header = async () => {
  
  let result;
  const option = async () => {
    const __query = `query GetNAV {
      menus {
        nodes {
          slug
          count
          databaseId
          __typename
          id
          name
          menuItems {
            nodes {          
              label
              id
              path          
              uri
              url
            }
          }
        }
      }
    }
    `;
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: __query,
      }),
    });
    const data = await response.json();   
    result = data.data.menus.nodes[1].menuItems.nodes;
    // console.log(result);
    // uniqueArray = [...new Set(result.map(item => item.title))];
    // console.log(uniqueArray);
  };
  await option();
  return (
    <>
     <nav className={styles['main-nav1']}>
  <ul className={styles['main-ul1']}>
   
    {result?.map((item, index) => (
      <li className={styles['main-il1']} key={item.id}>
       
        <Link key={index} href={item.uri} >{item.label}</Link>
       
      </li>
    ))}
  </ul>
</nav> 

      {/* <nav className={styles["main-nav"]}>
       
        <div className={styles.logo}>
          
         
        </div>

        <div
          className={
            showMediaIcons
              ? `${styles["menu-link"]} ${styles["mobile-menu-link"]}`
              : styles["menu-link"]
          }
        >
          <ul className={styles.navLink}>
            <li >
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>Home</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>about</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>services</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>Company</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>Careers</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>Blogs</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>contact us</Link>
            </li>
            
            
          </ul>
        </div>

        
        <div className={styles["social-media"]}>
     

          <div className={styles["hamburger-menu"]}>
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <List />
            
            </a>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
