import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (

    <div id="header">
      <a id="headerLink" href="index">densys.org</a> 

    <div id="menu">
       <li href="about">about</li>
       <li href="analysis">analyses</li>
       <li href="papers">papers</li>
       <li href="https://github.com/maxrousseau/densys.org">source</li>
    </div>

    <div id="main">
      <p>Research, implementation and dissemination of machine learning 
	  tools in dentistry.</p>
    </div>

    <div id="footer">
      <span class="right"> &copy; 2018 densys.org | Maxime Rousseau </span>
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

#header {

	clear: both;
	color: #484558; /*#666;*/
	/*text-shadow: 1px 1px #fff;*/
	font-size: 2em; /*1.7em;*/

}

#menu {
	clear: both;
	overflow: hidden;
	color: #069;
	background-color: #bcb9d3;
	padding: 0.7ex;
	font-size: 0.5em;
	display: blocks;
	text-align: center;
}

#main {

	clear: both;
	color: #484558; /*#666;*/
	/*text-shadow: 1px 1px #fff;*/
	font-size: 0.5em; /*1.7em;*/

}

#footer {
	clear: both;
	color: #666;
	border-top: 1px solid #ccc;
	font-size: 50%;
	padding: 1em;
	margin: 0 0 1.5em 0;
}
    `}</style>
    </div>
)

export default Home
