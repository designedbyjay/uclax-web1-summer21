import React from 'react';
import Essay from './Essay.jsx';
const Homework = () => {

    return (
        <div> 
            <h2>HOMEWORK</h2>
            <Essay
                number ={ 1 }
                question='What is the difference between Git, Github and Heroku?'
                >
                   <p>Git is the primary way we actually get to practice things like version control on a distributed network. If it wasn’t for Git it would be difficult to backtrack or share code efficiently and swiftly. With GitHub or Heroku as drivers for Git, developers will be able to actually commit their work to either one of those two options and have the source code distributed and hosted on either platform.</p>
                   <p>Git enables us to pull, commit and update code as we build our apps and code when connected to things like a distributed and hosted network. It’ll help us in events where we might make a mistake on our code and our build breaks and in the event if so you’ll be able to back track with version control.</p>
                   <p>GitHub is a large community of repositories in which people open source their code or host their code privately among selective teams and share their code through the network. They use git to push their code or libraries of different code to help teams work swiftly and efficiently. Lastly GitHub helps foster community with developers with it’s social media like communication channels and features.</p>

                </Essay>

                <Essay
                number ={ 2 }
                question='Explain the difference between HTML, CSS and JS?'
                >
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio fugit inventore autem nemo nisi fugiat odit, debitis aliquam est sed maiores quisquam veritatis neque maxime repellendus esse ex aperiam eum.</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, et! Corporis accusamus, incidunt eius voluptate animi consectetur ratione laboriosam hic cum aliquid sint explicabo laborum, alias id reiciendis nulla dolores!</p>
                </Essay>
            
            </div>
            
      
    );

}

export default Homework;
 