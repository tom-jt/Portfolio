import React from 'react';

export enum ProjectType {
  Game,
  Website
}

interface ProjectProp {
  name: string;
  desc: string;
  type: ProjectType;
}

function Home({ name,  }: ProjectProp) {
  return (
    <main>
      Project: {name}
    </main>
  );
};

export default Home;