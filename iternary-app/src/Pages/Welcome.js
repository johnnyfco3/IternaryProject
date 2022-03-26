import React from "react";
import WelcomeBar from "../Components/WelcomeBar";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Preview from "../Components/Preview";

export function Welcome(){

    function reveal() {
        let reveals = document.querySelectorAll(".reveal");
      
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);

    return (
        <div id="welcome">
            <header>
                <WelcomeBar />
            </header>

            <main>
                <section className="top-content text-center">
                    <h1 className="title">Vacay</h1>
                    <p>Let Us Travel The World!</p>
                </section>

                <section className="about py-5" id="about">
                    <About />
                </section>

                <section className="preview py-5" id="design">
                    <Preview />
                </section>
            </main>

            <footer>
                <div className="reveal">
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

export default Welcome;