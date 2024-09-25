import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/Persons'
import Notification from './components/Notification'




const App = () => {


  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [className, setClassName] = useState('')



  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) =>  setNewFilter(event.target.value)



  const addName = (event) => {

    event.preventDefault()

    const personExists = persons.some(person => person.name === newName)
    if (personExists) {
      const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if(result){
        const person = persons.find(person => person.name === newName);
        const changedPerson = { ...person, number: newNumber }
        personService
        .update(person.id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))

          setNewName('')
          setNewNumber('')

          setMessage( `${person.name} was updeted successfully` )
          setClassName('success')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
     }}
    else{
      const nameObject = {
        name: newName,
        number: newNumber
      }

      personService
      .create(nameObject)
      .then(object => {
      setPersons(persons.concat(object))
      setNewName('')
      setNewNumber('')

      setClassName('success')
      setMessage( `${object.name} was added successfully` )
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } )
    }

  
  }


  const handleDelete=(id)=>{
    const person = persons.find(person => person.id === id)
    const result = window.confirm(`Delete ${person.name}?`)
    if (result) {
      personService
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
      }).catch(error => {
        setClassName('error')
        setMessage( `Information of ${person.name} has already been removed from server` )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setPersons(persons.filter(person => person.id !== id))
  })
    }
  }

  return (
    <div>

      <h1>Phonebook</h1>

      <Notification message={message} className={className}/>

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>

      <h2>add a new</h2>

      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>

      <Persons persons={persons} newFilter={newFilter}  handleDelete={handleDelete}/>

    </div>
  )
}

export default App;

