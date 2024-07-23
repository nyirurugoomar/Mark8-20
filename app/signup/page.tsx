// app/Login/page.tsx

'use client';
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName , setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('https://api.mark8.awesomity.rw/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName,lastName, email, password , phoneNumber }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
        return;
      }

      const data = await response.json();
      console.log('Login successful', data);

      // Save the access token and handle post-login actions
      localStorage.setItem('accessToken', data.data.accessToken); // Ensure this key matches what is checked in withAuth
      router.push('/Login');
    } catch (err) {
      console.error('An error occurred:', err);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="md:w-full w-full md:h-screen h-full bg-bg-image bg-cover bg-[#E3E3E3] md:flex items-center justify-center flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:w-[800px] h-[100px]  md:h-[581px] bg-white md:rounded-[16px]   md:mb-4">
        <div className="p-6 space-y-24 bg-[#F4F5F6] rounded-l-[16px] hidden md:block">
          <Image src="/mark8.png" alt="logo" width={50} height={50} />
          <div>
            <h1 className="font-dm-sans font-[900] text-[24px] leading-[31.25px] text-black">
              Mark8
            </h1>
            <p className="body">By Awesomity Lab</p>
          </div>
          <p className="body">© 2024 Awesomity Lab </p>
        </div>
        <div className="md:p-6 p-16">
          <div className="grid justify-center items-center md:h-0 h-[100px]">
            <Image
              src="/mark8.png"
              alt="logo"
              width={50}
              height={50}
              className="md:hidden block"
            />
            <h1 className="font-dm-sans font-[900] text-[24px] leading-[31.25px] text-black md:hidden block">
              Mark8
            </h1>
          </div>
          <h1 className="font-dm-sans font-[900] text-[24px] leading-[31.25px] text-black">
            Register
          </h1>
          <form action="" onSubmit={handleSubmit} className="md:mt-10 md:space-y-2 space-y-10">
          <div>
              <label
                htmlFor="email"
                className="block text-[10px] font-[600] font-dm-sans leading-[13.02px] text-[#0C0D0D] mb-2"
              >
                FirstName:
              </label>
              <div className="relative">
                <Image
                  src="/user.svg"
                  width={16}
                  height={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  alt="mail-icon"
                />
                <input
                  type="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="md:w-[320px] w-[300px] md:h-[48px] h-[48px] bg-[#0C0C0D0A] pl-10 pr-10 text-black rounded-[8px] focus:outline-none focus:border-none"
                  placeholder="Enter First Name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[10px] font-[600] font-dm-sans leading-[13.02px] text-[#0C0D0D] mb-2"
              >
                LastName:
              </label>
              <div className="relative">
                <Image
                  src="/user.svg"
                  width={16}
                  height={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  alt="mail-icon"
                />
                <input
                  type="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="md:w-[320px] w-[300px] md:h-[48px] h-[48px] bg-[#0C0C0D0A] pl-10 pr-10 text-black rounded-[8px] focus:outline-none focus:border-none"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[10px] font-[600] font-dm-sans leading-[13.02px] text-[#0C0D0D] mb-2"
              >
                Email:
              </label>
              <div className="relative">
                <Image
                  src="/mail-01.svg"
                  width={16}
                  height={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  alt="mail-icon"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="md:w-[320px] w-[300px] md:h-[48px] h-[48px] bg-[#0C0C0D0A] pl-10 pr-10 text-black rounded-[8px] focus:outline-none focus:border-none"
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-[10px] font-[600] font-dm-sans leading-[13.02px] text-[#0C0D0D] mb-2"
              >
                Password:
              </label>
              <div className="relative">
                <Image
                  src="/lock.svg"
                  width={16}
                  height={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  alt="lock-icon"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="md:w-[320px] w-[300px] md:h-[48px] h-[48px] bg-[#0C0C0D0A] pl-10 pr-10 text-black rounded-[8px] focus:outline-none focus:border-none"
                  placeholder="Enter Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute md:right-12 right-1 top-1/2 transform -translate-y-1/2"
                >
                  <Image
                    src={showPassword ? "/eye-off.svg" : "/eye.svg"}
                    width={16}
                    height={16}
                    alt="toggle-password-visibility"
                  />
                </button>
              </div>
              <div className=" justify-end text-end flex">
                <p className="body md:hidden block ">Create an account <span className="font-bold cursor-pointer underline">Here</span></p>
              </div>
              <div>
              <label
                htmlFor="email"
                className="block text-[10px] font-[600] font-dm-sans leading-[13.02px] text-[#0C0D0D] mb-2"
              >
                Phone Number:
              </label>
              <div className="relative">
                <Image
                  src="/user.svg"
                  width={16}
                  height={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  alt="mail-icon"
                />
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="md:w-[320px] w-[300px] md:h-[48px] h-[48px] bg-[#0C0C0D0A] pl-10 pr-10 text-black rounded-[8px] focus:outline-none focus:border-none"
                  placeholder="Enter Your Number"
                />
              </div>
            </div>
              {error && <p className="text-red-600 ">{error}</p>}
            </div>
            <div className="flex justify-between items-center md:mt-4">
              <h1 className="font-dm-sans font-[600] text-[14px] leading-[18.23px] underline underline-offset-4 text-[#141C24]">
                Forgot password?
              </h1>
              <button type="submit" className="bg-primary rounded-[8px] gap-4 px-[32px] py-[8px] text-black body font-[800] flex items-center w-[125px] h-[48px]">
                SignUp
                <Image src="/login32.svg" alt="icon_logout" width={16} height={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* register */}
      <div className="hidden md:block">
        <div className="md:w-[800px] md:h-[128px] rounded-[16px] justify-between p-[40px] bg-white flex items-center ">
          <div className="grid">
            <h3 className="subtitle">New Here?</h3>
            <p>Create an account</p>
          </div>
          <Link href='/Login'>
          <button className="border-[1.5px] border-accent rounded-[8px] gap-4 px-[32px] py-[8px] text-black body font-[800] flex items-center w-[200px] h-[48px]">
              Login Here
              <Image src="/arrow-right-02.svg" alt="icon_logout" width={16} height={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
