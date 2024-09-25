const PersonDetails=(props)=>(
    <div>
      {props.person.name} {props.person.number} <button onClick={props.handleDelete}> delete </button>
    </div>
  )
  
  const Persons=(props)=>(
    <div>

    { props.persons.filter(
      person => {
      const regex = new RegExp(props.newFilter, 'i')
      return person.name.match(regex)
      }
      ).map(person => <PersonDetails key={person.name} person={person} handleDelete={()=>props.handleDelete(person.id)} />)
    }

    </div>
  )

  
    export default Persons  