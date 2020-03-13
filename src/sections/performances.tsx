import React, {useState} from "react";
import _ from "lodash";
import Section from "../components/section";
import Performance from "../components/performance";
import usePerformances from "../utils/usePerformances";
import Notification from "../components/notification";

const Performances = () => {
    const {allPerformances: ungroupedPerformances, featuredPerformances} = usePerformances();
    const allPerformances = _.groupBy(ungroupedPerformances, "group");
    const [activeGroup, setActiveGroup] = useState("all groups");
    const [dropDownIsExpanded, setDropDownIsExpanded] = useState(false);
    const performances = activeGroup === "all groups" ? featuredPerformances : allPerformances[activeGroup];

    function handleSetActiveGroup(group: string) {
        return () => setActiveGroup(group === "All Groups" ? "all groups" : group);
    }

    function toggleDropDown() {
        setDropDownIsExpanded(!dropDownIsExpanded);
    }

    return (
        <Section title="Performance">
            <p className="is-tight-desktop">
                Music has been a part of my life as long as I can remember, and I&apos;ve been performing in
                choirs my whole life as well. Here is a collection of every performance I&apos;ve been a part of
                starting with high school show choir. The only thing not included in this page is middle school show
                choir.
            </p>
            <br />
            <br />
            <Notification>
                You are currently looking at
                {activeGroup === "all groups" ? " a selection " : " all "}
                of my performances in&nbsp;
                <div className={dropDownIsExpanded ? "dropdown is-active" : "dropdown"} onClick={toggleDropDown}>
                    <div className="dropdown-trigger">
                        <button
                            className="button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu"
                            style={{
                                background: "none",
                                border: "none",
                                color: "white",
                                padding: "0",
                                height: "inherit",
                            }}
                        >
                            <span style={{borderBottom: "1px solid white"}}>{activeGroup}</span>
                            <span className="icon is-small">
                                <i className="far fa-angle-down" aria-hidden="true" />
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            {["All Groups", ...Object.keys(allPerformances)].map(group => (
                                <a className="dropdown-item" key={group} onClick={handleSetActiveGroup(group)}>
                                    {group}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </Notification>
            <br />
            <div className="container">
                <div className="columns is-multiline">
                    {performances.map((performance, i) => (
                        <Performance performance={performance} key={i} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Performances;
