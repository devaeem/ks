"use client"
// import { Button } from "@/components/ui/button";
//  import Link from "next/link";

export default function Page() {


  const handleClick = () => {
    alert('สวัสดี');
  };
  return (
    <>
    <div className="min-h-screen flex   items-center justify-center">

    <ul className="gap-4 p-4">
      <li>บรรทัดที่ 1</li>
      <li style={{ color: 'green' }}>บรรทัดที่ 2</li>
      <li style={{ backgroundColor: 'yellow' }}>บรรทัดที่ 3</li>
      <li onClick={handleClick}>บรรทัดที่ 4</li>
    </ul>
    </div>

        {/* <div className=" min-h-screen flex  flex-col ">
          <header className="flex items-center justify-between    p-4 md:p-6">
            <div className="flex items-center justify-between container mx-auto">
              <div className="flex items-center ">
                <h1 className="text-2xl font-bold text-orange-500">Platform</h1>
              </div>

              <nav className="flex items-center">
              <ul className="flex flex-wrap justify-center md:justify-end items-center space-x-2 md:space-x-6">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                    >
                      หน้าแรก
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                    >
                      สินค้า
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                    >
                      เกี่ยวกับ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                    >
                      ติดต่อ
                    </Link>
                  </li>
                  <li>
                    <Button
                      className="bg-orange-500 text-white hover:bg-orange-600"
                      asChild
                    >
                      <Link href="/login">Sign In</Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div> */}

    </>
  );
}
