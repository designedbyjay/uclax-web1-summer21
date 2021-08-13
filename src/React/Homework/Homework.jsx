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
                question='What it means for a company to be Agile. What is the purpose of using Agile, and its Pros and Cons.'
                >
                <p>Agile is a development methodlogy that software development teams use to help guide and structure their work.  </p>

                </Essay>

            </div>
          


      
    );

}

export default Homework;
 