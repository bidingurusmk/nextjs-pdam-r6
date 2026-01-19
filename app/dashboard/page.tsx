import Link from "next/link";
const DashboardPage = () => {
    return (
        <div className="flex justify-center bg-blue-300 w-full h-dvh items-center">
            <div className="w-3/4 bg-white text-gray-700 p-10 rounded-2xl shadow-lg md:w-1/2 lg:w-1/3">
                <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
                <p className="text-center text-gray-700">Welcome back to your dashboard</p>
            </div>
        </div>
    );
}
export default DashboardPage;