import "../css/style.css";
import "../css/theme.css";
import { revalidatePath, revalidateTag } from 'next/cache';


import { API_URL } from "@/app/components/GraphQl/homeQuery";
const page = async() => {
  let result;

  const option = async () => {
    const __query = `
    query GetContact{
      page(id: "/contact/", idType: URI) {
        id
        content
        date
        guid
        link
        slug
      }
    }
    `;
    revalidatePath('/contact/');
    revalidateTag('result');


    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: __query,
      }),
    },{ next: { tags: ['result'] } });

    const data = await response.json();

    result = data.data.page.content;
    // console.log(data);
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