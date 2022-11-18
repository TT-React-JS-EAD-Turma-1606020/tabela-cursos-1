import './App.css';
import { CoursesTable } from './components/CoursesTable';
import { Title } from './components/Title';

const courses = [
  {
    nome: 'React JS',
    description: 'Curso de react',
    instructor: 'Luciel',
  },
  {
    nome: 'React JS',
    description: 'Curso de react',
    instructor: 'Luciel',
  },
  {
    nome: 'React JS',
    description: 'Curso de react',
    instructor: 'Luciel',
  },
]

function App() {
  return (
    <div>
      <Title text='Tabela de cursos' />

      <CoursesTable courses={courses} />
    </div>
  );
}

export default App;
