import React from "react";
import "../css/Contact.css";
class Contact extends React.Component{
    render(){
        return(
            <footer id="contact">
               <div className="container">
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h3>Réseaux Sociaux</h3>
                            <div className="icons">
                                <a href="https://www.linkedin.com/in/guillaume-n-8b46a498/"><i className="fa fa-linkedin-square icons icon-linkedin" aria-hidden="true"></i></a>
                                <a href="https://github.com/reykugo"><i className="fa fa-github-square icons icon-github" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="col-sm-4 text-center">
                            <a href="#about" id="aboutFooter">
                                <span className="glyphicon glyphicon-chevron-up"></span>
                            </a>
                            <h5>© Copyright <br/> <br/>Guillaume Nougier. Tous droits réservés.</h5>
                        </div>
                        <div className="col-sm-4 text-center">
                            <h3>Me contacter</h3>
                            <div>
                                <a href="mailto:guillaumenougier@gmail.com"><i className="fa fa-envelope-o icons icon-mail" aria-hidden="true"></i></a>
                                <p>guillaumenougier@gmail.com</p>
                            </div>
                            <div>
                                <i className="fa fa-phone icons icon-phone" aria-hidden="true"></i>
                                <p>06.19.09.60.14</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Contact;