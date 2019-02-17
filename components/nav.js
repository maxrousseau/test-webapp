import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
  <div id="menu">
<Link href="/about">
     <li><a href=''>about</a></li>
</Link>
<Link href="/analysis">
     <li><a href=''>analyses</a></li>
</Link>
<Link href="/papers">
     <li><a href=''>papers</a></li>
</Link>
<Link href="https://github.com/maxrousseau/densys.org">
     <li><a href="https://github.com/maxrousseau/densys.org">source</a></li>
</Link>
  </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: flex-start;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
