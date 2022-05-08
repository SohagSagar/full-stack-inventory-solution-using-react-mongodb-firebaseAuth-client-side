import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container blogs mb-5'>

                <div className="blog-container">
                    <p>Q<sub>1. </sub>Difference between javascript and nodejs? </p>
                    <p><b>A:</b> Javascript is a programming language which is run in the browser by using browser javascript engine. On the other hand, node js is a Javascript runtime environment for a JavaScript programming language and it run in the back-end side and javascript shows its power on the client side. </p>


                </div>

                <div className="blog-container">
                    <p>Q<sub>2. </sub>When should you use nodejs and when should you use mongodb? </p>
                    <p><b>A: </b>MongoDB and NodeJS are two different technologies where monogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias. And NodeJS's responsibility is specially to execute above task.
                    </p>
                </div>

                <div className="blog-container">
                    <p>Q<sub>3. </sub>Differences between sql and nosql databases.?</p>
                    <p><b>A: </b>Sql database is more structural then the nosql database. Sql database is follow relational database format and nosql database follows non-relational or distributed database system. Sql database is perform better in complex queries situation than the nosql database.</p>
                </div>

                <div className="blog-container">
                    <p>Q<sub>3. </sub>What is the purpose of jwt and how does it work?</p>
                    <p><b>A: </b>JWT or json web token is a special token to make the client and server data transfer request more secure. Jwt is encoded and it contains json object of data and the token has three section i.e. header,payload and signature.</p>
                </div>

            </div>
    );
};

export default Blogs;