const TasksFlow = () => {
    return (
        <>
            <div className="tasks-flow custom-shadow p-6 bg-white col-span-8 row-span-1 flex items-center gap-2">
                <a href="#" className="task-flow-item p-4 gap-2">
                    <h4 className="font-bold text-md text-[var(--primary-color)]">Bus</h4>
                    <h4 className="font-bold text-md text-[var(--primary-color)]">Bus Routes</h4>
                </a>
                <a href="#" className="task-flow-item p-4 gap-2">
                    <h4 className="font-bold text-md text-[var(--primary-color)]">Analyze</h4>
                    <h4 className="font-bold text-md text-[var(--primary-color)]">Report Analysis</h4>
                </a>
                <a href="#" className="task-flow-item p-4 gap-2">
                    <h4 className="font-bold text-md text-[var(--primary-color)]">Fees</h4>
                    <h4 className="font-bold text-md text-[var(--primary-color)]">Pay School Fees</h4>
                </a>
            </div>
        </>
    )
}

export default TasksFlow;