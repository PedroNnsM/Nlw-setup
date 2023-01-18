interface HabitsProps {
  completed: number
}


export function Habit({completed}: HabitsProps){
  return (
    <div className="bg-slate-800">
      <p>{completed}</p>
    </div>
  )
}