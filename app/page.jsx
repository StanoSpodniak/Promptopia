import React from "react";
import Feed from "@components/Feed";

//Tutorial: https://www.youtube.com/watch?v=wm5gMKuwSYk&t=213s 2:32:00 Profile page

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">
                    AI-Powered Prompts
                </span>
            </h1>
            <p className="desc text-center">
                Promptopia is an open-source AI prompting tool for modern world
                to discover, create and share creative prompts
            </p>

            <Feed />
        </section>
    );
};

export default Home;
