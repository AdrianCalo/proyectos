import React from "react";
import Header from "./header";
import '../styles/aboutme.css'
import avatar from '../imagenes/avatar.jpeg' 

function AboutMe() {
    return(
        <>
        <Header/>
        soy about
        <div className="cont-principal">
        <section className="cont-descripcion">
            <div className="profile">
                <img className="rostro" src={avatar} alt="" />
            </div>
            <div className="cont-presentacion">
                <p>Hi!! I am Adrian, I am Full Stack Developer.
                    In this briefcase you can find diferente projects carried out in different programming lenguages.
                </p>
            </div>
        </section>
            <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quidem labore voluptatem exercitationem dolorem optio quod quisquam, eius placeat praesentium velit necessitatibus totam at magni quam ducimus porro aperiam iure?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo dolorem nemo exercitationem ex deleniti dolor! Odit voluptatem optio impedit magni voluptatum quae accusamus doloribus similique, cum earum sapiente aperiam.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati at officia voluptatibus facere suscipit quae? Consequuntur eaque ipsa quam consequatur reiciendis optio eos vero quia nisi praesentium. Quae, voluptates?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta natus animi ullam cupiditate aliquam similique aliquid, tenetur maiores amet impedit nulla reprehenderit voluptatum repellendus temporibus, accusamus sit harum ipsam.
                <br />
            </article>
        </div>
        </>
    )
}
export default AboutMe