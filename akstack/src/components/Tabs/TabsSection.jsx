"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function TabsSection() {
  return (
    <div className="tabs-section">
      <Tabs>
        <TabList>
          <Tab style={{ marginRight: "45px" }}>Discover</Tab>
          <Tab style={{ marginRight: "45px" }}>Design</Tab>
          <Tab style={{ marginRight: "45px" }}>Build</Tab>
          <Tab>Scale</Tab>
        </TabList>

        <TabPanel style={{ lineHeight: "2px" }}>
          <div style={{ lineHeight: "40px", fontSize: "20px" }}>
            We start with Ignite, our discovery programme to understand your
            business’ objectives, operational environment and current
            capabilities.
            <br />
            <br />
            <li>
              Build a clear understanding of ambition, scope and business case
            </li>
            <li>
              Review existing capabilities (platforms, agility, limitations)
            </li>
            <li>
              Detail any operational constraints and identify practical
              solutions
            </li>
            <li>Create an agile backlog and roadmap</li>
          </div>
        </TabPanel>
        <TabPanel>
          <div style={{ lineHeight: "40px", fontSize: "20px" }}>
            We partner with your teams to design, prototype and prioritise use
            cases. Together we’ll define the roadmap and architecture to meet
            your business.
            <br />
            <br />
            <li>
              Workshops to ideate, prioritise use cases and define success
              metrics
            </li>
            <li>
              Design, prototype and validate user experiences and interfaces
            </li>
            <li>
              Define solution architecture and roadmap aligned to business
              impact
            </li>
            <li>Create an agile backlog and roadmap</li>
          </div>
        </TabPanel>
        <TabPanel>
          <div style={{ lineHeight: "40px", fontSize: "20px" }}>
            We build incremental solution capabilities that are aligned to your
            business’ priorities, leveraging modern technologies and agile
            practices.
            <br />
            <br />
            <li>Build modern frontend experiences and backend APIs</li>
            <li>
              Leverage modern open source solutions to accelerate development
            </li>
            <li>Adopt a pragmatic approach to building domain microservices</li>
            <li>Embed best practice engineering and DevSecOps</li>
          </div>
        </TabPanel>
        <TabPanel>
          <div style={{ lineHeight: "40px", fontSize: "20px" }}>
            We deploy intelligent solutions using a fully integrated platform to
            drive sustainable, measurable business growth for years to come.
            <br />
            <br />
            <li>Deploy incremental capabilities through agile delivery</li>
            <li>Automated high quality deployments using CI/CD with testing</li>
            <li>
              Monitor, measure and scale capabilities against solution demands
            </li>
            <li>
              Build capabilities and upskill client teams for sustainable growth
            </li>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
