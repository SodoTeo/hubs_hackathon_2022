import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Sso from "../components/sso/sso";
import Dashboard from "../components/dashboard";
import Parking from "../components/parking";
import Booths from "../components/booth";

export default function Home() {
  return (
    <>
      <Header />
      <Sso />
      <h2 className="text-4xl font-semibold whitespace-nowrap text-black text-center mt-20">
        Dish Duty
      </h2>
      <Dashboard />
      <h2 className="text-4xl font-semibold whitespace-nowrap text-black text-center my-10">
        Parking Spots
      </h2>
      <Parking />
      <h2 className="text-4xl font-semibold whitespace-nowrap text-black text-center my-10">
        Office Booths
      </h2>
      <Booths />
      <Footer />
    </>
  );
}
