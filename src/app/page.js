import { API_URL } from "@/app/components/GraphQl/homeQuery";
import "../app/css/style.css";
import "../app/css/theme.css";

const page = async() => {
  let result;

  const option = async () => {
    const __query = `
    query GetHome{
        page(id: "/", idType: URI) {
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
    }, { revalidate: 10 });

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