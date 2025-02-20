import GrideContiner from "@/components/defaults/GrideContiner";
import MaxWidthWrapper from "@/components/defaults/MaxWidthWrapper";
import Nav from "@/components/Nav/Nav";
import SideBar from "@/components/Nav/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" background min-h-screen h-full  ">
      <GrideContiner cols={12}>
        <div className="bg-black/30  sticky inset-0 hidden lg:flex lg:col-span-3 xl:col-span-2 text-1xl ">
          <SideBar />
        </div>

        <MaxWidthWrapper className="col-span-12 lg:col-span-9 xl:col-span-10 h-full ">
          <Nav/>
          {children}
        </MaxWidthWrapper>
      </GrideContiner>
    </main>
  );
}
