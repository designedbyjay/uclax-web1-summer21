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
                <p>Site Relative: These are paths describe the path from the site’s root folder to a document. </p>
                <p>Document Relative: Document-relative paths are the most appropriate paths to use for local links in most websites. </p>
                <p>Absolute Paths: This refers to the entire URL address when referencing a page or resource.</p>

                </Essay>

                <Essay

                number ={ 6 }
                question='What is the difference between jpg, gif, png and SVG images?'
                >
                <p>Jpg:JPEG or JPG is a commonly used method of lossy compression for digital images, particularly for those images produced by digital photography. </p>
                <p>GIF: The Graphics Interchange Format is a bitmap image format and supports animations.</p>
                <p>PNG:Supports allpha tranparency and compresses differently compared to the other file formats.</p>
                <p>SVG: Vector supported image type. All of the other types are rasterized.  </p>

                </Essay>

                <Essay

                number ={ 7 }
                question='Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'
                >
           
                <p><strong>Project Manager: </strong> This person helps the team stick to our timeline and estimates and ensure we meet deadlines.</p>
                <p><strong>Business Analyst: </strong> A BA or product manager helps develop the business case for the project at hand to help the company reach it's goals and objectives. This persons helps kicks off the project along with everyone listed here.</p>
                <p><strong>Scrum Master: </strong>This person helps keep this cross-functional team stay on target and enable the team to reach each of the milestones as part of the overall project management duties. This person also helps with keeping us agile and ensure we prioritize things with the Agila methodlogy.</p>
                <p><strong>UX Designer: </strong> The person who ultimately helps conceptualize, plan, organize content for a given website, mobile app or web app. Comes up with the overall look and feel and helps address business requirements and user needs.</p>
                <p> <strong>Web Developer/Engineer: </strong>Helps develop and code the functionality of a given website and app. </p>
                <p><strong>Quality Assurance: </strong> The person that is responsible for the quality of the code, user interface design and things looking great across multiples devices and operating systems. This person conducts helps the team ship good code, design before releasing to the masses of people.</p>
                <p><strong>DevOps: </strong> This person is the lead for the engineers that supports with resourcing, estimates and often partners with the scrum master and projects to ensure accurate level of effort is spoken to when estimates story points for development tasks.  </p>
                </Essay>
            
                <Essay

                number ={ 8 }
                question='  What is considered the right size for an image or video asset?'
                >
                <p>When uploading images to the web there are a number of things to take into consideration, such as what is the image being used for, how large should the file be, and what type of image should be used for different areas on your site.</p>
                <p>It depends for what the application is: avatars, hero images, optimize for SEO and UX and accessiblity.</p>
                </Essay>

                <Essay

                number ={ 9 }
                question='What does xit means for a company to be Agile. What is the purpose of using Agile, and its Pros and Cons.'
                >
                <p>Agile is a development methodlogy that software development teams use to help guide and structure their work.  </p>

                </Essay>

                <Essay

                number ={ 10 }
                question='What are testing environments? What is the difference between Local, Dev, QA and Production?'
                >
                <p><strong>Local:</strong> A local development environment allows you to use your own computer to run your website or web app, instead of using one provided by a web hosting company. This is useful if you're building something that doesn't need to be used outside of a company or accessed by people on the web. This environment is restricted to what the Developer's desktop/workstation
                is able to reach.</p>
                <p><strong> Dev:</strong>  Development server acting as a sandbox where unit testing may be performed by the developer
                </p> 
                <p><strong>QA:</strong>  The QA environment allows engineers and designers to test and ensure software is upto spec and will work great for production environment release. It's specfically used for user acceptance testing.</p>
                <p><strong>Production:</strong> This enviornment supports written code to access all services and servers to go prime time to be used by users and visitors on the given website or web app. Serves end-users/clients
                </p>
                </Essay>

                <Essay

                number ={ 11 }
                question='Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?'>
                <p>Images are part of the content when they support he information.</p>
                <p>CSS controls the formatting and styling of the content. Images can recieve CSS properties enabling images inserted by HTML. For example, spacing and border outlines. </p>

                </Essay>

                <Essay

                number ={ 12}
                question='What is the difference between ID? Classes and Tags? How does Specificity play a role in the selection of HTML elements in both in CSS and JS?'>
                
                <p>IDs help provide deeper specificity. Each ID is unique in it's own way and contain specific rules.</p>
                <p>Classes share properties among a single tag being referenced over and over again. These are shared properties as opposed to unique instances such as IDs.</p>
                <p>Tags help orient us in the sense of understanding where they open and close through out our code.</p>

                </Essay>


                <Essay

                number ={ 13}
                question='What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?'>
                
                <p>A CSS Preprocessor helps with the maintainence of multiple style sheets and helps with overall mangagement. Makes updating stylesheets more dynamic and nested styling.</p>
                <p>Examples are Sass, Less, Stylus</p>
                <p>In React, what are styled components? JS compinent that contains CSS styling (scoped style)</p>
                <p>Styled compnents violate seperation of concerns and it puts HTML/CSS/JS into a single space/component.</p>
                </Essay>

                <Essay

                number ={ 14}
                question='Final Project Defined'>

                <p> <strong> Find a mobile detailer</strong></p>

                    <p>
                    I’m the client. I run a e-commerce small business selling car care products. My goal is to create a microsite that allows customers to submit their car care detailing business to the microsite. The goal of the microsite is to help customers find car detailing services near them. With this single page app I want to provide a matchmaking service for customers shopping for car care services and the small businesses that provide the services. The purpose is to help build a community of mobile car detailers that list themselves on the website. In turn this will help people discover service providers and don’t like to do the work themselves and have easy access to someone they can hire. </p>

                    <p>
                    On the flip side for car detailers it’ll be a lead generation tool. The purpose of this tool is to provide a front-facing/ easy to access tools for customers to get services for their car detailing needs. By inputting what services they need and what car they have will spin up a recommended service provider/business. What this will do is provide an easy way to get quotes for the services people are looking to obtain for their cars.
                    </p> 

                    <p>
                    I want to expand and grow my current e-commerce business and open up a new revenue stream. This is something I can see myself working on long term beyond the course. My goal is to at least get the single page app to represent the different  kinds of services available from an educational point of view and also provide estimates for the types of car detailing services available. </p>
           
               </Essay>


              


            </div>
          


      
    );

}

export default Homework;
 