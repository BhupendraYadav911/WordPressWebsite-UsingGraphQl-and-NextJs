// import { revalidateTag } from 'next/cache';
// import { API_URL } from "../components/GraphQl/homeQuery";
// import "../css/style.css";
// import "../css/theme.css";


// export const metadata= {
//     title: "Dynamic Data- Next Js"
// }

// let result1;

// export const revalidate= 10;


// export default async function Page(){
//     const __query = `
//     query GetContact{
//       page(id: "/contact/", idType: URI) {
//         id
//         content
//         date
//         guid
//         link
//         slug
//       }
//     }
//     `;
//     // const method = {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({
//     //         query: __query,
//     //     }),
//     //   }

//     revalidateTag('result');
//       const result= await fetch(API_URL,{
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         }, body: JSON.stringify({
//           query: __query,
//         }),
//              },{
//               next: { tags: ['result'] }
//              })
//       // .then(response => response.json())
//       // .then(json => console.log(json))

     

//       const data = await result.json();  

//     // const response1 = await fetch("https://jsonplaceholder.typicode.com/posts" , {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({
//     //         query: __query,
//     //     }),
//     //   } , {
//     //     // next : {revalidate:10}
//     // })

//     // .then(response => response.json())
//     // .then(json => console.log(json))

// // const data = await response.json();

//     result1 = data.data.page.content;
//     // const pages = data.page
//     // console.log(result1,"kikiiiasdasdasd");
//     function createMarkup(c) {
//       return { __html: c };
//     }

//     return (
//       <>  
//       {/* {result1} */}
//       {<div dangerouslySetInnerHTML={createMarkup(result1)}></div>}
//       {/* {
//         pages.map((item)=>{
//           return(

//             <h1>{item.content}</h1>
//           )

//         })
//       } */}
               
//       </>
//         )
//     }
