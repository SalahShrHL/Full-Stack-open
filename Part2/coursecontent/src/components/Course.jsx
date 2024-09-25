const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><strong>total of {sum} exercises </strong></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>


const Content = ({ parts }) => {
  let total = parts.reduce((total,part)=> total + part.exercises,0)

  return(
    <>
      {parts.map(part => <Part key={part.id} part = {part} />)}
      <Total sum={total}/>
    </>
  )
  
  
}
  

const Course=({course}) => 
  <div>
  <Header course={course.name} />
  <Content parts={course.parts} />
  </div>


export default Course