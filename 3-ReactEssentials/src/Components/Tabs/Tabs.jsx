import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import TabContent from "../TabContent/TabContent";
import { EXAMPLES } from "../../data";
import Section from "../Section/Section";

const topics = ["components", "jsx", "props", "state"];
export default function Tabs() {
  const [selectedTopic, setSelectedTopic] = useState(
    <TabContent {...EXAMPLES[topics[0]]} />
  );

  const [selectedTab, setSelectedTab] = useState(topics[0]);

  const handleSelect = (topic) => {
    setSelectedTopic(<TabContent {...EXAMPLES[topic]} />);
    setSelectedTab(topic);
  };

  return (
    <>
      <Section title="Examples" id="examples" className="examples"> 
        <menu>
          {topics.map((topic) => (
            <TabButton
              isSelected={selectedTab == topic}
              onClick={() => handleSelect(topic)}
            >
              {topic.toLocaleUpperCase()}
            </TabButton>
          ))}
        </menu>
      </Section>

      <Section>
        {selectedTopic}
      </Section>
    </>
  );
}
