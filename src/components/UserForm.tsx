import { useState} from "react";

interface UserFormProps {
  onFormSubmit: (name: string, isCompleted: boolean) => void
}

const UserForm: React.FC<UserFormProps> = ({ onFormSubmit }) => {
  const [name, setName] = useState<string>('')
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  const onChange = (e:any): void => {
    setName(e.target.value)
  }

  const checkedOnchange = (e: any): void => {
    setIsCompleted(e.target.checked)
  }

  const onSubmit = (e:any): void => {
    e.preventDefault()
    onFormSubmit(name, isCompleted)
    setName('')
    setIsCompleted(false)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="task" value={name} onChange={onChange} />
        <input type="checkbox" onChange={checkedOnchange} checked={isCompleted} />
        <label>Completed</label>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default UserForm
