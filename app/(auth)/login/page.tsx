"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { signIn } from "next-auth/react";
const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { username, password, rememberMe });
    const result = await signIn("credentials", {
      redirect: false,
      email: username,
      password: password,
      // callbackUrl: "/",
    });
    console.log("result-2", result);
    if (result?.ok == true && result?.status == 200) {
      router.push("/admin/dashboard");
    } else {
      alert("ชื่อผุ้ใช้ไม่ถูกต้อง");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            เข้าสู่ระบบ
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  อีเมล
                </Label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <Input
                    id="email"
                    name="username"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-10 block w-full"
                    placeholder="อีเมลของคุณ"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  รหัสผ่าน
                </Label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="pl-10 pr-10 block w-full"
                    placeholder="รหัสผ่านของคุณ"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="focus:outline-none focus:text-gray-600 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOffIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <EyeIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    จดจำฉัน
                  </Label>
                </div>

                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-orange-600 hover:text-orange-500"
                  >
                    ลืมรหัสผ่าน?
                  </Link>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 focus:ring-orange-500"
                >
                  เข้าสู่ระบบ
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    หรือเข้าสู่ระบบด้วย
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <Button variant="outline" className="w-full">
                  <span className="sr-only">เข้าสู่ระบบด้วย Facebook</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>

                <Button variant="outline" className="w-full">
                  <span className="sr-only">เข้าสู่ระบบด้วย Google</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </Button>

                <Button variant="outline" className="w-full">
                  <span className="sr-only">เข้าสู่ระบบด้วย GitHub</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
