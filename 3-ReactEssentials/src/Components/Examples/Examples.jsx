import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import TabContent from "../TabContent/TabContent";
import { EXAMPLES } from "../../data";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

const topics = ["components", "jsx", "props", "state"];

export default function Examples() {
  
  const [selectedTopic, setSelectedTopic] = useState(
    <TabContent {...EXAMPLES[topics[0]]} />
  );

  const [selectedTab, setSelectedTab] = useState(topics[0]);

  // set both the content, and the active indication for the button clicked
  const handleSelect = (topic) => {
    setSelectedTopic(<TabContent {...EXAMPLES[topic]} />);
    setSelectedTab(topic);
  };

  return (
    <>
      <Section title="Examples" id="examples" className="examples"> 
        <Tabs button={topics.map((topic) => (
              <TabButton
                isSelected={selectedTab == topic}
                onClick={() => handleSelect(topic)}
              >
                {topic.toLocaleUpperCase()}
              </TabButton>
            ))}>
          {selectedTopic}
        </Tabs>
      </Section>
    </>
  );
}
