export const CoursesTable = ({ courses }) => {
  return (
    <table>
      <thead>

        <tr>
          <th>Curso</th>
          <th>Descrição</th>
          <th>Instrutor</th>
        </tr>
      </thead>

      <tbody>
        {courses.map((course, index) => {
          return (
            <tr key={index}>
              <td>{course.nome}</td>
              <td>{course.description}</td>
              <td>{course.instructor}</td>
            </tr>
          )
        })}
      </tbody>

    </table>
  )
}