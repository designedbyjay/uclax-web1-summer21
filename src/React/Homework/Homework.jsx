import React from 'react';
import Essay from './Essay.jsx';
import { useMediaQuery } from 'common/mediaQueries/useMediaQuery.js';
import SunAndMoon from 'React/SunAndMoon/SunAndMoon.jsx';
import { Switch, Route } from 'react-router-dom';

const Homework = () => {

    const { media} = useMediaQuery();
    console.log ('media', media);

    return (
        <div> 
 
            {media.lg && <SunAndMoon /> }
            <h2>HOMEWORK</h2>

            <Essay
                number ={ 1 }
                question='What is the difference between Git, Github and Heroku?'
                >
                   <p>Git is the primary way we actually get to practice things like version control on a distributed network. If it wasn’t for Git it would be difficult to backtrack or share code efficiently and swiftly. With GitHub or Heroku as drivers for Git, developers will be able to actually commit their work to either one of those two options and have the source code distributed and hosted on either platform.</p>
                   <p>Git enables us to pull, commit and update code as we build our apps and code when connected to things like a distributed and hosted network. It’ll help us in events where we might make a mistake on our code and our build breaks and in the event if so you’ll be able to back track with version control.</p>

                   <p>GitHub is a large community of repositories in which people open source their code or host their code privately among selective teams and share their code through the network. They use git to push their code or libraries of different code to help teams work swiftly and efficiently. Lastly GitHub helps foster community with developers with it’s social media like communication channels and features.</p>

                   <p>Heroku very similarly operates in the same fashion that enables developers to launch and share their code; however, it takes it a step further by alleviating the programmer in not having to deal with actual servers and makes building apps easier. Heroku actually helps you launch, build and maintain apps on a server without the heavy lifting.</p>

                   <p>In conclusion, Git provides source code management and enables the developer to increase visibility to their work by enabling their work to be on a hosted platform such as GitHub or Heroku.</p>
                </Essay>

                <Essay
                number ={ 2 }
                question='Explain the difference between HTML, CSS and JS?'
                >
                 <p>HTML is short for hyperlink text markup language. This is the markup language that is most common to learn when first learning how to code. HTML paired with CSS gives us the ability to make things alot better than just plain text.</p>
                 <p>CSS is short for cascading sytle sheets. It helps us all define rules and orders around how HTML is actually displayed and render on a page. There are multiple CSS libraries that help us for different reasons depending on what goals you have in mind.</p>
                 <p>JS is short for Javascript. JS helps manipulate and create more interactive experiences on a give page. It help us speak to both HTML and CSS and do things that just HTML and CSS can't do alone.</p>
                </Essay>


                <Essay

                number ={ 3 }
                question='What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'
>
    My answer is as follows.
                </Essay>


                <Essay

                number ={ 4 }
                question='What is the difference between Web Designer, Front End Developer and Back End Developer?'
                >
                <li><b>Web Designer</b> Visual look of a websire and interactive design work.</li>
                <li><b>Front End Developer</b> All of the programming related to HTML, CSS and JS.</li>
                <li><b>Back End Developer</b> Programming server s ide apps (e.g. PHP, Python, Database and Secruity.)</li>
            
                </Essay>

                <Essay

                number ={ 5 }
                question='Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'
                >
                My answer is as follows.
                </Essay>
                            
            
            </div>
            
      
    );

}

export default Homework;
 