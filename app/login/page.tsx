import Link from "next/link";
export default function LoginPage() {
    return (
        <div className="w-full h-dvh bg-blue-300 flex justify-center items-center">
            <div className="bg-white text-gray-700 w-full md:w-1/2 lg:w-1/3 p-5">
                <h1 className="font-bold text-2xl text-center text-gray-700 p-2">
                    Login
                </h1>
                <input 
                    type="text" 
                    placeholder="Username"
                    className="w-full p-5 border rounded-sm mb-4"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="w-full p-5 border rounded-sm mb-4"
                />
                <button className="w-full p-5 border rounded-md text-center text-gray-700 font-bold bg-blue-500 cursor-pointer hover:bg-blue-600">
                    <Link href="/dashboard">Login</Link>
                </button>
                <div className="flex justify-center mt-2"></div>
                <a>Don't have an account yet?</a>   
                    <a href="/register" className="text-blue-500 underline p-2">
                     Register
                    </a>
                </div>
            </div>
    );
}