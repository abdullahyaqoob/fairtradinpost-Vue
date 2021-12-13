import LandingPage from './components/LandingPage.vue';
import termsAndCondition from './components/termsAndCondition.vue';
import mediation from './components/mediation.vue';
import marketing from './components/marketing.vue';
import advertise from './components/advertise.vue';
import promotion from './components/promotion.vue';
import community from './components/community.vue';
import ThankYou from './components/ThankYou.vue';
import Apply from './components/Apply.vue';
import profile from './components/profile.vue';
import setMediatorProfile from './components/setMediatorProfile.vue';
import receivePayment from './components/receivePayment.vue';
import applicationSubmit from './components/applicationSubmit.vue';
import SignIn from './components/SignIn.vue';
import profileDocumentImages from './components/profileDocumentImages.vue';
import resetPwd from './components/resetPwd.vue';
import PageNotFound from './components/PageNotFound.vue';

export default [
    { path: '/', component: LandingPage },
    { path: '/termsandcondition', component: termsAndCondition },
    { path: '/mediation', component: mediation },
    { path: '/marketing', component: marketing },
    { path: '/advertise', component: advertise },
    { path: '/promotion', component: promotion },
    { path: '/community', component: community },
    { path: '/thankyou', component: ThankYou },
    { path: '/apply', component: Apply },
    { path: '/signin', component: SignIn },
    { path: '/profile', component: profile },
    { path: '/setmediatorprofile', component: setMediatorProfile },
    { path: '/receivepayment', component: receivePayment },
    { path: '/applicationsubmit', component: applicationSubmit },
    { path: '/profiledocumentimages', component: profileDocumentImages },
    { path: '/resetpassword', component: resetPwd },
    { path: '*', component: PageNotFound }
]