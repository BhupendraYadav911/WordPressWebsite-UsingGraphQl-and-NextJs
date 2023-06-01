import "../css/style.css";
import "../css/theme.css";

import { API_URL } from "@/app/components/GraphQl/homeQuery";
const page = async() => {
  let result;

  const option = async () => {
    const __query = `
    query GetAbout {
      page(id: "/solutions/", idType: URI) {
        id
        content
        date
        guid
        link
        slug
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

    result = data.data.page.content;
    // console.log(result);
  };
  function createMarkup(c) {
    return { __html: c };
  }
  await option();
  return (
    <section>
      {<div dangerouslySetInnerHTML={createMarkup(result)}></div>}
    </section>
  );
}

export default page