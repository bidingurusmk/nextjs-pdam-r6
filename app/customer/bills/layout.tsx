import CustomerSidebar from "@/components/CustomerSidebar";

export const metadata = {
  title: "Bills | PDAM",
  description: "Praktikum SMK Telkom Malang",
};
type PropsLayout = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: PropsLayout) => {
  return (
    <div>
      <CustomerSidebar>
      {children}
      </CustomerSidebar>
    </div>
  );
};

export default RootLayout;
