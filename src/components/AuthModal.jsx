export default function AuthView({ isLogin, setIsLoggedIn, navigateTo }) {
  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center px-4 bg-[#fdfbf7]">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-[#e8e1d5] w-full max-w-md">
        <h2 className="font-serif text-3xl text-[#4a5d23] text-center mb-2">
          {isLogin ? 'Welcome Back' : 'Hilo Studio'}
        </h2>
        <p className="text-center text-gray-500 mb-8 font-light">
          {isLogin ? 'Sign in to access your earthy aesthetics.' : 'Create an account to start shopping.'}
        </p>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); navigateTo('home'); }}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e2725b] focus:border-transparent outline-none transition-all bg-[#fdfbf7]" placeholder="Aisha Sharma" />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e2725b] focus:border-transparent outline-none transition-all bg-[#fdfbf7]" placeholder="hello@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e2725b] focus:border-transparent outline-none transition-all bg-[#fdfbf7]" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full bg-[#e2725b] hover:bg-[#c9614c] text-white py-3.5 rounded-xl font-medium transition-colors mt-4">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => navigateTo(isLogin ? 'signup' : 'login')} className="text-[#4a5d23] font-semibold hover:underline">
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
}