"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  HelpCircle,
  Home,
  LineChart,
  LogOut,
  Menu,
  Package,
  Package2,
  Search,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut, useSession } from "next-auth/react";
const Header = () => {
  const { data: session, status } = useSession();
  console.log("session", session);
  console.log('status', status)
  return (
    <>
      <header className="flex h-14 items-center gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
              >
                <ShoppingCart className="h-5 w-5" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                Products
              </Link>
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Users className="h-5 w-5" />
                Customers
              </Link>
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <LineChart className="h-5 w-5" />
                Analytics
              </Link>
            </nav>
            <div className="mt-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex flex-col space-y-1">
            <div className="font-mono text-sm">hi!! {session?.user?.email}</div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel className="font-mono">
                บัญชีของฉัน
              </DropdownMenuLabel>
              <div className="px-2 py-1.5">
                <div className="flex flex-col items-center space-y-3">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-center space-y-1">
                    <span className="font-mono text-sm text-center">
                      {session?.user?.email}
                    </span>
                    <Badge
                      variant="destructive"
                      className="px-2 py-0.5 text-xs rounded-full"
                    >
                      ผู้ดูแลระบบ
                    </Badge>
                  </div>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span className="font-mono">การตั้งค่า</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span className="font-mono">สนับสนุน</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => signOut()}>
                <LogOut className="mr-2 h-4 w-4" />
                <span className="font-mono">ออกจากระบบ</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
};

export default Header;
