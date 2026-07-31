import React from "react";
import { Title } from "./Title";

export const Skills = () => {
  return (
    <>
      <div className="title mt-5" id="skills">
        SKILLS
      </div>
      <div className="skill-wrapper container d-flex mt-2 align-items-center">
        <div className="skill-section p-3  ">
          <div>
            <div className="skill-box gap-2  align-items-center  ">
              <div className="skill-title">FRONTEND</div>

              <div className="skill-items d-flex align-items-center gap-3">
                <span className="skill-item">
                  <i className="fa-brands fa-html5 text-primary"></i> HTML5
                </span>
                <span className="skill-item">
                  <i className="fa-brands fa-css3 text-danger"></i> CSS3
                </span>
                <span className="skill-item">
                  <i className="fa-brands fa-square-js text-warning"></i>{" "}
                  JavaScript
                </span>
                <span className="skill-item">
                  <i className="fa-brands fa-react text-info"></i> React
                </span>
                <span className="skill-item">
                  <i className="fa-brands fa-bootstrap text-primary"></i>{" "}
                  Bootstrap
                </span>
              </div>
            </div>

            <div className="skill-box  ">
              <div className="skill-title">BACKEND</div>
              <div className="skill-items d-flex  align-items-center gap-3">
                <span className="skill-item">
                  <i className="fa-brands fa-node text-warning"></i> Node
                </span>
                <span className="skill-item">
                  {" "}
                  <i className="fa-solid fa-server text-light"></i>express
                </span>
                <span className="skill-item">
                  <i className="fa-brands fa-mdb text-info"></i> MONGO DB
                </span>
                <span className="skill-item">
                  <i className="fa-solid fa-leaf text-success"></i>Mongoose
                </span>
                <span className="skill-item">
                  <i className="fa-solid fa-network-wired text-warning"></i>REST
                  API
                </span>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-title">AUTHENTICATION & SECURITY</div>
              <div className="skill-items d-flex align-items-center gap-3">
                <span className="skill-item">
                  <i className="fa-solid fa-key text-warning"></i> JWT
                </span>
                <span className="skill-item">
                  <i className="fa-solid fa-lock text-danger"></i> bcrypt
                </span>
              </div>
            </div>

            <div className="skill-box ">
              <div className="skill-title">AI INTEGRATION</div>
              <div className="skill-items d-flex  align-items-center gap-3">
                <span className="skill-item">
                  <i className="fa-brands fa-openai"></i> OPEN AI
                </span>
                <span className="skill-item">
                  <i className="fa-solid fa-brain text-purple"></i>ANTHROPIC API
                </span>
                <span className="skill-item">
                  <i className="fa-solid fa-wand-magic-sparkles text-info"></i>
                  Prompt Engineering
                </span>
              </div>
            </div>
            <div className="skill-box   ">
              <div className="skill-title">TOOLS AND DEPLOYMENT</div>
              <div className="skill-items d-flex  align-items-center gap-3">
                <span className="skill-item">
                  <i className="fa-brands fa-git-alt text-danger"></i> Git
                </span>
                <span className="skill-item">
                  <i className="fa-brands fa-github"></i> Github
                </span>
                <span className="skill-item">
                  <i className="fa-solid fa-triangle-exclamation text-light"></i>
                  Vercel
                </span>
                <span className="skill-item">
                  <i className="fa-solid fa-cloud text-primary"></i>Render
                </span>
                <span className="skill-item">
                  <i className="fa-solid fa-train text-danger"></i>Railway
                </span>

                <span className="skill-item">
                  <i className="fa-solid fa-code"></i> VS Code
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="terminal mt-2">
          <div className="terminal-bar">
            <div className="icon">
              <div className="dot r"></div>
              <div className="dot y"></div>
              <div className="dot g"></div>
            </div>
            <div className="file-name">brazesh.json</div>
          </div>
          <div className="terminal-body">
            <div className="code text-white">
              <span className="text-danger">{"{"}</span>
              <div className="code-line">
                <span className="v-name">"name"</span>
                <span>:</span>
                <span className="value">"Brazesh"</span>,
                <br />
              </div>
              <div className="code-line">
                <span className="v-name">"role"</span>
                <span>:</span>
                <span className="value">"Full Stack Developer"</span>,
                <br />
              </div>
              <div className="code-line">
                <span className="v-name">"location"</span>
                <span>:</span>
                <span className="value">"Hobart, Tasmania"</span>,
                <br />
              </div>
              <div className="code-line">
                <span className="v-name">"education"</span>
                <span>:</span>
                <span className="value">"M.Tech software Engineering"</span>,
                <br />
              </div>
              <div className="code-line">
                <span className="v-name">"frontendSkills"</span>
                <span>:</span>
                <span className="value">
                  ["HTML" , "CSS", "javaScript", "React"]
                </span>
                ,
                <br />
              </div>
              <div className="code-line">
                <span className="v-name">"backendSkills"</span>
                <span>:</span>
                <span className="value">
                  ["node.js" , "express", "mongoDB", "REST API"]
                </span>
                ,
                <br />
              </div>

              <div className="code-line">
                <span className="v-name">"openToWork"</span>
                <span>:</span>
                <span className="value">true</span>,
                <br />
              </div>
              <span className="text-danger">{"}"}</span>

              <div>
                <span className="text-white">$ </span>{" "}
                <span className="text-white">node brazesh.js</span>
                <span className="t-cursor"> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
