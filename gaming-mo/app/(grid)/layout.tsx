import GrideContiner from "@/components/defaults/GrideContiner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen">
      <GrideContiner cols={12}>
        <div className=" col-span-2 bg-red-500 text-1xl">Gaming Mo</div>
        <div className="col-span-10 bg-slate-300 ">{children}</div>
      </GrideContiner>
    </main>
  );
}
