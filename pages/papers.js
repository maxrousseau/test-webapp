import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import AnalysisForm from '../components/analysis-form'

const Home = () => (

    <div id="header">
      <a id="headerLink" href="index">densys.org</a> 

    <div id="menu">
	<Link href="/about">
       <li><a href=''>about</a></li>
	</Link>
	<Link href="/analysis">
       <li><a href=''>analyses</a></li>
	</Link>
	<Link href="/papers">
       <li><a href=''><b>papers</b></a></li>
	</Link>
	<Link href="https://github.com/maxrousseau/densys.org">
       <li><a href="https://github.com/maxrousseau/densys.org">source</a></li>
	</Link>
    </div>

    <div id="main">
      <p className="description">
	<Link href="http://joss.theoj.org/papers/10.21105/joss.00855">
	M. Rousseau and J.M. Retrouvey. “pfla: A Python Package for Dental Facial
	Analysis using Computer Vision and Statistical Shape Analysis”. In: Journal
	of Open Source Software 3.32 (Dec. 2018), p. 855.  DOI :
	10.21105/joss.00855. URL : https://doi.org/10.21105%2Fjoss.00855.
	</Link>
      </p>
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
	text-align: center;

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
	text-align: left

}

#menu {
	clear: both;
	overflow: hidden;
	color: #069;
	background-color: #bcb9d3;
	padding: 0.7ex;
	font-size: 0.45em;
	display: blocks;
	text-align: center;
}

#main {

	clear: both;
	color: #746f91; /*#666;*/
	/*text-shadow: 1px 1px #fff;*/
	font-size: 0.4em; /*1.7em;*/
	padding-top: 3ex;
	padding-bottom: 3ex;
	padding-left: 20ex;
	padding-right: 20ex;
}

#footer {
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
