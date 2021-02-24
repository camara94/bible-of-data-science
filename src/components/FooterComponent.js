const Footer = props => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-4 align-self-center">
                        <a className="btn btn-social-icon btn-github" target="_blank" href={props.links.github}> <i className="fa fa-github"></i> </a>&nbsp;
                        <a className="btn btn-social-icon btn-codepen" target="_blank" href={props.links.codepen}> <i className="fa fa-codepen"></i> </a>&nbsp;
                        <a className="btn btn-social-icon btn-linkedin" target="_blank" href={props.links.linkedin}> <i className="fa fa-linkedin"></i> </a>&nbsp;
                        <a className="btn btn-social-icon btn-twitter" target="_blank" href={props.links.twitter}> <i className="fa fa-twitter"></i> </a>&nbsp;
                        <a className="btn btn-social-icon btn-youtube" target="_blank" href={props.links.youtube}> <i className="fa fa-youtube"></i> </a>&nbsp;
                        <a className="btn btn-social-icon btn-facebook" target="_blank" href={props.links.facebook}> <i className="fa fa-facebook"></i> </a>
                        <a className="btn btn-social-icon btn-globe" target="_blank" href={props.links.site}> <i className="fa fa-globe"></i> </a>                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto mt-3">
                        &copy; Copyrigth {new Date().getFullYear()} The Bible Of Data Science
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;