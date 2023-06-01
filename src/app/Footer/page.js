import styles from "../styles/footer.module.css";

import {
  Facebook, 
  Linkedin,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import Link from "next/link";
import { API_URL } from "../components/GraphQl/homeQuery";

const Footer = async () => {
  let result;
  const option = async () => {
    const __query = `
    query GetFOOTER {
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

    result = data.data.menus.nodes[0].menuItems.nodes;
    // console.log(result);

    // uniqueArray = [...new Set(result.map(item => item.title))];
    // console.log(uniqueArray);
  };
  await option();
  return (
    <>
      <footer className={styles["section-footer"]}>
        <div className={styles.container}>
          <div
            className={`${styles.grid} ${styles["footer-grid-four-column"]}`}
          >
            <div className={styles["footer-column-1"]}>
              <div>
                <ul className={styles["footer-li"]}>
                  {result &&
                    result.map((item, index) => (
                      <li id="menu-item-12" key={item.id}>
                        <Link href={item.path}>{item.label}</Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                
              </div>

              <div className={styles["footer-para-column-1"]}>
                <a
                  href="mailto:info@digiprima.com"
                  className={styles["mail-footer"]}
                >
                  +1 (347) 973 9732
                </a>
                <a href="mailto:info@digiprima.com">
                  <b className={styles["mail-footer"]}>info@digiprima.com</b>
                </a>
              </div>
              <div>
                <div>
                  <div className={styles["footer-column-3"]}>
                    <div className={styles["footer-social-icons"]}>
                      <ul className={styles["social-icons-li"]}>
                        <li>
                          <a
                            href="https://www.facebook.com/DigiprimaTech"
                            target="_blank"
                            title="DigiPrima Facebook Oficial Account"
                          >
                            <Youtube />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/DigiprimaTech"
                            target="_blank"
                            title="DigiPrima Facebook Oficial Account"
                          >
                            <Facebook />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/DigiprimaTech"
                            target="_blank"
                            title="DigiPrima Facebook Oficial Account"
                          >
                            <Twitter />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/DigiprimaTech"
                            target="_blank"
                            title="DigiPrima Facebook Oficial Account"
                          >
                            <Linkedin />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/DigiprimaTech"
                            target="_blank"
                            title="DigiPrima Facebook Oficial Account"
                          >
                            <Facebook />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <ul className={styles["footer-li"]}>
                      <li>
                        <a href="#">32nd Ave, Wheat Ridge Denver, USA</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
