import './Accordion.css';
import { useState } from 'react';

type Prop = {
  topics: {
    id: number;
    title: string;
    content: string;
  }[];
};

export function Accordion({ topics }: Prop) {
  const [currentID, setCurrentID] = useState(0);
  const topicComponents = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <TopicCard topic={topic} currentID={currentID} onClick={setCurrentID} />
      </div>
    );
  });
  return <>{topicComponents}</>;
}

type CardProp = {
  topic: {
    id: number;
    title: string;
    content: string;
  };
  currentID: number;
  onClick: (arg0: number) => void;
};

function TopicCard({ topic, currentID, onClick }: CardProp) {
  return (
    <>
      <button onClick={() => onClick(topic.id === currentID ? 0 : topic.id)}>
        {topic.title}
      </button>
      {topic.id === currentID && <p>{topic.content}</p>}
    </>
  );
}
