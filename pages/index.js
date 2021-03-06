import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (

    <div className="header">
      <a id="headerLink" href="index">densys.org</a>

        <div className="menu">
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

        <div className="main">
            <img src="/static/densyslogo.png" alt="logo" height="400" width="400" />
      <p>Research, implementation and dissemination of machine learning
	  tools in dentistry.</p>
    </div>

    <div className="footer">
      <span className="right"> &copy; 2019 densys.org | Maxime Rousseau </span>
	</div>


    <style jsx global>{`

/* #eae9f1 pale
 * #bcb9d3
 * #918cb6
 * #746f91
 * #484558 dark
 */


body {

	background-color: #eae9f1; /*pale blue*/
	color: #746f91; /*dark blue*/
	font-family: sans-serif;
	margin-top: 3%;
	margin-left: 10%;
	margin-right: 10%;

}

a {

	color: #484558; /**/
	text-decoration: none;

}

a:hover {

	background-color: #eae9f1;

}

li {

	color: #484558; /**/
	text-decoration: none;
	padding-left: 0.20em;
	padding-right: 0.20em;
	padding-top: 0.35em;
	padding-bottom: 0.45em;
	display: inline;

}

li:hover {

	background-color: #eae9f1;

}

.header {

	clear: both;
	color: #484558; /*#666;*/
	/*text-shadow: 1px 1px #fff;*/
	font-size: 2em; /*1.7em;*/

}

.menu {
	clear: both;
	overflow: hidden;
	color: #069;
	background-color: #bcb9d3;
	padding: 0.7ex;
	font-size: 0.45em;
	display: blocks;
	text-align: center;
}

.main {

	clear: both;
	color: #746f91; /*#666;*/
	/*text-shadow: 1px 1px #fff;*/
	font-size: 0.5em; /*1.7em;*/
    text-align: center;

}

.footer {
	clear: both;
	color: #666;
	border-top: 1px solid #ccc;
	font-size: 37%;
	padding: 1em;
	margin: 0 0 1.5em 0;
}
    `}</style>
    </div>
)

export default Home
