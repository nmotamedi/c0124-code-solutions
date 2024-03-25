import './Accordion.css';
import { useState } from 'react';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type Prop = {
  topics: Topic[];
};

export function Accordion({ topics }: Prop) {
  const [currentID, setCurrentID] = useState(0);

  function handleCardClick(clickedId: number) {
    if (clickedId === currentID) {
      setCurrentID(0);
    } else {
      setCurrentID(clickedId);
    }
  }

  const topicComponents = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <TopicCard
          topic={topic}
          isOpen={topic.id === currentID}
          onClick={handleCardClick}
        />
      </div>
    );
  });
  return <>{topicComponents}</>;
}

type CardProp = {
  topic: Topic;
  isOpen: boolean;
  onClick: (arg0: number) => void;
};

function TopicCard({ topic, isOpen, onClick }: CardProp) {
  return (
    <>
      <button onClick={() => onClick(topic.id)}>{topic.title}</button>
      {isOpen && <p>{topic.content}</p>}
    </>
  );
}
