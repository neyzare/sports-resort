import SecondaryHeader from "~/components/layout/SecondaryHeader"
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import Button from "~/components/styles/Button";
import PrivateRouteAdmin from "~/components/styles/PrivateRouteAdmin"
import AdminPage from "~/components/styles/AdminPage"

export default function Admin() {
  return (
    <PrivateRouteAdmin>
      <AdminPage />
    </PrivateRouteAdmin>
  );
}
