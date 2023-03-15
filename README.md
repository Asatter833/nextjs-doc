# Next.js Documentation

table of contents

- [Server Side Rendering](#server-side-rendering)
  - [**How SSR works**](#--how-ssr-works--)
  - [**Benefits of SSR**](#--benefits-of-ssr--)
  - [**Drawbacks of SSR**](#--drawbacks-of-ssr--)
  - [**Implementing SSR**](#--implementing-ssr--)
- [SSR: Server-Side Rendering With Next.js](#ssr--server-side-rendering-with-nextjs)
- [\***\*SSG: Static-site generation\*\***](#----ssg--static-site-generation----)
- [Dynamic routing in Next.js](#dynamic-routing-in-nextjs)
- [\***\*CSR: Client-side data fetching\*\***](#----csr--client-side-data-fetching----)
- [**References:**](#--references---)

# Server Side Rendering

Server-side rendering (SSR) is a technique used in web development where a web page is rendered on the server and then sent to the client as HTML, rather than the client-side rendering approach of sending a blank HTML page and then populating it with data using JavaScript. This approach has several benefits, including improved performance, better search engine optimization, and improved user experience.

In this documentation, we will cover the basics of SSR, including how it works, its benefits and drawbacks, and how to implement it in your web application.

## **How SSR works**

In a typical client-side rendering (CSR) approach, the web page is loaded and then JavaScript code is executed to fetch data and render the page. This process can result in slow load times and a poor user experience, especially on slower devices or connections.

In contrast, SSR involves rendering the web page on the server before sending it to the client. This means that the client receives a fully rendered HTML page that can be displayed immediately, without the need to wait for JavaScript to execute.

To implement SSR, you need a server that can render HTML pages. This can be done using a variety of tools and frameworks, including Node.js and React. Once the server has rendered the page, it sends it to the client, which can then display it immediately.

## **Benefits of SSR**

SSR offers several benefits over client-side rendering, including:

- **Improved performance**
  Since the page is fully rendered on the server, the client receives a complete HTML page that can be displayed immediately. This results in faster load times and a better user experience.
- **Better search engine optimization (SEO)**
  Search engines can crawl and index SSR pages more easily than CSR pages since the HTML is fully rendered and available on the server. This can result in improved search rankings and more traffic to your website.
- **Improved user experience**
  Since the page is displayed immediately, users don't have to wait for JavaScript to execute before they can see the content. This can result in a better user experience, especially on slower devices or connections.

## **Drawbacks of SSR**

While SSR has several benefits, it also has some drawbacks, including:

- **Increased server load**
  Since the server is responsible for rendering the HTML pages, SSR can result in increased server load, especially if you have a lot of traffic or complex pages.
- **Limited interactivity**
  Since the HTML is fully rendered on the server, there is limited interactivity on the client side. This means that features like real-time updates and complex animations may take more work to implement.
- **More complex setup**
  Implementing SSR can be more complex than client-side rendering since you need to set up a server that can render HTML pages.

## **Implementing SSR**

To implement SSR in your web application, you will need to choose a server-side rendering framework or tool. Some popular options include:

- Next.js: A React-based framework for server-side rendering and static site generation.
- Nuxt.js: A Vue-based framework for server-side rendering and static site generation.
- Angular Universal: A framework for server-side rendering in Angular applications.
- Express.js: A Node.js-based framework that can be used for server-side rendering.

Once you have chosen a framework or tool, you will need to configure your server to render HTML pages. This typically involves setting up routes, defining templates, and configuring data fetching.

# SSR: Server-Side Rendering With Next.js

Next.js is a popular framework for server-side rendering in React applications. It provides a simple and flexible way to implement server-side rendering in your web application. Here are the steps you can follow to do server-side rendering in Next.js:

1. **Set up a Next.js project:** You can create a new Next.js project using the **`create-next-app`** command or by setting up a new project manually. Once you have set up the project, you can start implementing server-side rendering.
2. **Create a page:** In Next.js, a page is a React component that is rendered on the server and sent to the client. To create a page, you can create a new file in the **`page's`** directory and export a React component from it. For example, you can create a file named **`index.js`** in the **`pages`** directory and export a simple React component that displays some content:

   ```jsx
   function HomePage() {
     return <div>Hello, World!</div>;
   }
   export default HomePage;
   ```

3. **Use the `getServerSideProps` function:** Next.js provides a special function called **`getServerSideProps**` that allows you to fetch data from an external API or database and pass it as props to your page component. This function runs on the server and is executed before the page is rendered. You can use this function to fetch data and pass it as props to your page component. For example, you can modify the **`index.js`\*\* file to fetch some data from an external API and pass it as props:

   ```jsx
   export async function getServerSideProps() {
     // Fetch data from an external API
     const res = await fetch(
       "[https://api.example.com/data](https://api.example.com/data)"
     );
     const data = await res.json();

     // Pass the data as props
     return {
       props: {
         data,
       },
     };
   }

   function HomePage({ data }) {
     return <div>{JSON.stringify(data)}</div>;
   }

   export default HomePage;
   ```

4. **Run the project:** To run the Next.js project with server-side rendering, you can use the **`npm run dev`** command. This will start a development server that renders the pages on the server and sends them to the client.
5. **Test the project:** You can open a web browser and navigate to **`http://localhost:3000`** to test the project. You should see the content of the page rendered on the server and sent to the client.

# \***\*SSG: Static-site generation\*\***

If you export a function called `getStaticProps` (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by `getStaticProps.`

```jsx
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
```

You can also regenerate the page with **`revalidate`** in Next.js.

```jsx
export async function getStaticProps(context) {
  const res = await fetch(
    "[https://api.example.com/data](https://api.example.com/data)"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 60, // regenerate the page every 60 seconds
  };
}
```

In the example above, **`getStaticProps`** fetches data from an external API and returns it as props. The **`revalidate`** option specifies how often Next.js should regenerate the page, in this case, every 60 seconds.

You can use **`getStaticProps`** with any page in your Next.js application, as long as the page is statically optimized. This means that the page doesn't rely on dynamic data or user-specific data. Static optimization can result in faster page loads and improved SEO performance.

Here are some key features of **`getStaticProps`**:

- **`getStaticProps`** is called at build time, not at request time, which means that the data is fetched and the page is pre-rendered before the user requests the page.
- **`getStaticProps`** can be used with any page in your Next.js application, including dynamic routes and nested routes.
- **`getStaticProps`** can fetch data from any data source, including APIs, databases, and local files.
- **`getStaticProps`** supports incremental static regeneration, which means that Next.js can regenerate the page when the data changes or after a certain amount of time has passed.

Here's an example of how to use **`getStaticProps`** with a dynamic route:

```jsx
export async function getStaticProps(context) {
	const { params } = context
	const res = await fetch(https://api.example.com/data/${params.id})
	const data = await res.json()

		return {
			props: {
				data
			},
			revalidate: 60 // regenerate the page every 60 seconds
		}
}

export async function getStaticPaths() {
	const res = await fetch('[https://api.example.com/data](https://api.example.com/data)')
	const data = await res.json()
	const paths = data.map(item => ({
		params: { id: [item.id](http://item.id/) }
	}))

	return {
		paths,
			fallback: false
	}
}
```

In this example, **`getStaticProps`** fetches data for a dynamic route based on the **`id`** parameter in the URL. The **`getStaticPaths`** function specifies the possible values for the **`id`** parameter, based on the data fetched from the API.

Here are some related topics:

- **`getStaticPaths`**: This method allows you to specify the dynamic routes that your application will use. You can use it with **`getStaticProps`** to pre-render pages for all possible values of a dynamic parameter.
- **`fallback`**: This option for **`getStaticPaths`** specifies what to do if a page that hasn't been pre-rendered is requested. If **`fallback`** is set to **`true`**, Next.js will generate the page on-the-fly. If **`fallback`** is set to **`false`**, Next.js will return a 404 error for pages that haven't been pre-rendered.
- **`revalidate`**: This option for **`getStaticProps`** specifies how often Next.js should regenerate the page. If the data changes frequently, you can set a lower value for **`revalidate`** to ensure that the page is always up-to-date.
- **`getServerSideProps`**: This method allows you to fetch data at the request time, which means that the data is fetched every time the page is requested. This is useful for pages that rely on user-specific data or dynamic data that changes frequently. Here's an example:

```jsx
export async function getServerSideProps(context) {
	const { params, req, res } = context
	const cookies = req.headers.cookie
	const res = await fetch(https://api.example.com/data/${params.id}, {
		headers: { cookie: cookies }
	})
	const data = await res.json()
	return {
		props: {
			data
		}
	}
}
```

In the example above, **`getServerSideProps`** fetches data for a dynamic route based on the **`id`** parameter in the URL. The **`req`** object contains information about the incoming request, including the cookies. The **`fetch`** method includes the cookies in the headers so that the API can authenticate the user.

`**getInitialProps**`: This method was used in earlier versions of Next.js, but has been deprecated in favor of **`getServerSideProps`** and **`getStaticProps`**. If you're upgrading an existing application, you may need to update your code to use the new methods.

**`Next.js data fetching`**: Next.js provides several options for data fetching, depending on your use case:

- **`getStaticProps`** is used for pre-rendering pages at build time, with data that doesn't change frequently.
- **`getServerSideProps`** is used for fetching data at request time, with data that changes frequently or is user-specific.
- **`useSWR`** is a client-side data fetching library that can be used with Next.js. It provides a simple API for fetching and caching data and can be used with either **`getStaticProps`** or **`getServerSideProps`**.

**`Incremental Static Regeneration (ISR)`**: This is a feature of Next.js that allows you to update pre-rendered pages at runtime, without rebuilding the entire page. If you set a **`revalidate`** value in **`getStaticProps`**, Next.js will regenerate the page when the data changes or after a certain amount of time has passed. This can improve the user experience by providing up-to-date data without requiring a full page reload.

# Dynamic routing in Next.js

\***\*getStaticPaths\*\*** method is used to generate static paths for dynamic routes. When you have pages with dynamic routes, like **`/users/[id]`**, Next.js needs to know which paths to pre-render at build time. You can use **`getStaticPaths`** to specify a list of paths to pre-render.

Here's an example:

```jsx
export async function getStaticPaths() {
	const res = await fetch('[https://api.example.com/users](https://api.example.com/users)')
	const users = await res.json()

	const paths = users.map(user => ({ params: { id: [user.id](http://user.id/) } }))

	return {
		paths,
		fallback: false
	}
}
```

In this example, **`getStaticPaths`** fetches a list of users from an API and generates a list of paths based on their IDs. The **`paths`** array is an array of objects with **`params`** keys, where each **`params`** object contains the dynamic route parameter. In this case, the dynamic route parameter is **`id`**, so each **`params`** object contains an **`id`** key with the user's ID as the value.

The **`fallback`** value determines what happens when a user requests a page that isn't pre-rendered. If **`fallback`** is **`false`**, Next.js will return a 404 error. If **`fallback`** is **`true`**, Next.js will generate the page on the fly and cache it for future requests.

- **`Fallback behavior`**: When **`fallback`** is **`true`**, there are three possible fallback modes:
  - **`blocking`**: This mode is the default. When a user requests a page that isn't pre-rendered, Next.js will generate the page on the fly and cache it for future requests. While the page is being generated, the user will see a loading spinner. Once the page is generated, the user will see the updated content.
  - **`true`**: This mode is similar to **`blocking`**, but the user will immediately see a fallback page with placeholder content while the page is being generated. Once the page is generated, the user will see the updated content.
  - **`false`**: This mode returns a 404 error when a user requests a page that isn't pre-rendered.
- **`When to use getStaticPaths`**: You should use **`getStaticPaths`** when you have dynamic routes with a finite set of possible values, like blog posts or product pages. If your dynamic routes have an infinite set of possible values, like user profiles or search results, you should use **`getServerSideProps`** instead.

# \***\*CSR: Client-side data fetching\*\***

Next.js provides several methods for fetching data on the client-side, including:

- **`useEffect`**: You can use the **`useEffect`** hook to fetch data when a component is mounted or updated. Here's an example:

```jsx
import { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/my-data");
      const data = await res.json();
      setData(data);
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>{data}</div>;
}
```

In this example, **`useEffect`** fetches data from an API when the component is mounted, using the **`fetch`** function. The **`useState`** hook is used to store the data in the component's state. The **`if (!data)`** condition displays a loading spinner until the data is loaded.

- **`SWR`**: Next.js also provides a data fetching library called **`SWR`**. **`SWR`** is a popular library for client-side data fetching, developed by the team at Vercel (the company behind Next.js). You can install **`SWR`** with **`npm`** or **`yarn`**:

```bash
npm install swr
or
yarn add swr
```

Here's an example of how to use **`SWR`**:

```jsx
import useSWR from "swr";
function MyComponent() {
  const { data, error } = useSWR("/api/my-data");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>{data}</div>;
}
```

In this example, **`useSWR`** fetches data from an API and returns an object with **`data`** and **`error`** properties. If there is an error, it is displayed in the **`Error`** component. If the data hasn't loaded yet, the **`Loading`** component is displayed. Otherwise, the data is displayed in the **`div`** element.

- **`fetch`**: Finally, you can also use the **`fetch`** function directly to fetch data on the client-side:

```jsx
async function fetchData() {
  const res = await fetch("/api/my-data");
  const data = await res.json();
  return data;
}

function MyComponent() {
  const [data, setData] = useState(null);

  async function handleClick() {
    const newData = await fetchData();
    setData(newData);
  }

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      {data && <div>{data}</div>}
    </div>
  );
}
```

In this example, **`fetchData`** fetches data from an API using the **`fetch`** function. The **`handleClick`** function is called when the button is clicked, and it updates the component's state with the new data.

# **References:**

<aside>
➡️ ****[SSR: Server-side rendering**** Learn more about server-side rendering in Next.js with getServerSideProps.](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

</aside>

<aside>
➡️ ****[SSG: Static-site generation**** Learn more about static site generation in Next.js with getStaticProps.](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)

</aside>

<aside>
➡️ ****[Dynamic routing**** Learn more about dynamic routing in Next.js with getStaticPaths.](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)

</aside>

<aside>
➡️ ****[CSR: Client-side rendering**** Learn more about client-side rendering in Next.js with SWR.](https://nextjs.org/docs/basic-features/data-fetching/client-side)

</aside>

**More help from:**

<aside>
➡️ [**Tam11a**](https://github.com/tam11a)

</aside>

<aside>
➡️ [**Abdullah Al Noman**](https://github.com/tam11a)

</aside>

<aside>
➡️ [**ChatGPT**](https://chat.openai.com/chat)

</aside>
