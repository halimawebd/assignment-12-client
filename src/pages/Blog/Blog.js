// import React from "react";

// const Blog = () => {
    
//   return (
//     <div>
//         <h3 className="text-5xl text-green-600 text-center my-3">Welcome to FAQ Page</h3>
//       <div
//         tabIndex={0}
//         className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
//       >
//         <div className="collapse-title text-xl font-medium">
//           What are the different ways to manage a state in a React application?
//         </div>
//         <div className="collapse-content">
//           <p>
//           When we talk about state in our applications, it’s important to be 
//           clear about what types of state actually matter.Local (UI) state – 
//           Local state is data we manage in one or another component.
//           Local state is most often managed in React using the useState hook.A common example
//            of global state is authenticated user state. 
//           If a user is logged into our app, it is necessary to get and change their data throughout
//            our application.Server state – Data
//            that comes from an external server that must be integrated with our UI state.
//           Fortunately there are tools such as SWR and React Query that make managing server state 
//           much easier.URL state is often missing as a category of state, but it is an important one.
//           In many cases, a lot of major parts of our application rely upon accessing URL state. 
//           Try to imagine building a blog without being able to fetch a post based off of its slug or 
//           id that is located in the URL!
//           </p>
//         </div>
//       </div>

//       <div
//         tabIndex={0}
//         className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
//       >
//         <div className="collapse-title text-xl font-medium">
//           How does prototypical inheritance work?
//         </div>
//         <div className="collapse-content">
//           <p>
//           In JavaScript, an object can inherit properties of another object. The object from where 
//           the properties are inherited is called the prototype. In short, objects can inherit 
//           properties from other objects — the prototypes.
//           When we try to access a property of an object, the property is not only searched in the 
//           object itself. It's also searched in the prototype of the object, in the prototype of the
//            prototype, and so on – until a property is found that matches the name or the end of the
//             prototype chain is reached
//           </p>
//         </div>
//       </div>

//       <div
//         tabIndex={0}
//         className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
//       >
//         <div className="collapse-title text-xl font-medium">
//           What is a unit test? Why should we write unit tests?
//         </div>
//         <div className="collapse-content">
//           <p>
//           Unit testing involves only those characteristics that are vital to the performance of the unit under test.
//           Unit tests should be performed frequently, and can be done manually or can be automated.
//           Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete. 
//           Let's look at some more practical aspects of unit testing.
//           </p>
//         </div>
//       </div>
//       <div
//         tabIndex={0}
//         className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
//       >
//         <div className="collapse-title text-xl font-medium">
//           React vs. Angular vs. Vue?
//         </div>
//         <div className="collapse-content">
//           <p>
//           This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.
//           Just a couple of years ago, developers were mainly debating whether they should be using Angular vs
//            React for their projects. But over the course of the last couple of years, we’ve seen a growth 
//            of interest in a third player called Vue.js.
//           Since Vue is the new kid on the block, not many businesses have ventured into Vue JS
//            development yet, and thus, real-time assessment of the pros and cons of Vue is not very
//             well-documented. However, what we do know is that Vue has the best of both worlds- two-way 
//             data binding like Angular and flexibility in code like React. Because of this, Vue is 
//             rising steadily through the ranks and has a massive market in Asia- Alibaba and Xiaomi 
//             are the big names using Vue JS.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;
