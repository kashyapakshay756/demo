import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetPassword from "../container/admin/auth/resetPassword/ResetPassword";
import ConfirmPassword from "../container/admin/auth/confirmPassword/ConfirmPassword";
import VerifyPassword from "../container/admin/auth/verifyPassword/VerifyPassword";
import SuperLogin from "../container/admin/auth/superLogin/SuperLogin";
import RecoveryEmail from "../container/admin/auth/recoveryEmail/RecoveryEmail";
import VerificationCode from "../container/admin/auth/verificationCode/VerificationCode";
import StrongPassword from "../container/admin/auth/strongPassword/StrongPassword";
import Sidebar from "../container/admin/pages/sidebar/Sidebar";
import PartnerProfile from "../container/admin/pages/partners/partnerProfile/PartnerProfile";
import Subscription from "../container/admin/pages/subscription/Subscription";
import PasswordReset from "../container/admin/pages/passwordReset/PasswordReset";
import PersonalInfo from "../container/admin/pages/users/personalInfo/PersonalInfo";
import Dashboard from "../container/admin/pages/dashboard/Dashboard";
import Users from "../container/admin/pages/users/Users";
import Sectors from "../container/admin/pages/master/sectors/Sectors";
import CreatePost from "../container/admin/pages/createPost/CreatePost";
import University from "../container/admin/pages/master/university/University";
import Area from "../container/admin/pages/master/area/Area";
import Partners from "../container/admin/pages/partners/Partners";
import VoucherCost from "../container/admin/pages/voucherCost/VoucherCost";
import EditPost from "../container/admin/pages/createPost/EditPost";
import Noticeboard from "../container/admin/pages/noticeboard/Noticeboard";
import Settings from "../container/admin/pages/settings/Settings";
import ShamwariZone from "../container/admin/pages/shamwariZone/ShamwariZone";
import EventInfo from "../container/admin/pages/shamwariZone/eventInfo/EventInfo";
import UserEventInfo from "../container/admin/pages/shamwariZone/userEventInfo/UserEventInfo";
import HowToVideos from "../container/admin/pages/master/howToVideos/HowToVideos";
import OfferTemplates from "../container/admin/pages/master/offerTemplates/OfferTemplates";
import Recommendation from "../container/admin/pages/recommendation/Recommendation";

export default function AllRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SuperLogin />} />
          <Route path="resetpassword1" element={<ResetPassword />} />
          <Route path="confirmpassword" element={<ConfirmPassword />} />
          <Route path="verifypassword" element={<VerifyPassword />} />
          <Route path="recoveryemail" element={<RecoveryEmail />} />
          <Route
            path="recoveryemail/:userId/verificationcode"
            element={<VerificationCode />}
          />
          <Route
            path="recoveryemail/:userId/verificationcode/:userId/strongpassword"
            element={<StrongPassword />}
          />
          <Route path="/admin" element={<Sidebar />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path=":partnerId/partnerprofile"
              element={<PartnerProfile />}
            />
            <Route path="subscription" element={<Subscription />} />
            <Route path=":userId/personalinfo" element={<PersonalInfo />} />
            <Route path="users" element={<Users />} />
            <Route path="sector" element={<Sectors />} />
            <Route path=":postId?/:from?/createpost" element={<CreatePost />} />
            <Route path="university" element={<University />} />
            <Route path="howToVideos" element={<HowToVideos />} />
            <Route path="offerTemplates" element={<OfferTemplates />} />
            <Route path="area" element={<Area />} />
            <Route path="partners" element={<Partners />} />
            <Route path="vouchercost" element={<VoucherCost />} />
            <Route path="noticeboard" element={<Noticeboard />} />
            <Route path="editpost" element={<EditPost />} />
            <Route path="passwordreset" element={<PasswordReset />} />
            <Route path="shamwariZone" element={<ShamwariZone />} />
            <Route path="recommendation" element={<Recommendation />} />
            <Route path="settings" element={<Settings />} />
            <Route path=":eventId?/eventInfo" element={<EventInfo />} />
            <Route
              path=":userEventId?/userEventInfo"
              element={<UserEventInfo />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
