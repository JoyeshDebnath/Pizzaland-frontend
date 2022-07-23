import React from "react";
import { GoQuote } from "react-icons/go";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { AiOutlineDownload } from "react-icons/ai";
// AiOutlineDownload
import { RiInstagramFill } from "react-icons/ri";
//BsFacebook
const Profile = () => {
	return (
		<div style={{ maxHeight: "80vh" }}>
			<section className="vh-80" style={{ backgroundColor: "#eee" }}>
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-md-12 col-xl-4">
							<div className="card" style={{ borderRadius: "15px" }}>
								<div className="card-body text-center">
									<div className="mt-3 mb-4">
										<img
											src="jd.png"
											className="rounded-circle img-fluid"
											style={{ width: "100px" }}
										/>
									</div>
									<h4 className="mb-2">Joyesh Debnath</h4>
									<p className="text-muted mb-4">
										@FullStack Developer <span className="mx-2">|</span>{" "}
										<a href="https://github.com/JoyeshDebnath/Pizzaland-frontend">
											Pizzaland repo🍕🍕
										</a>
									</p>

									<blockquote className="blockquote">
										<GoQuote />
										<p>
											<i className="fas fa-quote-left fa-lg text-warning me-2"></i>
											<span className="font-italic">
												Hello there 🖐Myself Joyesh .. I love to code and work
												on new Projects.Feel free to reach me through the below
												given links ..
											</span>
										</p>
									</blockquote>
									<a
										className="btn"
										href="https://drive.google.com/file/d/1YPMXwm48IZ9G5JqdGh5YcCiuLgMpujQs/view?usp=sharing"
									>
										My resume{<AiOutlineDownload />}
									</a>
									<div className="d-flex justify-content-between text-center ProfileIcons ">
										<a href="https://www.linkedin.com/in/joyesh-debnath-549b3b208/">
											<BsLinkedin
												style={{
													color: "#3a0ca3",
												}}
											/>
										</a>
										<a href="https://www.instagram.com/joyeshdebnath26/">
											<RiInstagramFill
												style={{
													color: "#9a348e",
												}}
											/>
										</a>
										<a href="https://www.facebook.com/joyesh.debnath.1/">
											<BsFacebook
												style={{
													color: "#27187e",
												}}
											/>
										</a>
										<a href="https://github.com/JoyeshDebnath">
											<BsGithub style={{ color: "black" }} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;
