import PleaseSignIn from '../components/PleaseSignIn';
import UserPermissions from '../components/Permissions';

const PermissionsPage = props => (
  <div>
    <PleaseSignIn>
      <UserPermissions />
    </PleaseSignIn>
  </div>
);

export default PermissionsPage;