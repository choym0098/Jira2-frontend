import React, {useState, useEffect} from 'react';
import {
  Container,
  CardActionArea,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

// TODO: to refactor later
interface Project {
    id: string,
    name: string,
    description?: string,
    isPrivate: boolean,
    users: string[],
    createdTime: Date,
    modifiedTime: Date,
}

interface Props {
    userId: string,
}

// TODO: remove this hard-coded data
const dummyProjects: Project[] = [
  {
    id: 'id1',
    name: 'project1',
    description: 'description1',
    isPrivate: false,
    users: [],
    createdTime: new Date(),
    modifiedTime: new Date(),
  },
  {
    id: 'id2',
    name: 'project2',
    description: 'description2',
    isPrivate: false,
    users: [],
    createdTime: new Date(),
    modifiedTime: new Date(),
  },
];

// TODO: implement this redirect function
/**
 * @param {string} projectId - Project Id of the redirected page
 *
 * @return {void} - TODO
 */
function goToProject(projectId: string) {
  return () => {
    console.log(`project Id is ${projectId}`);
  };
}

// TODO: make this a separate component under ../components
/**
 * @param {{ project: Project }} props - contains a Project
 *
 * @return {JSX.Element}
 */
function Project(props: { project: Project }) {
  const {project} = props;

  return (
    <Card data-testid={project.id}>
      <CardActionArea onClick={goToProject(project.id)}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

/**
 * @param {Props} props - see the Interface Props
 *
 * @return {JSX.Element}
 */
export function Home(props: Props) {
  const {userId} = props;
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    console.log(userId);
    // TODO: fetch/subscribe projects data from the server
    setProjects(dummyProjects);
  }, []);

  return (
    <Container>
      <h3>Projects</h3>
      {projects.map((project) =>
        <Project key={project.id} project={project}></Project>)}
    </Container>
  );
}
