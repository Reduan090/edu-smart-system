const QuickActions = () => {
    return (
            <>
                <div className="quick-actions block col-span-8 bg-white custom-shadow p-6">
                    <div className="grid">
                        <div className="block col-span-12">
                            <h4 className="text-4xl text-[var(--primary-color)] font-bold mb-4">Quick Actions</h4>
                        </div>
                        <div className="block col-span-6 font-semibold text-xl">
                            <ul>
                                <li><a href="#">Attendance</a></li>
                                <li><a href="#">Report Generation</a></li>
                                <li><a href="#">Results</a></li>
                            </ul>
                        </div>
                        <div className="block col-span-6 font-semibold text-xl">
                            <ul>
                                <li><a href="#">Marks Entry</a></li>
                                <li><a href="#">Progress</a></li>
                                <li><a href="#">Bus Monitoring</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    };
    
export default QuickActions;