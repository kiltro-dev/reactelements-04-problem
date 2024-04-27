import React from 'react';
import './style.css';

const saleOpen = {
  heading: 'Get 25% off during our one-time sale',
  description:
    "Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.",
  href: '/one-time-sale',
};

const saleClosed = {
  heading: 'Oops, you just missed out on our big sale!',
  description: 'Now everything you like is back at full price. Sorry!',
};

export default function Callout() {
  const isSaleOpen = false;
  const status = isSaleOpen ? saleOpen : saleClosed;

  return (
    <section className="section">
      <div className="section-wrapper">
        <h2 className="section-heading">{status.heading}</h2>
        <p className="section-description">{status.description}</p>
        <a href={status.href} className="section-link">
          Get access to our one-time sale
        </a>
      </div>
    </section>
  );
}
// export default function Callout() {
//   const isSaleOpen = true;

//   return (
//     <section className="section">
//       <div className="section-wrapper">
//         <h2 className="section-heading">
//           {isSaleOpen ? saleOpen.heading : saleClosed.heading}
//         </h2>
//         <p className="section-description">
//           {isSaleOpen ? saleOpen.description : saleClosed.description}
//         </p>
//         <a
//           href={isSaleOpen ? saleOpen.href : saleClosed.href}
//           className="section-link"
//         >
//           Get access to our one-time sale
//         </a>
//       </div>
//     </section>
//   );
// }

// Conditionals in JSX
// If isSaleOpen is true (if there is an active sale), display the appropriate header and description.

// If there is a sale, make sure to show the link to the sale page, otherwise hide it.
